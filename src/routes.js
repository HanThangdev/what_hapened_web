import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from './pages/HomePage/HomePage.jsx'
import Introduce from './pages/Introduce/Introduce.jsx'


const routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/introduce" component={Introduce} />
            <Route path="/solution" component={HomePage} />
            <Route path="/rateplan" component={HomePage} />
            <Route path="/login" component={HomePage} />
            <Route path="/apply" component={HomePage} />
        </Switch>


    )
}

export default routes
