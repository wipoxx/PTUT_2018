import React, { Component } from "react";
import "./ContactLayout.css";
import TextContact from "../containers/TextContact";

class ContactLayout extends Component {

	render() {
		return (
            <div className="contact-fond">
                <div className="contact-text">
                    <TextContact/>
                </div>
            </div>
		);
	}
}

export default ContactLayout;
