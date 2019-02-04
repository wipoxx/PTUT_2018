import React, { Component } from "react";
import "./Footer.css";
import "../../../style/bootstrap.css";

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<span className="text-muted">© 2018 Niglow</span>
				</div>
			</footer>
		);
	}
}

export default Footer;
