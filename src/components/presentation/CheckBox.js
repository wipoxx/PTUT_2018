import React, { Component } from "react";

class CheckBox extends Component {
    render() {
        return(
            <div>
                <input type="checkbox" onChange={this.handleChange} checked={this.props.checked}/> 
            </div>
        )
    }

    handleChange = event =>{
        this.props.onChange(event.target.checked);
    }
}

export default CheckBox;