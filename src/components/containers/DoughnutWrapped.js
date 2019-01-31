import React, { Component } from "react";
import {Doughnut} from 'react-chartjs-2';
import Wrapper from "./Wrapper"
import "./DoughnutWrapped.css";


const backgroundColorData= ['#ffcccc', '#ff4d4d','#fffa65','#32ff7e','#7efff5','#18dcff','#7d5fff','#4b4b4b','#cd84f1','#ffcccc', '#ff4d4d','#fffa65','#32ff7e','#7efff5','#18dcff','#7d5fff','#4b4b4b','#cd84f1','#ffcccc', '#ff4d4d','#fffa65','#32ff7e','#7efff5','#18dcff','#7d5fff','#4b4b4b','#cd84f1'];
const hoverBackgroundColorData= ['#ffb8b8', '#ff4d4d','#fff200','#3ae374','#67e6dc','#17c0eb','#7158e2','#3d3d3d','#c56cf0','#ffb8b8', '#ff4d4d','#fff200','#3ae374','#67e6dc','#17c0eb','#7158e2','#3d3d3d','#c56cf0','#ffb8b8', '#ff4d4d','#fff200','#3ae374','#67e6dc','#17c0eb','#7158e2','#3d3d3d','#c56cf0'];

class DoughnutWrapped extends Component {
    constructor(props) {
        super(props);

        //on remplit le state
        this.state = {
            isToggleOn: this.props.isToggleOn,

        }
    }

    render() {
        var dataList = {
            labels: this.props.labels,
                datasets: [{
                data: this.props.data,
                backgroundColor: backgroundColorData,
                hoverBackgroundColor: hoverBackgroundColorData
            }]
        }
        return (
            <div >
                <Wrapper isToggleOn={this.state.isToggleOn} texte={this.props.titre}>
                    <div className="doughnut-lenght">
                        <Doughnut data={dataList}/>
                    </div>
                </Wrapper>
            </div>
        );
    }
}

export default DoughnutWrapped;