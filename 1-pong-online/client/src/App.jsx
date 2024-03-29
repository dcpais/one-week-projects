import { useEffect, useState } from 'react'
import { io } from "socket.io-client"
import './App.css'

const socket = io.connect("http://localhost:3001")

function App() {

  /**
   * State
   */
  const [lobby, setLobby] = useState(0)
  const [paddlePos, setPaddlePos] = useState(0)
  const [ballPos, setBallPos] = useState({ x: 0, y: 0});
  const [enemyPaddlePos, setEnemyPaddlePos] = useState(0);

  /**
   * Game instructions
   */
  const sendPacket = () => {
    socket.emit("sendPacket", {update: 1});
  }

  const updateGameState = (state) => {
    document.getElementById("p1").style.left = `${state.paddlePos}px`;
    document.getElementById("p2").style.left = `${state.enemyPaddlePos}px`;
    document.getElementById("ball").style.transform = `translateX(${state.ballPos * 100}px)`;
    console.log(document.getElementById("ball").style.left)
  }

  /**
   * Incoming communications
   */
  useEffect(() => {
    socket.on("receivePacket", (data) => {
      console.log("reached");
      setPaddlePos(data.paddlePos);
      setEnemyPaddlePos(data.paddlePos);
      setBallPos(data.ballPos);
      updateGameState(data)
      console.log(data);
    })
  }, [socket])

  /**
   * Final exported game component
   */
  return (
    <div name="container" className="game">
      <div id="p1" className="paddle"></div>
      <div id="ball" className="ball"></div>
      <div id="p2" className="paddle"></div>
      <button name="move" onClick={sendPacket}>Move</button>
    </div>
  ); 

}

export default App
