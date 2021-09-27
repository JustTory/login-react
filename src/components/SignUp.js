import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { signIn } from '../redux/actions';
import { useDispatch } from 'react-redux';

import '../css/Login.css';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [gender, setGender] = useState('male')
    //const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if (password2 !== password1 && password2 !== '') setErrorPassword("Passwords don't match")
        else setErrorPassword('')
    }, [password2, password1])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (errorPassword === '') {
            const user = { "email": email, "username": username, "password": password2, "gender": gender }
            fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            }).then(() => {
                dispatch(signIn(username, gender))
                history.push('/')
            })
        }
    }

    return (
        <div className="container mt-5">
            <form className="content border border-dark rounded p-5" onSubmit={handleSubmit}>
                <h3 className="mb-4">Create Account</h3>
                <div className="form-group">
                    <input type="email" required className="form-control border-dark" id="exampleInputEmail1" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailError" className="errors form-text text-danger mt-0"></small>
                </div>
                <div className="form-group">
                    <input type="username" required className="form-control border-dark" id="exampleInputUsername" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <small id="usernameError" className="errors form-text text-danger mt-0"></small>
                </div>
                <div className="form-group">
                    <input type="password" required className="form-control border-dark" id="exampleInputPassword1" placeholder="Password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
                    <small id="password1Error" className="errors form-text text-danger mt-0"></small>
                </div>
                <div className="form-group">
                    <input type="password" required className="form-control border-dark" id="exampleInputPassword2" placeholder="Confirm password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                    <small id="password2Error" className="errors form-text text-danger mt-0">{errorPassword}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Gender</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>


                <button type="submit" className="btn btn-block btn-dark mt-4">Sign Up</button>
                <Link to='/'>Go back home</Link>
            </form>
        </div>
    )
}

export default SignUp
