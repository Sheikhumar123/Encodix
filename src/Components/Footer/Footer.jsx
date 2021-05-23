import React from 'react';
import Data from './data';
import "./Footer.css";
export default function Footer() {
    return(
        <footer className='app-fot'>
            <div className='main-foot'>
                <div className='foot-data'>
                    <Data/>
                </div>
                
                <div className="foot-copyright">
                    <div className="copyright">
                        <div>@ Copyright Encodix All Rights Reserved</div>
                        <div>
                            Design and Managed By Encodix 
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
    
}