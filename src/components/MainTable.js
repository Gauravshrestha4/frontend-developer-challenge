import React, { useState, memo, Suspense } from 'react';
// import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
const PopUp = React.lazy(() => import('./PopUp'));
const DatePicker = React.lazy(() => import('react-datepicker'));

import '../assets/MainTable.css'


import file from '/public/assets/file.png'
import calendar from '/public/assets/calendar.png'
import stats from '/public/assets/statistics-report.png';

const MainTable = ({ data, setData,tableData,localeString,activeTab }) => {
    const [isModalOpen,setModalOpen]=useState(false)
    const [ datePicker, setDatePicker ] = useState({});
    const [modalData,setModalData]=useState({})
    const toggleDatePicker = (id) => {
        setDatePicker({...datePicker,[id]:!datePicker[id]})
    }
    const updateData = (date, rowdata) => {
        let newRowData = { ...rowdata, date: date.toDateString() };
        let newData = tableData.map((data) => {
            if (data.name != newRowData.name) return data;
            else {
                return newRowData
            }
        })
        setData(newData)
        setDatePicker({ ...datePicker,[rowdata.id]:false})
    }
    const handlePricingView = (rowdata) => {
        setModalData(rowdata);
        setModalOpen(true);
    }
    const tableHTML = data.map((rowdata, i) => {
        const diffTime =(new Date(rowdata.date)-new Date());
        const diffDays = diffTime>0?Math.ceil( Math.abs(diffTime) / (1000 * 60 * 60 * 24)):Math.floor( Math.abs(diffTime) / (1000 * 60 * 60 * 24));
        return (
            <tr id={"row"+i+1}>
                <td id={"cell-" + i + '0'}>
                    <div  className="dark-text">{rowdata.date}</div>
                    {activeTab == 'upcoming' && <div className="campaign-status">{diffDays} days ahead</div>}
                    {activeTab == 'past' && <div className="campaign-status">{diffDays} days before</div>}
                    {activeTab == 'live' && <div className="campaign-status">Ongoing</div>}
                </td>
                <td id={"cell-" + i + '1'} className="dark-text">{rowdata.name}</td>
                <td id={"cell-" + i + '2'} onClick={() => handlePricingView(rowdata)} className="cursor dark-text">{localeString.viewPricing}</td>
                
                <td id={"cell-" + i + '3'} className="actionColumn">
                    <span><img className="icon" src={file}/> CSV</span>
                    <span><img className="icon" src={stats} />{localeString.report}</span>
                    <span onClick={() => toggleDatePicker(rowdata.id)} className="cursor"><img className="icon" src={calendar} />{localeString.schedule}</span>
        
                    {datePicker[ rowdata.id ] &&
                    <Suspense fallback={<div>Loading...</div>}>
                        <DatePicker selected={new Date()} onChange={date => updateData(date, rowdata)} />
                    </Suspense>
                    }
                </td>
          </tr>
        )
    })
    return (
        data?.length?
        (<div className="table-container">
        <table id="main-table">
        <tbody>
          <tr id="row0">
                <td id="cell0-0">{localeString.date}</td>
                <td id="cell0-1">{localeString.campaign}</td>
                <td id="cell0-2">{localeString.view}</td>
                <td id="cell0-3" style={{ width: '40%' }}>{localeString.actions}</td>
          </tr>
          {tableHTML}
        </tbody>
            </table>
                {isModalOpen && 
                    <Suspense fallback={<div>Loading...</div>}>
                        <PopUp setModalOpen={setModalOpen} data={modalData} />, document.getElementById('root')
                    </Suspense>
                }
            </div>) : <div className="emptyHeadline">{`No ${activeTab} Campaign exist`}</div>
    )
}
MainTable.propTypes = {
    data: PropTypes.array,
    setData:PropTypes.func
}
export default memo(MainTable, (prevProps, nextProps) => {
    return prevProps.data==nextProps.data
});