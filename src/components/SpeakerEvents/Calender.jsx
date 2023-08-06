
import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from 'moment'
import styled from '@emotion/styled'
import { useGetEventData } from '../../hooks/useGetEventData'

export const StyleWrapper = styled.div`
    .fc-event {
        border : 0;
        margin-top:0.5rem;
        padding: 0.5rem;
        border-radius: 0;
        height : fit-content;
        min-height : 10rem;
     }
    .fc-event p {
        // color: black
    }
    .fc-col-header-cell-cushion {
        color : #8f94ad;
    }
    .fc-toolbar-title{
        color : #8f94ad;
    }

`




const Calender = () => {

    const events = useGetEventData()

    return (
        <>

            <StyleWrapper>
                <div class="main-container">
                    <h1>Demo App</h1>
                    <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView='dayGridWeek'
                        weekends={false}
                        events={events}
                        eventContent={renderEventContent}
                        dayHeaderFormat={(date) => {
                            return moment(date.date).format('dd YY,M');
                        }}

                    />
                </div>
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