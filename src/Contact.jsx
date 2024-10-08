import React from "react";
import './App.css';


const Contact = () =>{
    return(
        <>
          <div className="cont-wrap">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598.0056753308431!2d83.1652042630064!3d17.710712769626394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3968cc9fe97785%3A0x6ebafe5de3375704!2sVignan%20CSE%20department!5e0!3m2!1sen!2sin!4v1724168401684!5m2!1sen!2sin"
    loading="lazy"
    className="cont-map"
    referrerPolicy="no-referrer-when-downgrade"
    style={{ border: "0px" }}
  ></iframe>
  
</div>

        </>
    )
};

export default Contact;