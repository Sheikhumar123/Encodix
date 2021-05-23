import React from 'react'
import "./Card.css"

const Card = ( {src , details , name}) => {
    return (
        <>
                <div className="col-md-4 icon-box  card" >
                    <div className="icon"><img src={src} alt="" className="cardimg" /></div>
                    <p>{name}</p>
                    <div className="line"></div>
                    <p>{details}</p>
                </div>
                
        </>       
           
    )
}

export default Card
