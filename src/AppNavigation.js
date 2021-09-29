import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'


import Hehe from './components/Hehe'
import HomeNavi from './HomeNavi'


const AppNavigation = () => {
    return (
        <Router>
            <Switch>
                <Route>
                    <HomeNavi />
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
