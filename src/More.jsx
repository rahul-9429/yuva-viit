import React from "react";
import './App.css';
import { Link } from "react-router-dom";

const More = () =>{
    return(
        <>
          <div className="more-wrap">
            <span className="more-links"> 
                <Link to="/Team"><i className="fas fa-users"></i> Team</Link></span>
            <span className="more-links">
                <Link to="/Contact-us"> <i className="fas fa-envelope"></i> Contact Us</Link></span>
            <span className="more-links"></span>

          </div>
        </>
    )
};

export default More;