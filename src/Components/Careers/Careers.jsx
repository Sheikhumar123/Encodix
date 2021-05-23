import React from 'react'
import "./Careers.css"

const Careers = () => {
    return (
        <div>
            <div className="containerCareer" >






                <br />
                <div className="container" id="careertextcontainer">
                    <section className="u-align-center u-clearfix u-image u-section-1" id="carousel_10a7" data-image-width="1980" data-image-height="1200">
                        <div className="u-clearfix u-sheet u-sheet-1">
                            <center><img src="./img/logo.png" alt="Encodix" width="200px" id="careerlogo" /></center>

                            <h4 id="careertext" className="u-text u-text-3 mt-5"><span className="u-text-white"> Encodix Gonna hire Expert Blockcahin Developer,</span>
                                <h1 className="u-custom-font u-text u-text-body-alt-color u-text-4">Blockchain Developer </h1>
                            </h4>
                            <p className="u-text u-text-body-alt-color u-text-5"><strong>Encodix</strong> is seeking highly-skilled Blockchain developers for latest and innovative blockchain development solutions. We are looking for a blockchain expert with hands-on experience with Solidity and Smart Contracts. We need very mature and passionate developers who are looking to accelerate their career and work on a very exciting long term project. The ideal candidate should demonstrate clear technical leadership and strong development contributions.</p>

                            <h4>Requirements:</h4>
                            <ul className="careerList">
                                <li>⚫ Hands on experience with Solidit and smart contracts.</li>
                                <li>⚫ Required understanding of DLT technologies.</li>
                                <li>⚫ Troubleshoot and resolve issues in development, test and production instances.</li>
                                <li>⚫ Good to have experience with Docker, NodeJS and Linux fundamentals.</li>
                                <li>⚫ Work with development teams to enable a continuous integration environment that sustains high productivity levels and emphasizes defect prevention techniques.</li>

                            </ul>
                            <h4>Expertise:</h4>
                            <ul className="careerList">
                                <li>⚫ Expert proficiency in at least one web stack, Javascript preferred.</li>
                                <li>⚫ Proficiency in blockchain technologies such as Hyperledger.</li>
                                <li>⚫ Proficiency with development tools for writing Smart Contracts.</li>
                                <li>⚫ Understands the nature of asynchronous programming, its quirks, and workarounds.</li>
                                <li>⚫ Understanding of how blockchain architecture, private keys, and standards/protocols work</li>
                                <li>⚫ Experience with developing wallets and private blockchains</li>
                            </ul>

                            <center><h5><i>If your skills and expertises match with our Requirements fill the form below and apply for the job</i> </h5></center>



                            <center>  <div className="col-lg-6" id="careerMainForm">
                                <form className=" careerform" >
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Your Name: <input type="text" name="name" className="form-control careerTextBox" id="" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" /></label>
                                            <div className="validate"></div>
                                        </div>
                                        <div className="col form-group">
                                            <label>Your Email: <input type="email" className="form-control careerTextBox" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" /></label>
                                            <div className="validate"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control careerTextBox" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control careerTextBox" name="Your intro" rows="5" data-rule="required" data-msg="Please write about your sepcialities" placeholder="Your intro"></textarea>
                                        <div className="validate"></div>
                                    </div>

                                    <div className="text-center careerbtn ">
                                    <input type="button" className="careerbtn" value="Send Message" />
                                        </div>
                                </form>
                            </div></center>
                        </div>
                    </section></div>




            </div >



        </div >
    )
}

export default Careers
