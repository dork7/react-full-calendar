
import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from 'moment'
import styled from '@emotion/styled'

export const StyleWrapper = styled.div`
    .fc-event {
        border : 0;
        margin-top:0.5rem;
        padding: 0.5rem;
        border-radius: 0;
     }
    .fc-event p {
        // color: black
    }
    `

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const createRandomSpeakers = () => {
    return Array(random(1, 4)).fill(1).map((_, idx) => `Speaker ${idx + 1}`)
}

const createEvent = (date, speakers) => {
    return {
        title: '',
        extendedProps: {
            name: speakers,
            time: new moment().format("HH:mm"),
            timeTo: new moment().add(2, 'hours').format("HH:mm") // adding two hours in the time
        },
        date: moment(date).format('YYYY-MM-DD'),
        backgroundColor: getEventColorFromCount(speakers.length)
    }
}

const getEventColorFromCount = (code) => {
    switch (code) {
        case 2:
            return '#e7c254';
        case 3:
            return '#a4aab0';
        case 4:
            return '#409cff';
        default:
            return '#65c1cf'
    }
}

const Calender = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        const days = [
            '2023-05-28', '2023-05-29', '2023-05-30', '2023-05-31', '2023-06-01', '2023-06-02', '2023-06-03', '2023-05-28', '2023-05-29', '2023-05-30', '2023-05-31', '2023-06-01', '2023-06-02', '2023-06-03',
            '2023-05-28', '2023-05-29', '2023-05-30', '2023-05-31', '2023-06-01', '2023-06-02', '2023-06-03', '2023-05-28', '2023-05-29', '2023-05-30', '2023-05-31', '2023-06-01', '2023-06-02', '2023-06-03', '2023-06-04', '2023-06-02', '2023-06-03', '2023-06-04', '2023-06-05', '2023-06-05', '2023-06-06', '2023-06-07',
        ]

        const events = days.map(date => createEvent(date, createRandomSpeakers()))
        setEvents(events)
    }, [])


    return (
        <>
            <StyleWrapper>
                <h1>Demo App</h1>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView='dayGridWeek'
                    weekends={false}
                    events={events}
                    eventContent={renderEventContent}
                />
            </StyleWrapper>
        </>
    )
}

// a custom render function
function renderEventContent(eventInfo) {
    return (
        <>

            <div >
                <p >{eventInfo?.event?.extendedProps.time} - {eventInfo?.event?.extendedProps.timeTo}</p>
                <hr />
                <p>{eventInfo?.event?.extendedProps?.name?.map((item) => <p style={{
                    textAlign: 'center'
                }}>
                    {item}
                </p>
                )}</p>
            </div>


        </>
    )
}
export default Calender