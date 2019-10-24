import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import UsersPage from "./UsersPage";
import UserPage from "./Userpage";

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
            <Route path={"/users"} component={UsersPage}/>
            <Route path={"/user/:id"} component={UserPage}/>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
