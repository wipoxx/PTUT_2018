import React, { Component } from "react";
import Toggle from "../containers/Toggle";
import "./Wrapper.css";

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: this.props.isToggleOn
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <Toggle texte={this.props.texte} isToggleOn={this.state.isToggleOn} onClick={this.handleClick}/>
                    <div className={this.state.isToggleOn ? 'wrapper-out' : 'wrapper-in'} id="test">
                        {this.props.children}
                    </div>
            </div>
        )
    }

    handleClick() {
        this.setState(function(prevState) {
            return {isToggleOn: !prevState.isToggleOn};
        });
    }
}

export default Wrapper;
