import React, { Component } from "react";
import "./HomeLayout.css";

class HomeLayout extends Component {
	render() {
		return (
            <div className="home-fond">
				<h1 className="titre1">L'emplacement <b> parfait</b> pour votre entreprise ?</h1>
				<p className="text1">Ne vous posez plus de questions ! <b> Niglow </b> est là pour vous.</p>
                <p className="text2">Grâce à sa carte interactive, trouvez l\'emplacement idéal pour votre entreprise.</p>
				<button className="button1">Essayer maintenant</button>
			</div>
		);
	}
}

export default HomeLayout;
