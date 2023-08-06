import FullCalendar from '@fullcalendar/react'
import React, { useRef } from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useGetEventData } from '../../hooks/useGetEventData'
import timeGridPlugin from '@fullcalendar/timegrid'
import timelinePlugin from '@fullcalendar/timeline'
const CustomCalender = () => {
    const events = useGetEventData(8)
    const calRef = useRef()
    const onEventAdded = (event) => {
        const api = calRef.current.getApi();
        api.addEvent(event);
    };

    const handleDateSelect = (event) => {
        console.log('handleDateSelect', event)

    }
    const handleEventClick = (event) => {
        console.log('handleEventClick', event)

    }
    const handleEvents = (event) => {
        console.log('handleEvents', event)

    }
    const dateClickHandler = (event) => {
        console.log('event', event)

    }

    const dayClickHandler = (event) => {
        console.log('dayClickHandler', event)

    }

    return (
        <FullCalendar
            ref={calRef}
            events={events}
            eventContent={renderEventContent}
            plugins={[dayGridPlugin,]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}

            selectable={true}
            // dayMaxEvents={true}
            editable={true}
            // selectMirror={true}
            weekends={true}
            dateClick={dateClickHandler}
            // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
       eventAdd={function(){}}
       eventChange={function(){}}
       eventRemove={function(){}}

       */
        />
    )
}


function renderEventContent(eventInfo) {
    return (
        <>
            <div >
                <p key={eventInfo?.event?.extendedProps.time}>{eventInfo?.event?.extendedProps.time} - {eventInfo?.event?.extendedProps.timeTo}</p>
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

export default CustomCalender