import React from 'react'


const ServiceBox = ({ src, heading, details }) => {
    return (
<>
        <div className="col-lg-4 col-md-6">
            <div className="circle">
                <img src={src} alt="" />
            </div>
            <div className="row contactline">
                <div className="col-md-1">

                </div>
            </div>
            <h5>{heading}</h5>
            <p>{details}</p>
        </div>
        
</>
    )
}

export default ServiceBox
