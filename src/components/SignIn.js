import React from 'react'
import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { signIn } from '../redux/actions';
import { useDispatch } from 'react-redux';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { "email": email, "password": password }

        fetch('http://localhost:3001/users')
            .then(response => response.json())
            .then(data => {
                for (const i in data) {
                    if (user.email === data[i].email && user.password === data[i].password) {
                        dispatch(signIn(data[i].username, data[i].gender))
                        history.push('/')
                        return
                    }
                }
                setError("Incorrect info")
            })
    }

    return (
        <div className="container mt-5">
            <form className="content border border-dark rounded p-5" onSubmit={handleSubmit}>
                <h3 className="mb-4">Welcome back!</h3>
                <div className="form-group">
                    <input type="email" required className="form-control border-dark" id="exampleInputEmail1" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailError" className="form-text text-danger"></small>
                </div>
                <div className="form-group">
                    <input type="password" required className="form-control border-dark" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <small id="passwordError" className="errors form-text text-danger mt-0">{error}</small>
                </div>

                <button type="submit" className="btn btn-block btn-dark mt-4">Sign In</button>
                <Link to='/'>Go back home</Link>
            </form>
        </div>
    )
}

export default SignIn
