import React from 'react';
import App from './App.js';
import TodoView from './components/todos/TodoView';
// import Home from '../components/Home';
//import Profile from '../components/Profile';
import { Route, IndexRoute } from 'react-router';


export default (
  <Route path='/' component={App}>
  <Route path="*" component={App}/>
  </Route>
);

// <Route path='todo/:category' component={TodoView} foo="foo"/>
// <Route path="profile/:username" component={Profile} />
// <IndexRoute component={Home} />