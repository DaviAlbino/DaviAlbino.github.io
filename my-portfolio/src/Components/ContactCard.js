import React from "react";
import contacts from "../services/contactMock";

function ContactCard () {
    return(
        <div className="contact-container">
            {
                contacts.map((contact) => (
                    <div className="contact-card" key={ contact.id }>
                        <a 
                            href={ contact.address }
                            title={ contact.contactTitle }
                            target="_blank" rel="noreferrer"
                        >
                            <img 
                                src={ contact.image }
                                alt={ contact.contactTitle }
                                className="contact-icon"
                            />
                        </a>
                        <p className="contact-description">{ contact.description }</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ContactCard;