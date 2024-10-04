import React from 'react';
import { Outlet , Link } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp , faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Layout = () => {
  return (
    <>
      <header>
        <div className="header-p1">
          <h1 className="main-logo">
            <a href="/">YUVA VIIT</a>
            </h1>
        </div>
        <div className="header-p2 bottom-screen">
       
          <span className="nav-li"><Link to="Events">Events</Link></span>
          <span className="nav-li"><Link to="Articles"> Articles</Link></span>
          <span className="nav-li"><Link to="team">Team</Link></span>
          <span className="nav-li"><Link to="Contact">Contact Us</Link></span>
        </div>
      </header>

      
      <main>
        <Outlet />
      </main>
       
      <footer className="home-footer">
      <div className='social-handles'>
      <h1>Our Presence</h1>
        <span className="slinks">
        <a href="https://chat.whatsapp.com/Gd6G7qcGgPLLsHEyw3gzmv "> <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '36px' }} /></a>
        <a href="https://www.linkedin.com/in/yuvaviit/"> <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '36px' }} /></a>
        <a href=""> <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '36px' }} /></a>
        </span>
      <hr className="hr-all-rev"/>
      </div>
      <div className="cont-wrap">
        <div className="contact-us">
          <span className="con-div-1">
        <img src="https://youngindians.net/wp-content/uploads/2023/04/yuva-logo.png" className='yuva-logo-ct-div'></img> <span className="contact-us-viit">Vignan's Institute of Information Technology - Visakhapatnam</span></span>
        </div>
        
        <div className="contact-us pa-1">
        <span className="ct-links ctl-main">Useful Links</span>
          <span className="ct-links">Photo Gallery</span>
          <span className="ct-links">Events</span>
          <span className="ct-links">Team</span>
          <span className="ct-links">Contact Us</span>
        </div>
        <div className="contact-us ct-imgs">
          <img className="cii-logo"
            src="https://youngindians.net/wp-content/uploads/2022/10/cii-logo.png"
            alt="CII Logo" />
          <img className="yi-logo"
            src="https://youngindians.net/wp-content/uploads/2022/10/young-indians-header-logo.png"
            alt="Young Indians Logo" />
        </div></div>
        <hr className="hr-all-rev"/>
         <span className="all-rev">© 2024 Yuva VIIT | All rights reserved.</span>
      </footer>

      {/* <div className="bottom-screen">
        <span className="nav-items">X</span>
        <span className="nav-items">X</span>
        <span className="nav-items">X</span>
        <span className="nav-items">X</span>
      </div> */}
    </>
  );
};

export default Layout;
