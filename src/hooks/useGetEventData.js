import React, { useEffect, useState } from 'react'
import moment from 'moment'


const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const createRandomSpeakers = () => {
    return Array(random(1, 5)).fill(1).map((_, idx) => `Speaker ${idx + 1}`)
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


export const useGetEventData = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const days = []
        for (let i = 1; i < 9; i++) {
            days.push(...Array(5).fill(0).map(item => moment().add(i, 'day').format('YYYY-MM-DD')))
        }
        const events = days.map(date => createEvent(date, createRandomSpeakers()))
        setEvents(events)
    }, [])

    return events
}