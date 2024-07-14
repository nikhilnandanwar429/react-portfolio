import React from 'react'
import { Header } from './components/index'
import { Outlet } from 'react-router-dom'
import Card from './components/Cards/Cards'


function App() {

  return (
    <>
    <Header />
    <Outlet />
    <Card apiLink={"https://codechef-api.vercel.app/nikhil_nand"}/>

    </>
  )
}

export default App
