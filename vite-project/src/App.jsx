import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  )
}

export default App
