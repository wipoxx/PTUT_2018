import React, { Component } from "react";
import "./ContactLayout.css";
import { Editor } from '@tinymce/tinymce-react';

class ContactLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {valueNom: '', valueMail:'', valueTexte:''};

        this.handleChangeNom = this.handleChangeNom.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEditorChange = (e) => {
        this.setState({valueTexte: e.target.getContent()});
    }

    handleChangeNom(event) {
        this.setState({valueNom: event.target.value});
    }

    handleChangeMail(event) {
        this.setState({valueMail: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: '+ this.state.valueNom + '\n A email was submitted: '+ this.state.valueMail+ '\n A text was submitted: '+ this.state.valueTexte);
        event.preventDefault();
    }

	render() {
		return (
            <div className="contact-fond">
                <h1 className="contacttitre1">une <b> question </b> ? contacter nous !</h1>
                <form onSubmit={this.handleSubmit}>
                    <label className="contacttext1">
                        Nom : <input type="text" className="contactwidht" value={this.state.valueNom} onChange={this.handleChangeNom}/>
                    </label>
                    <label className="contacttext2">
                        Email : <input type="email" className="contactwidht" value={this.state.valueMail} onChange={this.handleChangeMail}/>
                    </label >
					<div className="contacttext3">
                    <Editor
                        apiKey='zlmfex2571l9j2z3zr1eq1p0qv082541562m2i3fe03hv9oi '
                        init={{
                            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                        }}
                        onChange={this.handleEditorChange}
                    />
					</div>
                    <input className="contactbutton1" type="submit" value="Envoyer" />
                </form>
            </div>
		);
	}
}

export default ContactLayout;
