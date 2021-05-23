import React from 'react'
import solid from "./img/box-solid.svg"
import code from './img/code-slash.svg'
import diamond from './img/suit-diamond.svg'
import link from './img/link.svg'
import square from './img/app-indicator.svg'
import diagram from './img/diagram-3-fill.svg'
import ServiceBox from './ServiceBox/ServiceBox'
import './Services.css'

const Services = () => {
    
    return (
        <div>






            <div className="sservices">
                <div className="row center">
                    <div className="col-md-12"><h1>Services</h1></div>
                </div>
                <div className="row contactline">
                    <div className="col-md-1">

                    </div>
                </div>
                <div className="row center">
                    <div className="col-md-12"><p>Quality Matters The Most For Us.</p></div>
                </div>
                <div className="row servicedata">

                    <ServiceBox src={solid} heading={"Decentralised Exchanges"} details={"Decentralised Cryptocurrency exchanges provide users to buy and sell cryptocurrencies. Our software development experts can help you develop the most secure, private and reliable cryptocurrency exchange in the market."} />
                    <ServiceBox src={code} heading={"Smart Contracts Development"} details={"Smart contracts transform the processing of contracts everything can be automated without any centralized administration. our smart contract development services will help you protect your transactions and make your workflow transparent and safe."} />
                    <ServiceBox src={diamond} heading={"Tokenization"} details={"Tokenization is the process of converting physical (and non-physical) assets into digital tokens on a blockchain. We'll develop all standard of tokens you want e.g. ERC20, ERC721 etc."} />
                    <ServiceBox src={link} heading={"Decentralized Finance"} details={"Decentralized Finance (DeFi) is a blockchain-based form of finance that does not rely on central financial intermediaries such as brokerages, exchanges, or banks to offer traditional financial instruments, and instead utilizes smart contracts on blockchain."} />
                    <ServiceBox src={square} heading={"E-Wallet Development"} details={"E-Wallet Development We design special e-wallets where you can manage all your digital assets. We provide reliable blockchain development services to build you a personal wallet where you can store your crypto coins."} />
                    <ServiceBox src={diagram} heading={"Blockchain based Business Solutions"} details={"Our expert blockchain developers will find out the right solution for your business problem. we will help you to process data efficiently. we will provide you trusted transactions and secure business networks.and will create, issue, and manage digital assets for your business."} />
                    

                </div>
            </div>

        </div>
    )
}

export default Services
