import React, { useState, useEffect } from 'react'
import './ContactUs.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Gallery from './Gallery/Gallery';
import location from './Gallery/img/pin.svg'
import email from './Gallery/img/message.svg'
import callus from './Gallery/img/viber.svg'
import Fade from 'react-reveal/Fade';

import Roll from 'react-reveal/Roll';




const ContactUs = ({ background }) => {
    const [fData, setFData] = useState({
        name: '', email: '', subject:'', message: ''
      })
    const handleInput = async (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFData({ ...fData, [name]: value })
    }
    
    const submitData = (e) =>{
            e.preventDefault()
            console.log(fData);
            console.log("hello");

            setFData({
                name: '', email: '', subject:'', message: ''
              })
    
    }





    // console.log(background);
    const [state, setstate] = useState();

    useEffect(() => {
        if (background === true) {
            setstate(true)
        } else {
            setstate(false)
        }
    }, [])





    return (
        <div className={state ? "contactUstransparent" : "contactUs"}>
            <div className="">
                <Fade bottom>
                <div className="row">
                    <div className="col-md-12 contactLogo">
                        <img src="./img/logo.png" alt="" className="contactLogo" />
                    </div>
                </div>

                <div className="row contactCenter">
                    <div className="col-md-12"><h1>Contact</h1></div>
                </div>
                <div className="row contactline">
                    <div className="col-md-1">

                    </div>
                </div>
                <div className="row contactCenter">
                    <div className="col-md-12"><p>Naver Hesitate to Contact Us.</p></div>
                </div>
                </Fade>

                <div className="row">
                    <Roll left>
                        <div className="col-md-3 info-box">
                            <div className="circletwo">
                                <img src={location} alt="" />
                            </div>
                            <div>
                                <h3>OUR ADDRESS</h3>
                            </div>
                            <div>
                                <p>Office # 80, 1st Floor, Mediacom Trade City, Faisalabad, Pakistan</p>
                            </div>
                        </div>
                    </Roll>

                    <Fade>
                    <div className="col-md-3 info-box">
                        <div className="circletwo">
                            <img src={email} alt="" />

                        </div>
                        <div>
                            <h3>Email Us</h3>
                        </div>
                        <div>
                            <p>info@encodix.org <br />contact@encodix.org</p>

                        </div>
                    </div>
                    </Fade>

                    <Roll right>
                    <div className="col-md-3 info-box">
                        <div className="circletwo">
                            <img src={callus} alt="" />

                        </div>
                        <div>
                            <h3>Call Us</h3>
                        </div>
                        <div>
                            <p>+92 341 4264969 <br /> +92 309 6116900</p>

                        </div>
                    </div>
                    </Roll>

                </div>


            </div>
            <Fade bottom>
            <div className="container">
                <div class="row">
                    <div class="col-lg-2">
                    </div>
                    <div class="col-lg-8">
                        <form className="form">
                            <div class="row formfield">
                                <div class="col-md-6">
                                    <div class="form-input mt-25">
                                        <div class="default1">
                                            <input name="name" value={fData.name} type="text" placeholder="Name" onChange={handleInput} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-input mt-25">
                                        <div class=" default1">
                                            <input type="email" value={fData.email} name="email" placeholder="Email" onChange={handleInput} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-input mt-25">
                                        <div class="default1">
                                            <input type="text" value={fData.subject} name="subject" placeholder="Subject" onChange={handleInput} />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-input mt-25">
                                        <div class=" default1">
                                            <textarea name="message" value={fData.message} placeholder="Massage" onChange={handleInput}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="" >
                                        <input type="button" onClick={submitData} className="btn1" value="Send Message" />
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div class="col-lg-2">
                    </div>
                </div>
            </div>
            </Fade>
            <div className="iframe">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.0296501669095!2d73.11182261465427!3d31.413309159564903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268728e4191ed%3A0xbe1ab0c837486dae!2sMediacom%20Trade%20City.!5e0!3m2!1sen!2s!4v1621509340006!5m2!1sen!2s" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12 contactCenter">
                        <h3>LET'S MAKE WORLD DECENTRALISED</h3>
                    </div>
                </div>

                <div className="row contactline">
                    <div className="col-md-1">

                    </div>
                </div>
                <div className="row">
                    <Gallery />
                </div>
            </div>

        </div>
    )
}

export default ContactUs
