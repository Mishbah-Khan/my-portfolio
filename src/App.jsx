import React from 'react'
import Cursor from './components/cursor/Cursor';
import Navbar from './components/navbar/Navbar';
import './App.css'

function App() {

  return (
    <div className="app">
      <Cursor />
      <Navbar />
      <div className="noise-overlay"></div>
    </div>
  )
}

export default App
