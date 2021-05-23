import React from 'react'

const Details = ({src , num , details, heading}) => {
    return (
            <div className="col-md-6 col-sm-12 col-lg-3 details">
                        <img src={src} alt="" />
                        <span>{num}</span>
                        <p><b>{heading}</b>{details}</p>
                    </div>
        
    )
}

export default Details
