import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e?.preventDefault?.()
    // Hardcoded credentials as requested:
    // user / 123  -> role: user
    // admin / 123 -> role: admin
    if (username === 'user' && password === '123') {
      localStorage.setItem('role', 'user')
      navigate('/user')
    } else if (username === 'admin' && password === '123') {
      localStorage.setItem('role', 'admin')
      navigate('/admin')
    } else {
      setShowError(true)
      setTimeout(() => setShowError(false), 3000) // hide after 3s
    }
  }

  return (
    <div className="bg-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {showError && <Modal message={"Invalid Username or Password"} />}
    </div>
  )
}