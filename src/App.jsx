import React from 'react'
import { Header } from './components/index'
import { Outlet } from 'react-router-dom'
import Card from './components/Cards/Cards'


function App() {

  return (
    <>
      <Header />
      <Outlet />
      
    </>
  )
}

export default App
