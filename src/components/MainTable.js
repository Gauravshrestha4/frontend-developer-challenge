import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './MainTable.css'
const MainTable = ({ data, setData }) => {
    const [isModalOpen,setModalOpen]=useState(false)
    const [ isDatePicker, setDatePicker ] = useState(false);
    const toggleDatePicker = () => {
        setDatePicker(!isDatePicker)
    }
    console.log('data here', data)
    const updateData = (date, rowdata) => {
        let newRowData = { ...rowdata, date:date.toDateString() };
        console.log('data inside', data);
        let newData = data.filter(rdata => rdata.name != newRowData.name);
        console.log('new data',newData)
        newData.push(newRowData);
        setData(newData)
        setDatePicker(false)
    }
    const tableHTML = data.map((rowdata, i) => {
        return (
            <tr id={"row"+i+1}>
                <td id={"cell-" + i + '0'}>{rowdata.date}</td>
                <td id={"cell-" + i + '1'}>{rowdata.name}</td>
            <td id={"cell-" + i + '2'} onClick={()=>setModalOpen(true)}>View pricing</td>
                <td id={"cell-" + i + '3'}>
                <span><img className="icon" src="/public/assets/file.png"/> CSV</span>
                <span><img className="icon" src="/public/assets/statistics-report.png"/>Report</span>
                    <span><img className="icon" src="/public/assets/calendar.png" onClick={toggleDatePicker} />Schedule Again</span>
                    {isDatePicker && <DatePicker selected={new Date()} onChange={date => updateData(date,rowdata)} />}
                </td>
          </tr>
        )
    })
    return (
        <div>
        <table id="main-table">
        <tbody>
          <tr id="row0">
            <td id="cell0-0">Date</td>
            <td id="cell0-1">Campaign</td>
            <td id="cell0-2">View</td>
            <td id="cell0-3" style={{width:'30%'}}>ACTIONS</td>
          </tr>
          {tableHTML}
        </tbody>
      </table>
        </div>
    )
}

export default MainTable;