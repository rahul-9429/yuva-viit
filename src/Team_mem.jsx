import React from 'react';
import logo from './photos/YUVAVIIT.png'; 

const Team_mem = ({ link, linkedin, name, position }) => (
    <>
        <a href={linkedin}>
            <span className="mem-img-cover">
                <img src={link || logo} alt="" className="team-mem" /> 
                <span className="mem-info">
                    {name}
                    <br />
                    <i>{position}</i>
                </span>
            </span>
        </a>
    </>
);

export default Team_mem;
