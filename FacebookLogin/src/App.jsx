import React from 'react'
import { Logo } from './components/logo'
import { Login } from './components/login'
import { Footer } from './components/footer'
import './index.css'

function App() {

  return (
    <section className='mainSection'>
      <Logo/>
      <Login/>
    </section>
  )
}

export default App
