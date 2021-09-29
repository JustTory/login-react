import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


import Hehe from './components/Hehe'
import HomeNavi from './HomeNavi'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ContactUs from './components/ContactUs'



const AppNavigation = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path = "/">
                    <Home/>
                </Route>
                <Route path = "/contactus">
                    <ContactUs/>
                </Route>
                <Route path='/signin' >
                    <SignIn />
                </Route>
                <Route path='/signup' >
                    <SignUp />
                </Route>
                <Route path='/hehe' >
                    <Hehe/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppNavigation
