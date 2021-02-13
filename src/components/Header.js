import React from 'react';
import '../assets/header.css'
const Header = ({setLanguage}) => {
    const handleLocaleChange = (e) => {
        e.preventDefault();
        setLanguage(e.target.value);
    }
    return (
        <div className="header">
        <img src="https://s3-alpha-sig.figma.com/img/7517/0d27/6a35a9971373d0ed1f8fcc0c698f05b2?Expires=1613952000&Signature=FRJi6SxhprTnvKYPXehXczi6~zykUq0ow-DFH4xSn1JW6oeyuRh80-9hAJkEHFRRFtlUV1N24PUZqqFu4g1clq~q-mCxdpK26eb5kZbMtPUhhAc5EsSz1l54WsSS~C3Z70slaFkmic5AfLTbmMiEYUIXZWYXKEvLaC2IC1KejsEMgopuo9euGEjOrbujy3~lwf6Ob7a2qflLJNC56w5Vu3--~ihLg5AZTEvkOHOES84bVIqVwP-Rj6io4mS4bmqn82MdCgNDA7-Pf4pURU8FaYQJw-qSVT73BcbVhgohWS1tJyN--6WWqG~kbADZfTyATi6L0GdH~Ab7WyXw9lyN9w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            <select onChange={handleLocaleChange} className="localSelector">
                <option value="en">English</option>
                <option value="ge">Germany</option>
            </select>
        </div>
    )
}
export default Header;