import React, {Component} from 'react';
import "./Header.css";
import LogoEtTitre from "./LogoEtTitre";
import Redirection from "./Redirection";

class Header extends Component {
    render() {
        return (
            <div className="header-background">
                <div className="header">
                    <LogoEtTitre/>
                    <Redirection/>
                </div>
            </div>
        )
    }
}

export default Header