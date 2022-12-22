import React from 'react';
import './App.css';
import { Router, Route, Redirect, Link } from 'wouter';
import MegashopSelectorRoute from 'routes/MegashopSelector/MegashopSelector';
import MegashopConfigurator from 'routes/MegashopConfigurator';

function App() {
    return (
        <div className="App">
            <h1>
                <Link href="/megashops">AllState</Link>
            </h1>
            <Route path="/">
                <Redirect to="/megashops" />
            </Route>
            <Route path="/megashops">
                <MegashopSelectorRoute />
            </Route>
            <Route path="/megashops/:id">
                {(params) => <MegashopConfigurator id={params.id} />}
            </Route>
        </div>
    );
}

export default App;
