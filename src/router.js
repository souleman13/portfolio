import React from 'react'
import { Route, Switch } from 'react-router-dom'

import NotFound from './pages/notFound'
import Landing from './pages/landing'
import Portfolio from './pages/portfolio'
import Skills from './pages/skills'

export default () => (
        <Switch>

            <Route exact path="/" component={Landing}/>

            <Route path="/portfolio" component={Portfolio}/>

            <Route path="/skills" component={Skills}/>

            <Route component={NotFound}/>

        </Switch>
)