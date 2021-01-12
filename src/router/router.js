import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/about' 
import Education from '../pages/education'
import Experiences from '../pages/experiences';
import Skills from '../pages/skills';
import Interests from '../pages/interests';
import Awards from '../pages/awards';
class Router extends Component {
    render() {
        return (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/educations" component={Education} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/skills" component={Skills} />
            <Route path="/interests" component={Interests} />
            <Route path="/awards" component={Awards} />
          </Switch>
        );
    }
}
export default Router;