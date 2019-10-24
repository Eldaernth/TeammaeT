import React from 'react';
import FriendList from './FriendList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import UsersPage from "./UsersPage"

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
            <Route path={"/users"} component={UsersPage}/>
            <Route path={"/users"} render={(props => <FriendList{...props} id=0)}/>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
