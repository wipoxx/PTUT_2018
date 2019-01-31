import React, { Component } from "react";
import {Line } from 'react-chartjs-2';
import Wrapper from "./Wrapper"
import "./LineExampleWrapped.css";

class LineExampleWrapped extends Component {
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
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(255,84,3,0.4)',
                    borderColor: 'rgba(255,84,3,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(255,84,3,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(255,84,3,1)',
                    pointHoverBorderColor: 'rgba(255,84,3,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10
                }]
            }
        }
    }

    render() {
        return (
            <div >
                <Wrapper isToggleOn={this.state.isToggleOn} texte={this.props.titre}>
                    <div className="LineExample-lenght">
                        <Line  data={this.state.dataList}/>
                    </div>
                </Wrapper>
            </div>
        );
    }
}

export default LineExampleWrapped;