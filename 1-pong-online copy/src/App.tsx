import { useState } from 'react';
import './App.css'
import CSS from 'csstype';

function App() {
  const [pos, setPos] = useState([0, 0]);
  

  const paddleStyle: CSS.Properties = {
    backgroundColor: '#0F0F0F',
    height: '28px',
    width: '300px',
    border: '5px solid #f0f0f0'
  }

  return <div style={paddleStyle}></div>
}

export default App
