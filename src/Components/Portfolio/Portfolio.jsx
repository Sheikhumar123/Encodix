import React from 'react'
import Card from './Card/Card'
import discoswap from './img/dswap.png'
import zedoswap from './img/zeedoswap.PNG'
import sweetswap from './img/sweetswap.PNG'
import flashswap from './img/flashswap.PNG'
import "./PortFolio.css"

const Portfolio = () => {
    return (
        <div className="container-fuid portfolio">

            <div className="row portfoliologo">
                <div className="col-md-12  ">
                    <img src="./img/logo.png" alt="" height="200px" />
                </div>
                <div className="col-md-12">
                    <p>Developed by Us</p>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <Card src={discoswap} name={"DiscoSwap"}
                        details={"DiscoSwap is a Decentralised Exchange build on exact pancakeSwap fundamentals."} />
                    <Card src={zedoswap} name={"ZeedoSwap"}
                        details={"ZeedoSwap is unique as it allows users to go long or short on Ether with up to 5x leverage in a permissionless fashion. Better yet, ZeedoSwap provides cross-margin lending and borrowing, meaning users earn passive income while supported assets sit on the exchange."} />

                    <Card src={sweetswap} name={"SweetSwap"}
                        details={"SweetSwap is a DEX for building digital assets on Decentralised Applications."} />

                    <Card src={flashswap} name={"FlashSwap"}
                        details={"FlashSwap is the Crypto exchange of converting assets into digital tokens on a blockchain."} />


                </div>
            </div>


        </div>
    )
}

export default Portfolio
