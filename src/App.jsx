import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {

  return (
    <>
      <div className='header'>
        <div className='header-text'>CV-Creator</div>
      </div>
      <Form />
    </>
  )
}

export default App
