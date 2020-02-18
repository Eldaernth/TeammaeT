import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserPage from "./pages/UserPage";
import {UserProvider} from "./context/UserContext";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import Navigation from "./component/Navigation/Navigation";
import FriendsPage from "./pages/FriendsPage";
import {DareProvider} from "./context/DareContext";
import {FriendsProvider} from "./context/FriendsContext";
import DarePage from "./pages/DarePage";
import Axios from "axios"

function App() {
    Axios.defaults.headers.common["Authorization"]=`Bearer ${localStorage.getItem("token")}`;
    return (
        <Router>
            <Navigation/>
            <div className="App">
                <Switch>
                    <Container className="container">
                        <UserProvider>
                            <Route path="/login" exact component={LoginPage}/>
                            <Route path="/users" exact component={UsersPage}/>
                            <DareProvider>
                                <FriendsProvider>
                                    <Route path="/user/:id" exact component={UserPage}/>
                                    <Route path="/user/:userId/dare/:id/" exact component={DarePage}/>
                                    <Route path="/user/:id/friends" exact component={FriendsPage}/>
                                </FriendsProvider>
                            </DareProvider>
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
