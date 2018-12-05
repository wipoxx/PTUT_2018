import React, { Component } from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

class Layout extends Component {
	render() {
		return (
			<div>
				<div className="Layout-header">
					<h1>Projet tut</h1>
					<p>MeHdi et ses bitches</p>
				</div>
				{this.props.children}
				<div />
				<li>
					<ul>
						<Link to="/">Accueil</Link>
					</ul>
					<ul>
						<Link to="/exemple">Exemple</Link>
					</ul>
				</li>
			</div>
		);
	}
}

export default Layout;
