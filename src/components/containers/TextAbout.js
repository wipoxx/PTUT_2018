import React from "react";
import "./TextAbout.css";

class TextAbout extends React.Component {
	render() {
		return (
			<div>
				<h1 className="about-titre1">
					<b> 5 </b> développeurs à votre écoute chaque <b> jour !</b>
				</h1>
				<p className="about-text1">
					Quand nous avons créé notre entreprise, nous nous sommes posés une
					question simple
				</p>
				<p className="about-text2">
					<b>Comment savoir où développer sa société? </b>{" "}
				</p>
				<p className="about-text3">
					C'est ainsi qu'est né <b> Niglow</b> que nous avons créé pour{" "}
					<b> vous.</b>
				</p>
				<p className="about-text4">
					Niglow est entièrement <b>gratuit</b> et nous sommes heureux de vous
					aider à trouver <b>l'emplacement parfait.</b>
				</p>
				<p className="about-text5">
					N'hésitez pas à nous informer de la moindre suggestion.
				</p>
				<p className="about-text6">
					<b>À bientôt !</b>
				</p>
			</div>
		);
	}
}

export default TextAbout;
