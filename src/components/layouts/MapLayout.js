import React, { Component } from "react";
import Formulaire from "../containers/Formulaire";
import Maps from "../containers/Maps";

export default class MapLayout extends Component {
	render() {
		return (
			<div>
				<Formulaire onSubmit={this.handleSubmit}/>
				<div id="rond">hello</div>
				<Maps/>
			</div>
		)
	}

	handleSubmit = (valeur) => {
		
	}
}
