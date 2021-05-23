import React from 'react'
import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Gallery from './Gallery/Gallery'

const ContactUs = () => {
    return (
        <div className="contaniner-fluid contactUs">
            <div className="">
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

                <div className="row">
                    <div className="col-md-3 info-box">
                        <div className="circletwo">
                            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                        </div>
                        <div>
                            <h3>OUR ADDRESS</h3>
                        </div>
                        <div>
                            <p>Office # 80, 1st Floor, Mediacom Trade City, Faisalabad, Pakistan</p>
                        </div>
                    </div>
                    <div className="col-md-3 info-box">
                        <div className="circletwo">
                            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                        </div>
                        <div>
                            <h3>Email Us</h3>
                        </div>
                        <div>
                            <p>info@encodix.org <br />contact@encodix.org</p>

                        </div>
                    </div>
                    <div className="col-md-3 info-box">
                        <div className="circletwo">
                            <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                        </div>
                        <div>
                            <h3>Call Us</h3>
                        </div>
                        <div>
                            <p>+92 341 4264969 <br /> +92 309 6116900</p>

                        </div>
                    </div>

                </div>


            </div>
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
                                            <input name="name" type="text" placeholder="Name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-input mt-25">
                                        <div class=" default1">
                                            <input type="email" name="email" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-input mt-25">
                                        <div class="default1">
                                            <input type="text" name="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-input mt-25">
                                        <div class=" default1">
                                            <textarea name="massage" placeholder="Massage"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="" >
                                        <input type="button" className="btn1" value="Send Message" />
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div class="col-lg-2">
                    </div>
                </div>
            </div>
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
