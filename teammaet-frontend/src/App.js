import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import {UserProvider} from "./context/UserContext";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Container className="container">
                        <UserProvider>
                            <Route path="/users" exact component={UsersPage}/>
                            <Route path="/user/:id" exact component={UserPage}/>
                            <Route path="/registration" exact component={RegistrationPage}/>
                            <Route path="/" exact component={HomePage}/>
                        </UserProvider>
                    </Container>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
