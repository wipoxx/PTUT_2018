import ReactDOM from 'react-dom';
import React, { Component } from "react";
import "./Toggle.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
          isToggleOn: this.props.isToggleOn
      }


      // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick() {
		this.setState(function(prevState) {
			return {isToggleOn: !prevState.isToggleOn};
		});
		this.props.onClick();
	}

  render() {
    return (
        <button className={this.state.isToggleOn ? 'toggle-on' : 'toggle-off'} onClick={this.handleClick} >
            {this.props.texte}
        </button>
    );
  }
}

export default Toggle;