import React, { useState, memo } from 'react';
import TabContainer from './TabContainer';
import MainTable from './MainTable';
import {mockData} from '../mockdata/mock';
import '../assets/dashboard.css';

const DashBoard = ({localeString}) => {
    //using state to store the active tab from upcoming/live/past
    let [ activeTab, setActiveTab ] = useState('upcoming')
    let [ tableData, setData ] = useState(mockData.data);

    let tabsData = {
        'upcoming': [],
        'past': [],
        'live':[]
    }
    for (let i = 0; i < tableData.length; i++) {
        const diffTime = (new Date(tableData[ i ].createdOn) - new Date());
        const diffTimeAbs = Math.abs(diffTime);
        const diffDays = (diffTimeAbs / (1000 * 60 * 60 * 24));
         if (diffDays > 1 && diffTime<0) {
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
            <h1>{localeString.manage}</h1>
            <TabContainer setActiveTab={setActiveTab} activeTab={activeTab} localeString={localeString}/>
            <MainTable data={tabsData[ activeTab ]} tableData={tableData} activeTab={activeTab} setData={setData} localeString={localeString}/>
        </div>
    )
}
export default DashBoard;