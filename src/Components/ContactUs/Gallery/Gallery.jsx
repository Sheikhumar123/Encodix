import React from 'react'
import './Gallery.css'
import dex from "./img/DEX.jpeg"
import blockchain from "./img/blockchainpic.jpg"

import tronpic from "./img/tronpic.jpg"
import ethpic from "./img/ethpic.jpg"


import Zoom from 'react-reveal/Zoom';
const Gallery = () => {
    return (

        <div className="container" >
            <Zoom>
            <div className="row">
                <div className="col-md-4">
                    <div class="card width" >
                        <img src={dex} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card width" >
                    <img src={tronpic} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card width" >
                    <img src={blockchain} class="card-img-top" alt="..." />


                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card width" >
                        <img src={ethpic} class="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card width" >
                           <img src={dex} class="card-img-top" alt="..." />


                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card width" >
                        <img src={tronpic} class="card-img-top" alt="..." />

                    </div>
                </div>
                
            </div>
            </Zoom>

        </div>




    )
}

export default Gallery
