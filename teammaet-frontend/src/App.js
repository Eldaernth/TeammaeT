import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import UsersPage from "./UsersPage";
import UserPage from "./UserPage";
import FriendList from './FriendList';
import ReceivedDares from './ReceivedList';
import SentDares from './SentDares';

function App() {
  return (
    <Router>
    <div className="App">
        <Switch>
          <Container className="container">
            <Route path="/users" exact component={UsersPage}/>
            <Route path="/user/:id" exact component={UserPage}/>
            <Route path="/user/:userId/friend" exact component={FriendList}/>
            <Route path="/user/:userId/dares/received" exact component={ReceivedDares}/>
            <Route path="/user/:userId/dares/sent" exact component={SentDares}/>
            </Container>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
