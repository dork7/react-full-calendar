import { useState } from 'react'
import './App.css'
import CustomCalender from './components/CustomCalender'
import Calender from './components/SpeakerEvents/Calender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomCalender />
      <Calender />
    </>
  )
}

export default App
