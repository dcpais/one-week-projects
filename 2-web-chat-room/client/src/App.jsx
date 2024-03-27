import { useEffect, useState } from 'react'
import { io } from "socket.io-client"
const socket = io.connect("http://localhost:3001")

function App() {

  const [message, setMessage] = useState("")
  const [messageReceived, setMessageReceived] = useState("")
  const sendMessage = () => {
    socket.emit("send_message", { message })
    console.log("message sent")
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
      console.log("asdasd");
    })
  }, [socket])

  return (
    <div className="App">
      <input 
        placeholder="Message..." 
        onChange={(event) => {
          setMessage(event.target.value)
        }}
      />
      <button onClick={sendMessage}> Send Message </button>
      <div>{messageReceived}</div>
    </div>)
}

export default App
