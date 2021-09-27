import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ContactUs from './components/ContactUs'


const AppNavigation = () => {
    return (
        <Router>
            <Switch>
                <Route exact path ='/'>
                    <Navbar/>
                    <Home/>
                </Route>
                <Route exact path ='/contactus'>
                    <Navbar/>
                    <ContactUs/>
                </Route>
                <Route exact path='/signin' >
                    <SignIn/>
                </Route>
                <Route exact path='/signup' >
                    <SignUp/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppNavigation
