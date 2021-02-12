import React, { useState, memo } from 'react';
import DatePicker from "react-datepicker";
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
import './MainTable.css'
import PopUp from './PopUp';


import file from '/public/assets/file.png'
import calendar from '/public/assets/calendar.png'
import stats from '/public/assets/statistics-report.png'
const MainTable = ({ data, setData,tableData,localeString }) => {
    const [isModalOpen,setModalOpen]=useState(false)
    const [ datePicker, setDatePicker ] = useState({});
    const [modalData,setModalData]=useState({})
    const toggleDatePicker = (id) => {
        setDatePicker({...datePicker,[id]:!datePicker[id]})
    }
    console.log('data here', data)
    const updateData = (date, rowdata) => {
        let newRowData = { ...rowdata, date:date.toDateString() };
        let newData = tableData.filter(rdata => rdata.name != newRowData.name);
        newData=[...newData,newRowData];
        setData(newData)
        setDatePicker({ ...datePicker,[rowdata.id]:false})
    }
    const handlePricingView = (rowdata) => {
        setModalData(rowdata);
        setModalOpen(true);
    }
    const tableHTML = data.map((rowdata, i) => {
        const diffTime = Math.abs(new Date() - new Date(rowdata.date));
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        return (
            <tr id={"row"+i+1}>
                <td id={"cell-" + i + '0'}>
                    <span>{rowdata.date}</span>
                    <span>{diffDays}</span>
                </td>
                <td id={"cell-" + i + '1'}>{rowdata.name}</td>
                <td id={"cell-" + i + '2'} onClick={() => handlePricingView(rowdata)} className="cursor">{localeString.viewPricing}</td>
                
                <td id={"cell-" + i + '3'}>
                    <span><img className="icon" src={file}/> CSV</span>
                    <span><img className="icon" src={stats} />{localeString.report}</span>
                    <span onClick={() => toggleDatePicker(rowdata.id)} className="cursor"><img className="icon" src={calendar} />{localeString.schedule}</span>
                    {datePicker[rowdata.id] && <DatePicker selected={new Date()} onChange={date => updateData(date,rowdata)} />}
                </td>
          </tr>
        )
    })
    return (
        <div className="table-container">
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
            {isModalOpen && ReactDOM.createPortal(<PopUp setModalOpen={setModalOpen} data={modalData}/>,document.getElementById('root'))}
        </div>
    )
}
MainTable.propTypes = {
    data: PropTypes.array,
    setData:PropTypes.func
}
export default memo(MainTable, (prevProps, nextProps) => {
    return prevProps.data==nextProps.data
});