import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
        <Route exact path='/'>
          <About />
        </Route>
        <Route path='/education'>
          <Education />
        </Route>
        <Route path='/experiences'>
          <Experiences />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/interests'>
          <Interests />
        </Route>
        <Route path='/awards'>
          <Awards />
        </Route>
      </Switch>
    );
  }
}
export default Routes;
