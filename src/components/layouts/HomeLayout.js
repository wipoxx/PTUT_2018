import React, { Component } from "react";
import "./HomeLayout.css";
import TextAccueil from "../containers/TextAccueil";

class HomeLayout extends Component {
	render() {
		return (
            <div className="home-fond">
				<div className="home-text">
					<TextAccueil />
				</div>
			</div>
		);
	}
}

export default HomeLayout;
