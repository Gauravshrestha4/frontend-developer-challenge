import React from 'react';
import PropTypes from 'prop-types';

import '../assets/tabContainer.css'
const TabContainer = ({activeTab,setActiveTab,localeString}) => {
    return (
        <div className="tabContainer">
            <div className={ ` tabItem ${activeTab == 'upcoming' && 'active'}`} onClick={() => setActiveTab('upcoming')}>{localeString.upcoming}</div>
            <div className={`tabItem ${activeTab == 'live' && 'active'}`} onClick={() => setActiveTab('live')}>{localeString.live}</div>
            <div className={`tabItem ${ activeTab == 'past' && 'active'}`} onClick={() => setActiveTab('past')}>{localeString.past}</div>
        </div>
    )
    {/* The above jsx can be mapped but there will never be more than 3 options(upcoming/live/past)  */ }
}
TabContainer.propTypes = {
    activeTab: PropTypes.string,
    setActiveTab:PropTypes.func
}
export default TabContainer;