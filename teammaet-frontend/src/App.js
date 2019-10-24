import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import UsersPage from "./UsersPage";
import UserPage from "./Userpage";
import FriendList from './FriendList';

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
            <Route path="/users" exact component={UsersPage}/>
            <Route path="/user/:id" exact component={UserPage}/>
            <Route path="/user/:userId/friend" exact component={FriendList}/>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
