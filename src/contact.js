import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props){
    return(
        <div className="contact">
            <img className="contact-photo" src={props.photo} alt="" />
            <div className="contact-name">{props.name}</div> 
            <div className="contact-address">{props.address}</div>
        </div>
    );
};