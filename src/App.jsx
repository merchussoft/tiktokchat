import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ChatMessage, HeaderMessage, PanelChat, UserForm } from './components';



function App() {

  return (
    <div>
      <HeaderMessage/>
      <UserForm/>
      <PanelChat/>
    </div>
  )
}

export default App
