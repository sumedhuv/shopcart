import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom"
import User from "./User"
import Visit from './Visit';
import notfound from './notfound'
const routing=(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/user">user </Link></li>
        <li><Link to="/visit">visit </Link></li>
        
      </ul>
    </div>
   <Switch>
    <Route exact path="/"component={App}/>
    <Route path="/user"component={User}/>
      <Route path="/visit"component={Visit}/>
    <Route component={notfound}/>
    </Switch>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);
