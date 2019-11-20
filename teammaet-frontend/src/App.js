import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import {UserProvider} from "./context/UserContext";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Container className="container">
                        <UserProvider>
                            <Route path="/login" exact component={LoginPage}/>
                            <Route path="/users" exact component={UsersPage}/>
                            <Route path="/user/:id" exact component={UserPage}/>
                            <Route path="/registration" exact component={RegistrationPage}/>
                        </UserProvider>
                    </Container>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
