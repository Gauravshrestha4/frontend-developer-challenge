import React, { useState, memo, Suspense } from 'react';
// import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";

//using React lazy to dynamically load component (for page performance/reduce TTFB)
const PopUp = React.lazy(() => import('./PopUp'));
const DatePicker = React.lazy(() => import('react-datepicker'));
import popUp from '/public/assets/Bitmap1.png';

import '../assets/styles/MainTable.css'

import file from '/public/assets/file.png'
import calendar from '/public/assets/calendar.png'
import stats from '/public/assets/statistics-report.png';
import Price from '/public/assets/Price.png';
import mancalamix from '/public/assets/mancalamix.png';
import pubg from '/public/assets/pubg.png';
import superjewels from '/public/assets/superjewels.png';
import moleslayer from '/public/assets/moleslayer.png';

const MainTable = ({ data, setData, tableData, localeString, activeTab }) => {
    //initializing state variable 
    const [isModalOpen,setModalOpen]=useState(false)
    const [ datePicker, setDatePicker ] = useState({});
    const [ popUpData, setPopUpData ] = useState({})
    
    //logic to toggle datepicker ui 
    const toggleDatePicker = (id) => {
        setDatePicker({...datePicker,[id]:!datePicker[id]})
    }

    //logic to update data on date change
    const updateData = (date, rowdata) => {
        let newRowData = { ...rowdata, createdOn: date.toDateString() };
        let newData = tableData.map((data) => {
            if (data.name != newRowData.name) return data;
            else {
                return newRowData
            }
        })
        setData(newData)
        setDatePicker({ ...datePicker,[rowdata.id]:false})
    }
    //function to handle popup view and data
    const handlePricingView = (rowdata) => {
        setPopUpData(rowdata);
        setModalOpen(true);
    }
    //creating jsx for all the table data by mapping over it 
    const tableJSX = data.map((rowdata, i) => {
        const diffTime = (new Date(rowdata.createdOn) - new Date());
        const diffDays = Math.abs(diffTime) / (1000 * 60 * 60 * 24);
        const diffDaysRounded = diffTime > 0 ? Math.ceil(diffDays) : Math.floor(diffDays);
        let campaignImage;
        switch (rowdata.popUpIcon) {
            case 'mancalamix': campaignImage = mancalamix; break;
            case 'pubg': campaignImage = pubg; break;
            case 'superjewels': campaignImage = superjewels; break;
            case 'moleslayer': campaignImage = moleslayer; break;
        }
        return (
            <tr id={"row"+i+1} className="data-row">
                <td >
                    <div  className="dark-text">{new Date(rowdata.createdOn).toDateString()}</div>
                    {activeTab == 'upcoming' && <div className="campaign-status">{diffDaysRounded} days ahead</div>}
                    {activeTab == 'past' && <div className="campaign-status">{diffDaysRounded} days before</div>}
                    {activeTab == 'live' && <div className="campaign-status">Ongoing</div>}
                </td>
                <td className="campaignColumn">
                    <img
                        className="rowCampaignIcon"
                        src={campaignImage}
                    />
                    <div className="rowCampaignNameWrapper">
                        <div className="rowCampaignName">{rowdata.name}</div>
                        <div  className="rowCampaignCountry">{rowdata.region}</div>
                    </div>
                </td>
                <td  onClick={() => handlePricingView(rowdata)} className="viewColumn">
                    <div>
                        <img className="icon" src={Price} /><span className="adjust-text">{localeString.viewPricing}</span>
                    </div>
                </td>
                
                <td className="actionColumn">
                    <div>
                        <img className="icon" src={file} />
                        <span className="adjust-text"> CSV</span>
                    </div>
                    <div>
                        <img className="icon" src={stats} />
                        <span className="adjust-text">{localeString.report}</span>
                    </div>
                    <div  className="cursor">
                        <img onClick={() => toggleDatePicker(rowdata.id)} className="icon" src={calendar} />
                        <span className="adjust-text">{localeString.schedule}</span>
                        {datePicker[ rowdata.id ] &&
                        <Suspense fallback={<div>Loading...</div>}>
                            <DatePicker selected={new Date()} onChange={date => updateData(date, rowdata)} dateFormat="MMMM d, yyyy"
                            popperPlacement="bottom-start"  popperClassName="date-popup" />
                        </Suspense>
                        }
                    </div>
                </td>
          </tr>
        )
    })
    return (
        // optional chaining to check for data emptiness
        data?.length ?
        (<div className="table-container">
        <table id="main-table">
            <tbody>
                <tr id="row0">
                        <td id="cell0-0">{localeString.date}</td>
                        <td id="cell0-1">{localeString.campaign}</td>
                        <td id="cell0-2">{localeString.view}</td>
                        <td id="cell0-3" style={{ width: '40%' }}>{localeString.actions}</td>
                </tr>
                {tableJSX}
            </tbody>
        </table>
            
                {isModalOpen && 
                    <Suspense fallback={<div>Loading...</div>}>
                        <PopUp setModalOpen={setModalOpen} data={popUpData} locale={localeString} />
                    </Suspense>
                }
            </div>) : <div className="emptyHeadline">{localeString.noData}</div>
    )
}

//using proptypes for props type safety(gets removed in production build)
MainTable.propTypes = {
    data: PropTypes.array,
    setData:PropTypes.func
}
//memo is used to prevent unneccessary re-rendering of the component 
export default memo(MainTable, (prevProps, nextProps) => {
    return prevProps.data==nextProps.data
});