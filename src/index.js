import React, { useState } from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import DashBoard from './components/Dashboard';
import './assets/styles/index.css'
import { localeString } from './config/localisation'
import ErrorBoundary from './components/ErrorBoundary';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
//defining app component 
const App = () => {
    //decalring language state variable
    const [ language, setLanguage ] = useState('en')
    localeString.setLanguage(language);
    return(
        <div className="container">
            <Header setLanguage={setLanguage}/>
            <DashBoard localeString={localeString}/>
        </div>
    )
};
render(
    <ErrorBoundary>
        <Router>
            <Switch>
                <Route exact path='/' >
                    <App/>    
                </Route>
                <Route path="*">
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </Router>
    </ErrorBoundary>
, document.getElementById('root'));