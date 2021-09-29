import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ContactUs from './components/ContactUs'

const HomeNavi = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/contactus'>
                    <ContactUs />
                </Route>
            </Switch>
        </div>
    )
}

export default HomeNavi
