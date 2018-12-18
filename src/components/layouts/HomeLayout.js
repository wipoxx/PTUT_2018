import React, { Component } from "react";
import News from "../containers/Example";
import Formulaire from "../containers/Formulaire";
import Maps from "../containers/Maps";

export default class HomeLayout extends Component {
	render() {
		return (
			<div>
				<h1> Trouvez ce que vous cherchez !</h1>
				<News/>
				<Formulaire onSubmit={this.handleSubmit}/>
				<div id="rond">hello</div>
				<Maps/>
			</div>
		)
	}

	handleSubmit = (valeur) => {
		
	}
}
