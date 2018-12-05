import React, { Component } from "react";
import News from "../containers/Example";

export default class HomeLayout extends Component {
	render() {
		return (
			<div>
				<h1> Page d 'accueil du meilleur projet tut du monde</h1>
				<News />
			</div>
		);
	}
}
