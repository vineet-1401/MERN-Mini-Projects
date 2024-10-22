import React from "react";


function ContactCard(props){
    return (
        <>
            <div className="contact-card">
                <img src={props.image} className="user-image"/>
                <div>
                <h2 className="user-name">{props.username}</h2>
                <p className="user-phone">{props.cell}</p>
                </div>
            </div>
        </>
    )
}

export default ContactCard;