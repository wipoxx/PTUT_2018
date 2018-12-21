import React, {Component} from 'react';
import "./LogoEtTitre.css";
import Logo from './Logo.js';
import NiglowTitre from './NiglowTitre.js';

class LogoEtTitre extends Component {
    render() {
        return (
            <div className="logo-et-titre">
                <Logo/>
                <NiglowTitre/>
            </div>
        )
    }
}

export default LogoEtTitre