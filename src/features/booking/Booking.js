import React, {useEffect, useState} from 'react'
import { DatePicker, Typography, Input, Form, Button, Alert } from 'antd';
import moment from 'moment';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {getBookings} from '../../app/actions/menuActions'

const { RangePicker } = DatePicker;

export default function Booking() {

    let DISABLED_HOURS_ON_SELECTED_DAY = []
    let formData = []
    let formRef = React.createRef(); //form reference, used to reference form when clearing fields after submission
    const bookings = useSelector(state => state.menus.bookings)
    const dispatch = useDispatch()
    
    const fetchBookings = async () => {
        const response = await axios
        .get('https://restaurant-amin.herokuapp.com/api/booking')
        .catch((err) => {
            console.log(err)
        })
        dispatch(getBookings(response.data))
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    // console.log(bookings)


    const {Title} = Typography;

    const title = {
        marginTop: '50px',
        marginBottom: '50px',
    };

    function range(start, end) {
        const result = [];
        for (let i = start; i <= end; i++) {
        result.push(i);
        }
        return result;
    }

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

    //function to flatten an array
    function flatten(arr) {
        return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
        }, []);
    }

    function getBookingOnSelectedDate(selectedDate = '') {
        //inititalize array to store output
        let BOOKINGS_ON_DAY = []
        let HOURS = []
        if(selectedDate !== '') {
            //loop through the bookings
            for (let index = 0; index < bookings.length; index++) {
                //compare if date of item at index is similar to selected
                // if((moment(bookings[index].start_time).format("YYYY-MM-DD")) == selectedDate){
                if(moment(bookings[index].start_time).format("YYYY-MM-DD") ==selectedDate){
                    //if similar, add to array 
                    // console.log('similar check success *****')
                    BOOKINGS_ON_DAY.push(moment(bookings[index].start_time).format("HH"))
                    HOURS.push(range(moment(bookings[index].start_time).format("HH"), moment(bookings[index].end_time).format("HH")))
                } 
            }

            BOOKINGS_ON_DAY = BOOKINGS_ON_DAY.join(",")

            var flattenedArray = flatten(HOURS)
            DISABLED_HOURS_ON_SELECTED_DAY = flattenedArray.slice(',').map(function(item) {
                return parseInt(item, 10);
            });

            console.log('DISABLED_HOURS_ON_SELECTED_DAY', DISABLED_HOURS_ON_SELECTED_DAY)

            return DISABLED_HOURS_ON_SELECTED_DAY
        } else {
            return []
        }

    }

    function onChange(date, dateString) {
        //set disabled hours for selected date
        DISABLED_HOURS_ON_SELECTED_DAY = getBookingOnSelectedDate(dateString)
        formData['date'] = dateString
        console.log(dateString);
        // console.log(date, dateString);
    }

    function onChangeTime(time, timeString) {
        formData['s_time'] = timeString[0]
        formData['e_time'] = timeString[1]
    }

    // console.log('disabled hours',([bookings.map(booking => moment(booking.start_time).format("H"))].toString()))

    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        formData['email'] = values.email
        formData['start_time'] = formData['date']+formData['s_time']
        formData['end_time'] = formData['date']+formData['e_time']
        if(formData != null) {
            // console.log('form data: ', formData)
            addBooking()

            //clear form data
            formRef.current.resetFields();
            //show sucess message
            setVisible(true);
        }
    };

    function addBooking() {
        const FormDataSubmit = new FormData();
        FormDataSubmit.append("email", formData['email'])
        FormDataSubmit.append("start_time", formData['start_time']) 
        FormDataSubmit.append("end_time", formData['end_time']) 
        FormDataSubmit.append(
            "headers", {
                "Content-Type": "multipart/form-data"
            }
        )

        axios.post('https://restaurant-amin.herokuapp.com/api/booking', FormDataSubmit).catch((err) => {
            console.log(err)
        })
    }

    //to handle sucess alert
    const [visible, setVisible] = useState(false);

    const handleClose = () => {
        setVisible(false);
    };

    return (
        <div>
            <Form 
            initialValues={{ remember: true }}
            onFinish={onFinish}
            ref={formRef}
            >
                <Title style={title}>Pick the day and time</Title>
                <Form.Item wrapperCol={{span:5, push:9}}
                name="email" 
                    rules={[
                    {
                        required: true,
                        type: "email",
                        message: "The input is not valid E-mail!"
                    }
                    ]}
                >
                    <Input size={'large'} placeholder="Enter your email" style={{marginLeft:'20px'}} />
                </Form.Item>

                <Form.Item
                rules={[
                    {
                        required: true,
                        // type: "date",
                        message: "The input is not valid!"
                    }
                    ]}
                >
                    <DatePicker size={'large'} onChange={onChange} disabledDate={disabledDate} />
                <RangePicker picker={'time'} onChange={onChangeTime} format=" HH:mm" size={'large'} showTime disabledHours={() => {return DISABLED_HOURS_ON_SELECTED_DAY}} />
                </Form.Item>
                
                <Form.Item wrapperCol={{span:5, push:9}} style={{marginLeft:'30px'}} >
                    <Button type="primary" htmlType="submit" style={{margin:'20px 0', float:'left'}}>
                        Book
                    </Button>
                </Form.Item>
            </Form>
            {visible ? (
            <Alert message="Thank you. Your reservation has been created." type="success" closable  style={{width: '450px', margin: 'auto'}} afterClose={handleClose} />
            ) : null}
        </div>
    )
}
