import React from "react";
import "./Card.css";
import Zoom from "react-reveal/Zoom";

const Card = ({ src, details, name }) => {
  return (
    <>
      <Zoom>
        <div className="col-md-4 icon-box  card">
          <div className="icon">
            <img src={src} alt="" className="cardimg" />
          </div>
          <p>{name}</p>
          <div className="line"></div>
          <p>{details}</p>
        </div>
      </Zoom>
    </>
  );
};

export default Card;
