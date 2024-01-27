import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

const Layout = () => {
  return (
        <main className='app'>
            <Navbar></Navbar>
            <Outlet/>
        </main>
  )
}

export default Layout
