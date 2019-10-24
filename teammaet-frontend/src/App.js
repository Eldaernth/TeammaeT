import React from 'react';
import FriendList from './FriendList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/users/:id/friend" render={(props) => <FriendList {...props} />}/> 
            </div>
        </Router>
    );
}

export default App;
