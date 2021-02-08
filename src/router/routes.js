import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import About from '../pages/about';
import Education from '../pages/education';
import Experiences from '../pages/experiences';
import Skills from '../pages/skills';
import Interests from '../pages/interests';
import Awards from '../pages/awards';
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/education' component={Education} />
        <Route path='/experiences' component={Experiences} />
        <Route path='/skills' component={Skills} />
        <Route path='/interests' component={Interests} />
        <Route path='/awards' component={Awards} />
      </Switch>
    );
  }
}
export default Routes;
