import React, {Component} from 'react';
import "./Redirection.css";
import {Link} from "react-router-dom";

class Redirection extends Component {
    render() {
        return (
            <li className="redirection">
                <ul>
                    <Link to="/">Accueil</Link>
                </ul>
                <ul>
                    <Link to="/map">Map</Link>
                </ul>
                <ul>
                    <Link to="/contact">Contact</Link>
                </ul>
                <ul>
                    <Link to="/about">Qui somme nous ?</Link>
                </ul>
            </li>
        )
    }
}

export default Redirection