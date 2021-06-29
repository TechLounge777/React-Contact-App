import React from 'react'
import user1 from '../images/user1.png';

function ContactCard(props) {
    const {id, name, email} = props.contact;
    return (
        
            <div className="item">
                <img className="ui avatar image" src={user1} alt="user" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </div>
                    <i className="trash alternate outine icon" style={{color: "red", marginTop: "7px"}}></i>
            </div>
        
    )
}

export default ContactCard

