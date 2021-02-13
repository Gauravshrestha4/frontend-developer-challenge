import React from 'react';
import PropTypes from 'prop-types';
import popUp from '/public/assets/Bitmap1.png';
const PopUp = ({data,setModalOpen}) => {
    return (
        <div className="popUp">
            <div >
                <img className="popupLogo" src={popUp} />
                <span >{data.name}</span>
            </div>
            <div className="pricing">
                <h3>Pricing</h3>
                <ul>
                    <li className="flex">
                        <span >1 Week - 1 Month</span>
                        <span>$100</span>
                    </li>
                    <li className="flex">
                        <span>6 Months</span>
                        <span>$500</span>
                    </li>
                    <li className="flex">
                        <span>1 Year</span>
                        <span>$900</span>
                    </li>
                </ul>
            </div>
            <button onClick={()=>setModalOpen(false)}>close</button>
        </div>
    )
}
PopUp.propTypes = {
    setsetModalOpenData:PropTypes.func
}
export default PopUp;