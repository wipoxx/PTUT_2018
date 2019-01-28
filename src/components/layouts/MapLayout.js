import React, { Component } from "react";
import Maps from "../containers/Maps";
import DoughnutWrapped from "../containers/DoughnutWrapped"

export default class MapLayout extends Component {
	render() {
		return (
			<div>
				<Maps/>
					<DoughnutWrapped isToggleOn={false} titre="titreTest" data={[300, 50, 100]} labels={['Red', 'Green', 'Yellow']}/>
			</div>
		)
	}
}
