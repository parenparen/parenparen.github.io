import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory} from 'react-router'
import App from './components/App';
import Home from './components/Home';
import CodeSketchbook from './components/CodeSketchbook';
import Perception from './components/Perception';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

ReactDOM.render((
   <Router history={appHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Home}/>
         <Route path="codeSketchbook/:page" component={CodeSketchbook} />
         <Route path="perception" component={Perception} />
      </Route>
   </Router>
), document.querySelector('.container'));
