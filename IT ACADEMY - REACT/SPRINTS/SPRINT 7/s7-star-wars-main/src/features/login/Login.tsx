import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoggingIn, setIsLoggingIn] = useState(false)

    const { login, loginWithGoogle } = useAuth()
    const handleLogin = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoggingIn(true)
        try {
            await login(email, password)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoggingIn(false)
        }
    }

    const handleGoogle = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoggingIn(true)
        try {
            await loginWithGoogle()
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoggingIn(false)
        }
    }

    return (
        <div className='mx-auto flex flex-col items-center bg-zinc-600 my-8 p-3 rounded-lg'>
            <h2 className='text-2xl font-semibold text-center'>Log in to the galaxy archive</h2>
            {error && <p className='text-red-500 mb-2'>{error}</p>}
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input
                        className='rounded pl-[6px] py-1'
                        type="email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input
                        className='rounded pl-[6px] py-1'
                        type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                    className='bg-slate-700 hover:bg-slate-800 py-2 rounded-xl disabled:opacity-50'
                >
                    {isLoggingIn ? 'Iniciando...' : 'Take me there!'}
                </button>
                <button
                    onClick={handleGoogle}
                    disabled={isLoggingIn}
                    className='border-2 border-zinc-900 rounded-lg disabled:opacity-50'
                >
                    {isLoggingIn ? 'Cargando...' : 'GOOGLE'}
                </button>
            </div>
        </div>
    )
}