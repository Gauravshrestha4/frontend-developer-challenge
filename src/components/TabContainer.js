import React from 'react';
import PropTypes from 'prop-types';

import './tabContainer.css'
const TabContainer = ({activeTab,setActiveTab}) => {
    return (
        <div className="tabContainer">
            <div className={activeTab=='upcoming' && 'active'} onClick={()=>setActiveTab('upcoming')}>Upcoming Campaigns</div>
            <div className={activeTab=='live' && 'active'} onClick={() => setActiveTab('live')}>Live Campaigns</div>
            <div className={activeTab=='past' && 'active'} onClick={() => setActiveTab('past')}>Past Campaigns</div>
        </div>
    )
}
TabContainer.propTypes = {
    activeTab: PropTypes.string,
    setActiveTab:PropTypes.func
}
export default TabContainer;