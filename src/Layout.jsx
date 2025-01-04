import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Layout = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleSetActive = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <header>
        <div className="header-p1">
          <h1 className="main-logo">
            <a href="/">YUVA VIIT</a>
          </h1>
        </div>
        <div className="header-p2 bottom-screen">
          <Link
            to="/"
            onClick={() => handleSetActive('/')}
            className={activeLink === '/' ? 'nav-li active' : 'nav-li'}
          >
            <span className="home"></span>
          </Link>
          <Link
            to="/Events"
            onClick={() => handleSetActive('/Events')}
            className={activeLink === '/Events' ? 'nav-li active' : 'nav-li'}
          >
            <span className="ticket"></span>
          </Link>
          <Link
            to="/Articles"
            onClick={() => handleSetActive('/Articles')}
            className={activeLink === '/Articles' ? 'nav-li active' : 'nav-li'}
          >
            <span className="news"></span>
          </Link>
          <Link
            to="/team"
            onClick={() => handleSetActive('/team')}
            className={activeLink === '/team' ? 'nav-li active teams-nav' : 'nav-li teams-nav'}
          >
            <span>Team</span>
          </Link>
          <Link
            to="/Contact-us"
            onClick={() => handleSetActive('/Contact')}
            className={activeLink === '/Contact' ? 'nav-li active cont-nav' : 'nav-li cont-nav'}
          >
            <span>Contact Us</span>
          </Link>
          <Link
            to="/More"
            onClick={() => handleSetActive('/More')}
            className={activeLink === '/More' ? 'nav-li active more-nav' : 'nav-li more-nav'}
          >
            <span className="more"></span>
          </Link>
        </div>
      </header>

      <main>
        <div className="bg-grad"></div>
        <Outlet />
      </main>

      <footer className="home-footer">
        <div className='social-handles'>
          <h3>Our Presence</h3>
          <span className="slinks">
            <a href="https://chat.whatsapp.com/Gd6G7qcGgPLLsHEyw3gzmv">
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '36px' }} />
            </a>
            <a href="https://www.linkedin.com/in/yuvaviit/">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '36px' }} />
            </a>
            <a href="https://www.instagram.com/viit_yuva_vizag?igsh=bXFwZ3doNmdzaTIw">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '36px' }} />
            </a>
          </span>
          <hr className="hr-all-rev" />
        </div>
        <div className="cont-wrap">
          <div className="contact-us">
            <span className="con-div-1">
              
              <img src="https://youngindians.net/wp-content/uploads/2023/04/yuva-logo.png" className='yuva-logo-ct-div' alt="YUVA Logo" />
              <span className="contact-us-viit">Vignan's Institute of Information Technology - Visakhapatnam</span>
            </span>
          </div>

          <div className="contact-us pa-1">
            <span className="ct-links ctl-main">Useful Links</span>
            <span className="ct-links ctl"> <Link to="/Photos">Photo Gallery</Link></span>
            <span className="ct-links ctl"><Link to="/Events">Events</Link> </span>
            <span className="ct-links ctl"> <Link to="/Team">  Team</Link></span>
            <span className="ct-links ctl"><Link to="/Contact-us">Contact Us</Link> </span>
          </div>
          <div className="contact-us ct-imgs">
            <a href="https://www.cii.in/">
            <img className="cii-logo"
              src="https://youngindians.net/wp-content/uploads/2022/10/cii-logo.png"
              alt="CII Logo" /></a>
              <a href="https://youngindians.net/">
            <img className="yi-logo"
              src="https://youngindians.net/wp-content/uploads/2022/10/young-indians-header-logo.png"
              alt="Young Indians Logo" /></a>
          </div>
        </div>
        <hr className="hr-all-rev" />
        <span className="all-rev">© 2025 Yuva VIIT | All rights reserved.
          <br/> <small>
            <a href="https://www.linkedin.com/in/kasimikotasanthoshrahul/">Developed by Rahul Kasimikota</a>
            </small>
        </span>
      </footer>
    </>
  );
};

export default Layout;
