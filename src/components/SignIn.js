import React from 'react'
import { Link } from 'react-router-dom'
import { signIn } from '../redux/actions';

const SignIn = () => {
    return (
        <div className="container mt-5">
            <form className="content border border-dark rounded p-5">
                <h3 className="mb-4">Welcome back!</h3>
                <div className="form-group">
                    <input type="email" className="form-control border-dark" id="exampleInputEmail1" placeholder="Enter email" />
                    <small id="emailError" className="form-text text-danger"></small>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control border-dark" id="exampleInputPassword1" placeholder="Password" />
                    <small id="passwordError" className="form-text text-danger"></small>
                </div>

                <button type="submit" className="btn btn-block btn-dark mt-4">Sign In</button>
                <Link to='/'>Go back home</Link>
            </form>
        </div>
    )
}

export default SignIn
