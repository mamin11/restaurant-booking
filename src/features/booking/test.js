
    // // function disabledH() {
    // //     let _ON_SELECTED_DAY= []
    // //     let HOURS = []
    // //     for (let index = 0; index < bookings.length; index++) {
    // //         DISABLED_HOURS.push(moment(bookings[index].start_time).format("HH"))
    // //         HOURS.push(range(moment(bookings[index].start_time).format("HH"), moment(bookings[index].end_time).format("HH")))
    // //     }
    // //     DISABLED_HOURS = DISABLED_HOURS.join(",")
    // //     // console.log('HOURS ***', HOURS)
        
    // //     //change from string array to int array - string array adds unexpected behaviour
    // //     var intArray = DISABLED_HOURS.split(',').map(function(item) {
    // //         return parseInt(item, 10);
    // //     });

    // //     var flattenedArray = flatten(HOURS)
    // //     var flattenedArrayInt = flattenedArray.slice(',').map(function(item) {
    // //         return parseInt(item, 10);
    // //     });

    // //     // console.log('flattenedArray---->', flattenedArrayInt)

    // //     return flattenedArrayInt
    // // }

    // function getBookingOnSelectedDate(selectedDate = '') {
    //     //inititalize array to store output
    //     let BOOKINGS_ON_DAY = []
    //     let HOURS = []
    //     if(selectedDate !== '') {
    //         //loop through the bookings
    //         for (let index = 0; index < bookings.length; index++) {
    //             //compare if date of item at index is similar to selected
    //             // if((moment(bookings[index].start_time).format("YYYY-MM-DD")) == selectedDate){
    //             if(moment(bookings[index].start_time).format("YYYY-MM-DD") ==selectedDate){
    //                 //if similar, add to array 
    //                 // console.log('similar check success *****')
    //                 BOOKINGS_ON_DAY.push(moment(bookings[index].start_time).format("HH"))
    //                 HOURS.push(range(moment(bookings[index].start_time).format("HH"), moment(bookings[index].end_time).format("HH")))
    //             } 
    //         }

    //         BOOKINGS_ON_DAY = BOOKINGS_ON_DAY.join(",")

    //         var flattenedArray = flatten(HOURS)
    //         DISABLED_HOURS_ON_SELECTED_DAY = flattenedArray.slice(',').map(function(item) {
    //             return parseInt(item, 10);
    //         });

    //         console.log('DISABLED_HOURS_ON_SELECTED_DAY', DISABLED_HOURS_ON_SELECTED_DAY)

    //         return DISABLED_HOURS_ON_SELECTED_DAY
    //     } else {
    //         return []
    //     }

    // }