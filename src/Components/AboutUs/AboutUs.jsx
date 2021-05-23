import React from 'react'
import './AboutUs.css'
import check from './img/check2-circle.svg'
import task from './img/tasks-solid.svg'
import box from './img/box-solid.svg'
import people from './img/user-friends-solid.svg'
import user from './img/users-solid.svg'
import cube from './img/cube-solid.svg'
import file from './img/file-invoice-solid.svg'
import code from './img/laptop-code-solid.svg'
import shield from './img/shield-alt-solid.svg'
import Details from './Details'
import Details2 from './Details2'
import Services from '../Services/Services'

import ContactUs from '../ContactUs/ContactUs'

import Home from '../Home/Home'

const AboutUs = () => {
    return (
        <div>
            <Home />
            <div className="container-fluid aboutus">

                <div className="container ">
                    <div className="row aboutcenter">
                        <div className="col-md-12"><h1>About Us</h1></div>
                    </div>
                    <div className="row aboutcenter">
                        <div className="col-md-12"><h4>Introducing Innovative Projects to Facilitate People.</h4></div>
                    </div>
                    <div className="row box">
                        <div className="col-lg-6 col-md-12">
                            <h3>Encodix</h3>
                            <p><b> Encodix is a Blockchain Development Company</b> which specially deals in latest innovative Blockchain Services and Solutions.</p>
                            <ul className="services">
                                <li><img src={check} alt="" />Blockchain Development</li>
                                <li><img src={check} alt="" />Decentralised Exchanges</li>
                                <li><img src={check} alt="" />Smart Contract Development</li>
                                <li><img src={check} alt="" />Decentralised Finance</li>
                                <li><img src={check} alt="" />Tokenization</li>
                                <li><img src={check} alt="" />E-Wallet Development</li>
                                <li><img src={check} alt="" />Staking Contracts</li>
                                <li><img src={check} alt="" />Blockchain based business solutions</li>
                            </ul>
                            <p><b> Encodix </b>is a leading blockchain development company that strives to bring powerful and revolutionary aspects of the blockchain technology to build innovative, decentralized applications that meet your varied business needs. Our comprehensive blockchain technology solutions are best suited for businesses that are looking to set their own platform for digital cryptocurrencies. Encodix has the most talented Blockchain experts build solutions to match your business needs, whether you’re a startup or enterprise. We help you secure and validate ownership of your digital assets and decentralize your network to manage your data with smart contracts Our Team has a deep experience in Blockchain Development Industry.</p>
                            <h5><b>Encodix (pvt)</b></h5>
                            <h5>(Let's be Decentralised.)</h5>


                        </div>
                        <div className="col-lg-6 col-md-12 center">
                            <img src="./img/5.png" alt="" className='rotate' />

                        </div>
                    </div>


                    <div className="second">
                        <div className="row">
                            <Details src={task} num={18} heading={"Successful Projects : "} details={"are the Base for our Success because these prvide Experience for more."} />
                            <Details src={user} num={8} heading={"Team Members : "} details={"help to achieve the Goals and design the thoughts of Clients into Reality."} />
                            <Details src={box} num={13} heading={"Innovative Products : "} details={"helping the people to get their work done in an easy way and also helping to digitize the people."} />
                            <Details src={people} num={12} heading={"Satisfied Clients: "} details={"rerum asperiores dolor molestiae doloribu"} />
                        </div>
                    </div>

                    <div className="aboutthird">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <Details2 src={cube} heading={"Expert Blockchain Developers"} detail={"We have a team of skilled blockchain experts who have in depth understanding of the industry's technology stack and latest tools that are required to develop and deploy your blockchain dApp."} />
                                <Details2 src={file} heading={"Customized Solutions at Best Price"} detail={"Encodix provides customized blockchain and crypto-related solutions at competitive pricing. We provide you the latest technology, quality development, 24/7 support, and timely delivery."} />
                                <Details2 src={code} heading={"Full Cycle Development Process"} detail={"Our full cycle development services include research & strategy, code writing, coin development, blockchain integration, page design, smart contract, testing & deployment, marketing & ICO services"} />
                                <Details2 src={shield} heading={"Responsive, Quality and Support"} detail={"We respond quickly to your queries. Our developers are the best in the industry. They deliver only the best solutions to our clients. We provide ongoing support for all our developed blockchain products."} />
                            </div>
                            <div className="col-lg-6 col-md-12 center ">
                                <img src="./img/5.png" alt="" />
                            </div>

                        </div>
                    </div>

                </div>
                <div>
                    <Services />
                </div>
                <div>
                    {/* <Teams/> */}
                    <ContactUs />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
