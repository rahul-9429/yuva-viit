import React from "react";
import './App.css';
import logo from './photos/YUVAVIIT.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt ,  faClock , faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
const Events = () => {
    return (
        <>
            <div className="event-main"> 
                <h1 className="eve-head">Catch what's happening!</h1>
                    <span className="hmm-ntg">
                        Hmmm... Nothing here yet! Check back soon for updates.
                    </span>
                
                <h1 className="eve-head">Past Events</h1>
                <Link to="/Thriftsale" className="eve-link">
                    <div className="eve-cover">
                        <div className="event-wrap"> 
                            <div className="info-ele ele-a"> <img src={logo} alt="" /></div>
                            <div className="info-ele ele-b"> 
                                <span className="main-tit">Thrift Sale for Climate Change</span>
                                {/* <br/> */}
                                <span className="meta-info">
                                   
                                    <FontAwesomeIcon icon={faCalendarAlt}/> 20-10-2024
                                    <br/><FontAwesomeIcon icon={faClock}/> 10:00 AM - 07:00 PM IST
                                    <br/><FontAwesomeIcon icon={faMapMarkerAlt} /> Civic Exnora, Daspalla Hills.
                                </span>
                                {/* <br/> */}
                                <span className="more-info">
                                We are excited to invite you to our Thrift Sale of Pre-Loved Items happening this Sunday, Mark your calendars and spread the word! See you there! 

                                </span>
                            </div>
                        </div>
                        <div className="info-ele ele-c"><span className="reg-txt">Register Now</span></div>
                    </div>
                </Link>
                <Link to="/Gennxt" className="eve-link">
                    <div className="eve-cover">
                        <div className="event-wrap"> 
                            <div className="info-ele ele-a"> <img src={logo} alt="" /></div>
                            <div className="info-ele ele-b"> 
                                <span className="main-tit">Gennxt Blitz 2.0</span>
                                {/* <br/> */}
                                <span className="meta-info">
                                   
                                    <FontAwesomeIcon icon={faCalendarAlt}/> 26-09-2024 to 27-09-2024
                                    <br/><FontAwesomeIcon icon={faClock}/> 09:00 AM - 04:00 PM IST
                                    <br/><FontAwesomeIcon icon={faMapMarkerAlt} /> Kumaraguru College of Technology, Coimbatore.

                                    
                                </span>
                                {/* <br/> */}
                                <span className="more-info">
                                We are thrilled to announce GenNXT Lab, a signature program at Blitz 2.0 and part of the i3 Conclave, designed to nurture the next generation of highly competent individuals!
                                </span>
                            </div>
                        </div>
                        <div className="info-ele ele-c"><span className="reg-txt">Register Now</span></div>
                    </div>
                </Link>
                <Link to="/Bbic" className="eve-link">
                    <div className="eve-cover">
                        <div className="event-wrap"> 
                            <div className="info-ele ele-a"> <img src={logo} alt="" /></div>
                            <div className="info-ele ele-b"> 
                                <span className="main-tit">Bharat Billion Impact Challenge</span>
                                {/* <br/> */}
                                <span className="meta-info">
                                   
                                    <FontAwesomeIcon icon={faCalendarAlt}/> 18-10-2024 to 19-10-2024
                                    <br/><FontAwesomeIcon icon={faClock}/> 09:00 AM - 04:00 PM IST
                                    <br/><FontAwesomeIcon icon={faMapMarkerAlt} /> Indian Institute of Science, Bengaluru.


                                    
                                </span>
                                {/* <br/> */}
                                <span className="more-info">
                                Calling all aspiring innovators to scale their Entrepreneurship dreams! Join the <b>1st Yuva Cohort of Deep Tech Entrepreneurs</b> and make a real impact! 
                                </span>
                            </div>
                        </div>
                        <div className="info-ele ele-c"><span className="reg-txt">Register Now</span></div>
                    </div>
                </Link>             
                <Link to="/Pond-res" className="eve-link">
                    <div className="eve-cover">
                        <div className="event-wrap"> 
                            <div className="info-ele ele-a"> <img src={logo} alt="" /></div>
                            <div className="info-ele ele-b"> 
                                <span className="main-tit">POND RESTORATION ACTIVITY🫧
                                </span>
                                {/* <br/> */}
                                <span className="meta-info">
                                   
                                    <FontAwesomeIcon icon={faCalendarAlt}/>  05-10-2024 to 05-10-2024
                                    <br/><FontAwesomeIcon icon={faClock}/> 07:30 AM - 10:00 AM IST
                                    <br/><FontAwesomeIcon icon={faMapMarkerAlt} /> Chepulauppada pond, Visakhpatnam.


                                    
                                </span>
                                {/* <br/> */}
                                <span className="more-info">
                                In line with our Nation’s agenda of restoring ponds and water bodies in our country, Young Indians climate change team in collaboration with IYFS Society and GVMC.

                                </span>
                            </div>
                        </div>
                        <div className="info-ele ele-c"><span className="reg-txt">Register Now</span></div>
                    </div>
                </Link>
               
            </div>
        </>
    );
};

export default Events;
