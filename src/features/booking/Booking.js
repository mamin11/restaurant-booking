import React, {useEffect} from 'react'
import { DatePicker, Typography } from 'antd';
import moment from 'moment';
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {getBookings} from '../../app/actions/menuActions'

const { RangePicker } = DatePicker;

export default function Booking() {
    // var DISABLED_HOURS = []
    // var DISABLED_MINUTES = []
    // var DISABLED_SECONDS = []

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
        for (let i = start; i < end; i++) {
        result.push(i);
        }
        return result;
    }

    function disabledDate(current) {
        // Can not select days before today and today
        return current && current < moment().endOf('day');
    }

    function disabledH() {
        let DISABLED_HOURS= []
        for (let index = 0; index < bookings.length; index++) {
            DISABLED_HOURS.push(moment(bookings[index].start_time).format("HH"))
            
        }
        DISABLED_HOURS = DISABLED_HOURS.join(",")
        
        //change from string array to int array - string array adds unexpected behaviour
        var intArray = DISABLED_HOURS.split(',').map(function(item) {
            return parseInt(item, 10);
        });

        return intArray
    }

    function disabledDateTime() {
        return {
        disabledHours: () => [1,2,3],
        // disabledHours: () => [bookings.map(booking => moment(booking.start_time).format("H"))].toString(),
        // disabledHours: () => disabledH(),
        // disabledHours: () => [...moment(bookings.start_date).format("hh")],
        // disabledHours: () => range(0, 24).splice(4, 20),
        // disabledMinutes: () => range(30, 60),
        // disabledSeconds: () => [55, 56],
        };
    }

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    // console.log(moment("2021-01-01 10:30:00").format("hh:mm:ss a"))

    // const amin = [...bookings.map(booking => moment(booking.start_time).format("H"))].toString()
    console.log('disabled hours',([bookings.map(booking => moment(booking.start_time).format("H"))].toString()))

    return (
        <div>
            <Title style={title}>Pick the day and time</Title>
            <DatePicker size={'large'} onChange={onChange} />
            <RangePicker picker={'time'} format=" HH:mm" size={'large'} showTime disabledHours={disabledH} />
            {/* <RangePicker picker={'time'} format="YYYY-MM-DD H:m" size={'large'} showTime disabledDate={disabledDate} disabledTime={disabledDateTime} /> */}
        </div>
    )
}
