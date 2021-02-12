import React, { useState } from 'react';
import TabContainer from './TabContainer';
import MainTable from './MainTable';
import data from '../mockdata/mock'
import './dashboard.css'
const DashBoard = () => {
    //using state to store the active tab from upcoming/live/past
    let [ activeTab, setActiveTab ] = useState('upcoming')
    let [ tableData, setData ] = useState(data.data)
    let tabsData = {
        'upcoming': [],
        'past': [],
        'live':[]
    }
    for (let i = 0; i < tableData.length; i++) {
        const diffTime = (new Date(tableData[ i ].date) - new Date());
        const diffTimeAbs = Math.abs(diffTime);
        const diffDays = Math.floor(diffTimeAbs / (1000 * 60 * 60 * 24));
        console.log('diff', diffDays)
         if (diffDays > 0 && diffTime<0) {
            tabsData[ 'past' ].push(tableData[ i ])
        }
        else if (diffDays > 0 && diffTime>0) {
            tabsData[ 'upcoming' ].push(tableData[ i ])
        }
        else {
            tabsData[ 'live' ].push(tableData[ i ])
        }
       
    }
    return (
        <div className="dashBoard">
            <h1>Manage Campaigns</h1>
            
            <TabContainer setActiveTab={setActiveTab} activeTab={activeTab}/>
            <MainTable data={tabsData[ activeTab ]} tableData={tableData} setData={setData}/>
        </div>
    )
}
export default DashBoard;