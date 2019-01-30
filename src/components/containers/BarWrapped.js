import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import Wrapper from "./Wrapper"
import "./BarWrapped.css";

class BarWrapped extends Component {
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
                    <div className="BarWrapped-lenght">
                        <Bar
                            data={this.state.dataList}
                            width={100}
                            height={50}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                </Wrapper>
            </div>
        );
    }
}

export default BarWrapped;