import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import UsersPage from "./UsersPage";
import UserPage from "./UserPage";

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Container className="container">
            <Route path="/users" exact component={UsersPage}/>
            <Route path="/user/:id" exact component={UserPage}/>
            </Container>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
