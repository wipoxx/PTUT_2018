import React, { Component } from "react";
import Toggle from "../containers/Toggle";

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {visiblity: ""};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <div id="testDiv" visibility={this.props.visiblity}>
                    <p> test </p>
                    <Toggle texte='text' onClick={this.handleClick}/>
                </div>
            </div>
        )
    }

    handleClick() {
        alert("Hello! I am an alert box!!");
    }
}

export default Wrapper;
