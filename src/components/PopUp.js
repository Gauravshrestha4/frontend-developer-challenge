import React from 'react';
import PropTypes from 'prop-types';
import popUp from '/public/assets/Bitmap1.png';
const PopUp = ({data,setModalOpen}) => {
    return (
        <div className="popUp">
            <div style={{display:'flex'}}>
                <img className="popupLogo" src={popUp} />
                <div>{data.name}</div>
            </div>
            <div className="pricing">
                <h3>Pricing</h3>
            </div>
            <button onClick={()=>setModalOpen(false)}>close</button>
        </div>
    )
}
PopUp.propTypes = {
    setsetModalOpenData:PropTypes.func
}
export default PopUp;