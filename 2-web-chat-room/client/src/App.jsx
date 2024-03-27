import { useState } from 'react'
import { io } from "socket.io-client"
const socket = io.connect("http://localhost:3001")

function App() {

  const sendMessage = () => {
    socket.emit("")
  }

  return (
    <div className="App">
      <input placeholder="Message..." />
      <button> Send Message </button>
    </div>)
}

export default App
