import React, {useEffect} from 'react'
import { DatePicker, Typography, Input, Form, Button } from 'antd';
import moment from 'moment';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {getBookings} from '../../app/actions/menuActions'

const { RangePicker } = DatePicker;

export default function Booking() {

    let DISABLED_HOURS_ON_SELECTED_DAY = []
    const bookings = useSelector(state => state.menus.bookings)
    const dispatch = useDispatch()
    
    const fetchBookings = async () => {
        const response = await axios
        .get('http://127.0.0.1:8000/api/booking')
        .catch((err) => {
            console.log(err)
        })
        dispatch(getBookings(response.data))
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    console.log(bookings)


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

        console.log(dateString);
        // console.log(date, dateString);
    }

    // console.log('disabled hours',([bookings.map(booking => moment(booking.start_time).format("H"))].toString()))

    return (
        <div>
            <Form >
                <Title style={title}>Pick the day and time</Title>
                <Form.Item wrapperCol={{span:5, push:9}}>
                    <Input size={'large'} placeholder="Enter your email" style={{marginLeft:'20px'}} />
                </Form.Item>
                <DatePicker size={'large'} onChange={onChange} disabledDate={disabledDate} />
                <RangePicker picker={'time'} format=" HH:mm" size={'large'} showTime disabledHours={() => {return DISABLED_HOURS_ON_SELECTED_DAY}} />
                <Form.Item wrapperCol={{span:5, push:9}} style={{marginLeft:'30px'}} >
                    <Button type="primary" htmlType="submit" style={{margin:'20px 0', float:'left'}}>
                        Book
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
