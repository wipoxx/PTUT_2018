import React, { Component } from "react";
import {HorizontalBar } from 'react-chartjs-2';
import Wrapper from "./Wrapper"
import "./HorizontalBarWrapped.css";

class HorizontalBarWrapped extends Component {
    constructor(props) {
        super(props);

        //on remplit le state
        this.state = {
            isToggleOn: this.props.isToggleOn,
            dataList : {
                labels: this.props.labels,
                datasets: [{
                    data: this.props.data,
                    label: this.props.titre,
                    backgroundColor: 'rgba(255,84,3,0.2)',
                    borderColor: 'rgba(255,84,3,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,84,3,0.4)',
                    hoverBorderColor: 'rgba(255,84,3,1)',
                }]
            }
        }
    }

    render() {
        return (
            <div >
                <Wrapper isToggleOn={this.state.isToggleOn} texte={this.props.titre}>
                    <div className="HorizontalBar-lenght">
                        <HorizontalBar  data={this.state.dataList}/>
                    </div>
                </Wrapper>
            </div>
        );
    }
}

export default HorizontalBarWrapped;