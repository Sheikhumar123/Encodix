

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import Footer from './Components/Footer/Footer.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Services from './Components/Services/Services.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Careers from './Components/Careers/Careers.jsx';
import Teams from './Components/Teams/Teams.jsx';



function App() {
  return (
    <Router>
      
        <Header />
        <Switch>
          <Route exact path="/">
           
            <AboutUs />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contactus">
            <ContactUs />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/careers">
            <Careers/>
          </Route>
          <Route exact path="/team">
            <Teams/>
          </Route>
        </Switch>
        {/* <AboutUs /> */}
        {/* <ContactUs/> */}


        <Footer />
    </Router>
  );
}

export default App;
