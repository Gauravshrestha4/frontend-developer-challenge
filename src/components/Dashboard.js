import React, { useState } from 'react';
import TabContainer from './TabContainer';
import MainTable from './MainTable';
import data from '../mockdata/mock'
import './dashboard.css'
const DashBoard = () => {
    //using state to store the active tab from upcoming/live/past
    let [ activeTab, setActiveTab ] = useState('upcoming')
    let [ tableData, setData ] = useState(data.data)
    console.log('data is',tableData)
    return (
        <div className="dashBoard">
            <h1>Manage Campaigns</h1>
            
            <TabContainer setActiveTab={setActiveTab} activeTab={activeTab}/>
            <MainTable data={tableData} setData={setData}/>
        </div>
    )
}
export default DashBoard;