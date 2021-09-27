import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const user = useSelector(state => state.user)
    const [serverMsg, setServerMsg] = useState('')

    let msg = ''
    if(user !== null) msg = "Welcome, " + user.username
    else msg = "Please log in"


    const onClick = () => {
        axios.get('http://localhost:8080/react_login/src/server.php')
        .then((response) => {
            setServerMsg(response.data)
        })
    }
    return (
        <div>
            <h1 className="mt-5 ml-3">{msg}</h1>
            <button className="btn btn-secondary btn-lg ml-5 mt-5" onClick = {onClick}>Get response from PHP server</button>
            <h5 className="ml-5 mt-3">{serverMsg}</h5>
        </div>

    )
}

export default Home
