import React from 'react';
import PropTypes from 'prop-types';
import '../assets/popup.css'
import popUp from '/public/assets/Bitmap1.png';
//declaring Popup functional component 
const PopUp = ({ data, setModalOpen,locale }) => {
  const { name, region, monthlyPrice, HalfYearlyPrice, yearlyPrice, popUpIcon } = data;
  
  return (
        <div className="popUpContainer">
          <div className="popupInner">
                <div className="popupupper">
                    <img
                    className="popupicon"
                    src={popUp}
                />
              
                <div className="popupheadingcontainer">
                    <div className="popupheading">{name}</div>
                    <div className="popupcountry">{region}</div>
                </div>
            </div>
            <div className="popuppricingtext">{locale.pricing}</div>
            <div className="popUp_pricing">
              <div className="popUp_pricingRow">
                <div className="popuppricingfirst">{locale.monthlyText}</div>
                <div className="popuppricingvalue">$ {monthlyPrice}</div>
              </div>
              <div className="popUp_pricingRow">
                <div className="popuppricingfirst">{locale.halfYearlyText}</div>
                <div className="popuppricingvalue">$ {HalfYearlyPrice}</div>
              </div>
              <div className="popUp_pricingRow">
                <div className="popuppricingfirst">{locale.yearlyText}</div>
                <div className="popuppricingvalue">$ {yearlyPrice}</div>
              </div>
            </div>
            <div className="popupbutton">
              <div onClick={()=>setModalOpen(false)} className="popupclosebutton">
                {locale.close}
              </div>
            </div>
          </div>
        </div>
      );
}
//using proptypes for props type safety(gets removed in production build)
PopUp.propTypes = {
    setModalOpen:PropTypes.func,
    data:PropTypes.object
}
export default PopUp;