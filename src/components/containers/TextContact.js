import React, { Component } from "react";
import "./TextContact.css";
import { Editor } from '@tinymce/tinymce-react';

class TextContact extends Component {
    constructor(props) {
        super(props);
        this.state = {valueNom: '', valueMail:'', valueTexte:''};

        this.handleNomChange = this.handleNomChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEditorChange = (e) => {
        this.setState({valueTexte: e.target.getContent()});
    }

    handleNomChange(event) {
        this.setState({valueNom: event.target.value});
    }

    handleMailChange(event) {
        this.setState({valueMail: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: '+ this.state.valueNom + '\n A email was submitted: '+ this.state.valueMail+ '\n A text was submitted: '+ this.state.valueTexte);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div className="contact-flex-column">
                    <h1 className="contact-titre1">Une <b> question </b> ? contacter nous !</h1>
                    <div className="contact-flex-form">
                        <div className="contact-flex-line">
                            <label className="contact-text1">
                                Nom : <input type="text" className="contact-input1" value={this.state.valueNom} onChange={this.handleNomChange}/>
                            </label>
                            <label className="contact-text2">
                                Email : <input type="email" className="contact-input2" value={this.state.valueMail} onChange={this.handleMailChange}/>
                            </label >
                        </div>
                    </div>
                    <div className="contact-text3">
                        <Editor
                            apiKey='zlmfex2571l9j2z3zr1eq1p0qv082541562m2i3fe03hv9oi '
                            init={{
                                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'
                            }}
                            onChange={this.handleEditorChange}
                        />
                    </div>
                    <input className="contact-button1" type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
        );
    }
}

export default TextContact;
