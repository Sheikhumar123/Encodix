import React from 'react'
// import logo from './logo.png';
import github from './github.svg'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

    const [headerStyle,setHeader] = React.useState("container-fluid header");
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

     const handleScroll=()=>{
        if (window.pageYOffset > 0) {
                setHeader("container-fluid headerColorfull");
        }else{
            setHeader("container-fluid header");
        }
    }
    

    return (

        <div className={headerStyle}>
            <div className="headerLogo">
                <img src="./img/logoh.png" alt="" />
            </div>
            <div className="headerlist">
                <li> <Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li>
                    <div class="dropdown">
                        <span>Others</span>
                        <div class="dropdown-content">
                            <li><Link to="/contactus">--ContactUs</Link></li>
                            
                        </div>
                    </div>
                </li>
                <li><Link to="/careers"><img src={github} alt="" className="github"   width="25px"/></Link></li>

            </div>
        </div>

        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        //     <div className="container-fluid ">
        //         <div className="container">
        //             <a className="navbar-brand" ><img src="./img/logo.png" alt="" height="70" /></a>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                         <Link to="/">Home</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link to="/services">Services</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link to="/portfolio">Portfolio</Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link to="/team">Team</Link>
        //                     </li>
        //                     <li class="nav-item dropdown">
        //                         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             Dropdown
        //                             </a>
        //                         <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        //                             <li className="nav-item">
        //                                 <a className="nav-link" >Contact us</a>
        //                             </li>
        //                             <li><a class="dropdown-item" href="#">Action</a></li>
        //                             <li><a class="dropdown-item" href="#">Another action</a></li>
        //                             <li><a class="dropdown-item" href="#">Something else here</a></li>
        //                         </ul>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" ><img src={github} alt="" /></a>
        //                     </li>



        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </nav>

    )
}

export default Header
