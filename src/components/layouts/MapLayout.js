import React, { Component } from "react";
import Wrapper from "../containers/Wrapper";
import Maps from "../containers/Maps";

export default class MapLayout extends Component {
	render() {
		return (
			<div>
				<Maps/>
				<Wrapper/>
			</div>
		)
	}
}
