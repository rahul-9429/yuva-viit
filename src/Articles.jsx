import React from "react";
import { Link } from "react-router-dom";
import './App.css';
// import Gennxt_exp from "./articles/Gennxt_exp";
import logo from './photos/YUVAVIIT.png';
const Articles = () =>{
    return(
        <>
        <h1 className="eve-head">Recent Articles</h1>
        <div className="art-out-wrap">

           <Link to="/Gennxt-art" className="Art-links">
            <div className="art-main-wrap">
                <img src={logo} alt="" />
                <span className="art-meta-info">
                    <span className="art-meta-info-head"> 
                        GenNxt Lab Leadership Bootcamp - Experience
                    </span>
                    <br/>

                 <sapn className="art-meta-info-sub">
                     By Rahul Kasimikota | 6th October 2024 
                 </sapn>
                </span>
            </div>
            </Link>

            <Link to="/Mental-health-art" className="Art-links">
            <div className="art-main-wrap">
                <img src={logo} alt="" />
                <span className="art-meta-info">
                    <span className="art-meta-info-head"> 
                    Unlocking Growth: A Developer's Guide 
                    </span>
                    <br/>

                 <sapn className="art-meta-info-sub">
                     By Rahul Kasimikota | 8th October 2024 
                 </sapn>
                </span>
            </div>
                </Link>

         {/* <Link to="/Gennxt-art" className="Art-links">
            <div className="art-main-wrap">
                <img src={logo} alt="" />
                <span className="art-meta-info">
                    <span className="art-meta-info-head"> 
                        GenNxt Lab Leadership Bootcamp - Experience
                    </span>
                    <br/>

                 <sapn className="art-meta-info-sub">
                     By Rahul Kasimikota | 6th October 2024 
                 </sapn>
                </span>
            </div>
                </Link> */}
                  
            </div>
        </>
    )
};

export default Articles;