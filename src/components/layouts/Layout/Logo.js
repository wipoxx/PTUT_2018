import React, {Component} from 'react';
import logo from "../../../Data/Logo.svg";

class Logo extends Component {
    render() {
        return (
            <img className="logo" src={logo}/>
        )
    }
}

export default Logo