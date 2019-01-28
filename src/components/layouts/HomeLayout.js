import React, { Component } from "react";
import "./HomeLayout.css";

class HomeLayout extends Component {
	render() {
		return (
            <div className="home-fond">
				<h1 className="titre1">Un emplacement <b> parfait</b> pour une entreprise ?</h1>
				<p className="text1">Ne vous poser plus de question ! <b> Niglow </b> est la pour vous.</p>
                <p className="text2">Grace a sa carte interactive, trouver l\'emplacement idéal pour votre entreprise</p>
				<button className="button1">essayer maintenant</button>
			</div>
		);
	}
}

export default HomeLayout;
