import React, { useState } from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import DashBoard from './components/Dashboard';
import './index.css'
import {localeString} from './config/localisation'
const App = () => {
    const [ language, setLanguage ] = useState('en')
    localeString.setLanguage(language);
    return(
    <div className="container">
            <Header setLanguage={setLanguage}/>
            <DashBoard localeString={localeString}/>
        </div>
    )
};
render(<App />,document.getElementById('root'));