import React from "react";
import Fade from "react-reveal/Fade";

const ServiceBox = ({ src, heading, details }) => {
  return (
    <>
      <Fade bottom>
        <div className="col-lg-4 col-md-6">
          <div className="circle">
            <img src={src} alt="" />
          </div>
          <div className="row contactline">
            <div className="col-md-1"></div>
          </div>
          <h5>{heading}</h5>
          <p>{details}</p>
        </div>
      </Fade>
    </>
  );
};

export default ServiceBox;
