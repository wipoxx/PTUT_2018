import React, { Component } from "react";

class Questionnaire extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <label htmlFor="latitude">latitude: </label>
                <input type="text" name="lat" id="lat" required/>
                <label htmlFor="longitude">longitude: </label>
                <input type="text" name="long" id="long" required/>
                <label htmlFor="kilometrage">kilometrage: </label>
                <input type="text" name="km" id="km" required/>
            </div>
        );
    }
}

export default Questionnaire;