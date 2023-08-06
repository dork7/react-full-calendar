import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calender from './components/SpeakerEvents/Calender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calender />
    </>
  )
}

export default App
