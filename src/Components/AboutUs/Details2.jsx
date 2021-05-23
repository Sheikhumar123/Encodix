import React from 'react'

const Details2 = ({ src, heading, detail }) => {
    return (
        <div className="data">
            <div className="col-md-1 " >
                <img src={src} alt="" className="" />
            </div>
            <div className="col-md-11">
                <h4>{heading}</h4>
                <p>{detail}</p>
            </div>

        </div>
       
    )
}

export default Details2
