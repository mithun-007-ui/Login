import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import UserPage from './pages/UserPage'
import AdminPage from './pages/AdminPage'
import PrivateRoute from './pages/PrivateRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/user" element={<PrivateRoute role="user"><UserPage /></PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute role="admin"><AdminPage /></PrivateRoute>} />
    </Routes>
  )
}