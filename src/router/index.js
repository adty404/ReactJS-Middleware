import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../views/Dashboard'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Home from '../views/Home'
import { Navbar } from '../components/Navbar'
import * as Middleware  from '../middleware/App'

export default function Router() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="mt-4"></div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Middleware.Authenticared><Dashboard /></Middleware.Authenticared>} />
            <Route path="/login" element={<Middleware.Guest render={<Login />} />} />
            <Route path="/register" element={<Middleware.Guest render={<Register />} />} />
        </Routes>
    </BrowserRouter>
  )
}
