import React from 'react'

function ContactList(props) {

    const renderContactList = props.contacts.map((contact) =>{
        return (
            <div className="item">
                <div className="Content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                    <i className="trash alternate outine icon"></i>
                </div>
            </div>
        );
    });

    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
};

export default ContactList
