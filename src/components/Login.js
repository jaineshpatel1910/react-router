import React, { useState } from 'react'
import { useAuth } from './auth'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()
    const redirectPath = location.state?.path || "/"
    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }
    return (
        <>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    onChange={(e) => setUser(e.target.value)}
                />
            </label>
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login