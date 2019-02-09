import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App';
import Home from './components/Home';
import CodeSketchbook from './components/CodeSketchbook';
import Perception from './components/Perception';

ReactDOM.render((
   <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Home}/>
         <Route path="codeSketchbook" component={CodeSketchbook}>
             <Route path="codeSketchbook#:page" component={CodeSketchbook}>
             </Route>
         </Route>
         <Route path="perception" component={Perception} />
      </Route>
   </Router>
), document.querySelector('.container'));
