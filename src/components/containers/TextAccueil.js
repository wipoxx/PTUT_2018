import React from "react";
import "./TextAccueil.css";

class TextAccueil extends React.Component {
	render() {
		return (
			<div>
				<h1 className="accueil-titre1">
					L'emplacement <b> parfait</b> pour votre entreprise ?
				</h1>
				<p className="accueil-text1">
					Ne vous posez plus de questions ! <b> Niglow </b> est là pour vous.
				</p>
				<p className="accueil-text2">
					Grâce à sa carte interactive, trouvez l'emplacement idéal pour votre
					entreprise.
				</p>
				<button className="accueil-button1">Essayer maintenant </button>
			</div>
		);
	}
}

export default TextAccueil;
