import React from 'react';
import Social from '../Components/Social';

class Contact extends React.Component {
    render() {
        return(
            <div className="condiv contact">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email  :   lemuel.b.stevens@gmail.com</h3>
                <h3>Phone  :   +1 615-788-9366</h3>
                <Social />
            </div>
        )
    }
}

export default Contact;