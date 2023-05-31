
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from 'moment'


function createData(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    let i = 1;


    while (date.getMonth() === month) {
        let j = 0
        while (j < 5) {
            var now = moment().subtract(1, 'day');
            let dateFormat1 = moment(date).format('YYYY-MM-DD');
            if (i === 4) i = 1
            let spk = []
            while (i < 4) {
                i++
                spk.push(`Speaker ${i}`)
                days.push({
                    title: '',
                    extendedProps: {
                        name: spk,
                        time: new moment().format('LTS')
                    },
                    date: dateFormat1,
                    backgroundColor: now.isBefore(date) ? '' : 'gray' //now < date2 ? "orange" : "gray"
                })
            }
            date.setDate(date.getDate() + 1);
            j++
        }
    }
    return days;
}

const Calender = () => {
    return (
        <>
            <h1>Demo App</h1>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView='dayGridWeek'
                weekends={false}
                events={createData(4, 2023)}
                eventContent={renderEventContent}
            />
        </>
    )
}



// a custom render function
function renderEventContent(eventInfo) {
    return (
        <>

            <div>
                <b>{eventInfo?.event?.extendedProps.time}</b>
                <b>{eventInfo?.event?.extendedProps?.name?.map((item) => <p style={{
                    textAlign: 'center'
                }}>
                    {item}
                </p>
                )}</b>
            </div>


        </>
    )
}
export default Calender