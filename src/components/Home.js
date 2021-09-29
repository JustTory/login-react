import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const user = useSelector(state => state.user)
    const [serverMsg, setServerMsg] = useState('')
    const [username, setUsername] = useState('')
    const [gender, setGender] = useState('')
    let formData = new FormData();

    let msg = ''
    if (user !== null) msg = "Welcome, " + user.username
    else msg = "Please log in"


    const getReq = () => {
        axios.get('http://localhost:8080/react_login/src/server.php')
            .then((response) => {
                setServerMsg(response.data)
            })
    }

    const handleSubmit = (e) => {

        console.log(formData);
        e.preventDefault();
        formData.append("username", username)
        formData.append("gender", gender)

        axios.post("http://localhost:8080/react_login/src/server.php", formData)
        .then((response) => {
            console.log(response.data);
        })
    }

    return (
        <div>
            <h1 className="mt-5 ml-3">{msg}</h1>
            <button className="btn btn-secondary btn-lg ml-5 mt-5" onClick={getReq}>Get response from PHP server</button>
            <h5 className="ml-5 mt-3">{serverMsg}</h5>
            <form className="content p-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" required className="form-control border-dark" id="exampleInputEmail1" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="text" required className="form-control border-dark" id="exampleInputPassword1" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary btn-lg mt-2">Post request to PHP server</button>
            </form>
        </div>

    )
}

export default Home
