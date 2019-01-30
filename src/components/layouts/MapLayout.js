import React, { Component } from "react";
import Maps from "../containers/Maps";
import DoughnutWrapped from "../containers/DoughnutWrapped"
import HorizontalBarWrapped from "../containers/HorizontalBarWrapped";
import LineExampleWrapped from "../containers/LineExampleWrapped";
import BarWrapped from "../containers/BarWrapped";
import Test from "../containers/Test"
import Questionnaire from "../containers/Questionnaire";

export default class MapLayout extends Component {
	render() {
		return (
			<div>
				<Maps/>
				<DoughnutWrapped isToggleOn={false} titre="titreTest" data={[300, 50, 100]} labels={['Red', 'Green', 'Yellow']}/>
				<HorizontalBarWrapped isToggleOn={false} titre="HorizontalBar" data={[65, 59, 80, 81, 56, 55, 40]} labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}/>
				<LineExampleWrapped isToggleOn={false} titre="Line" data={ [65, 59, 80, 81, 56, 55, 40]} labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}/>
				<BarWrapped isToggleOn={false} titre="Bar" data={[65, 59, 80, 81, 56, 55, 40]} labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}/>
				<Test/>
			</div>
		)
	}
}
