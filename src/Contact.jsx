import React from "react";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faInstagram,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () =>{
    return(
        <>
          <div className="cont-wrap">
            <span className="cont-p1">
              <h1 className="main-logo sub-logo">We are listening</h1>
              <br />
              <span className="cont-li-wrap">
              <span className="cont-li-pg">
              <a href="https://chat.whatsapp.com/Gd6G7qcGgPLLsHEyw3gzmv">
              <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '36px',marginRight:'2rem  ' }} /> <h1 className="">Whatsapp</h1>
            </a></span>
              </span><span className="cont-li-wrap">
              <span className="cont-li-pg"> <a href="https://www.linkedin.com/in/yuvaviit/">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '36px' , marginRight:'2rem  ' }} /> <h1 className="">LinkedIn</h1>
            </a></span></span><span className="cont-li-wrap">
              <span className="cont-li-pg"><a href="https://www.instagram.com/viit_yuva_vizag?igsh=bXFwZ3doNmdzaTIw">
              <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '36px',marginRight:'2rem  ' }} /> <h1 className="">Instagram</h1> 
            </a></span></span><span className="cont-li-wrap">
            <span className="cont-li-pg"><a href="mailto:yi.yuvaviit@gmail.com?cc=project.suppourt.rahul@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '34px' ,marginRight:'2rem  '}} /> <h1 className="">Mail</h1> 
            </a></span></span>
            </span>


            <span className="cont-p2"><iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598.0056753308431!2d83.1652042630064!3d17.710712769626394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3968cc9fe97785%3A0x6ebafe5de3375704!2sVignan%20CSE%20department!5e0!3m2!1sen!2sin!4v1724168401684!5m2!1sen!2sin"
    loading="lazy"
    className="cont-map"
    referrerPolicy="no-referrer-when-downgrade"
    style={{ border: "0px" }}
  ></iframe></span>
  
  
</div>

        </>
    )
};

export default Contact;