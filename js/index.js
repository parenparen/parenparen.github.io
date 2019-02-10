import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { HashRouter as Router } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import CodeSketchbook from './components/CodeSketchbook';
import Perception from './components/Perception';
import Generative from './components/Generative';
import styles from '../css/index.scss';

ReactDOM.render((
 <Router>
   <App>
      <Switch>
         <Route exact path='/' component={Home}/>
         <Route path="/codeSketchbook/:page" component={CodeSketchbook} />
         <Route path="/perception" component={Perception} />
         <Route path="/generative" component={Generative} />
      </Switch>
   </App>
 </Router>
), document.querySelector('.container'));
