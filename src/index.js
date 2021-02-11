import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header';
import DashBoard from './components/Dashboard';
import './index.css'
const App = () => (
    <div className="container">
        <Header />
        <DashBoard/>
    </div>);
render(<App />,document.getElementById('root'));