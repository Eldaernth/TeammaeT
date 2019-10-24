import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import UsersPage from "./UsersPage"

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
            <Route path={"/users"} component={UsersPage}/>)}/>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
