import React from "react";
import "../../style/bootstrap.css";
import "./ListeDeroulante.css";

class ListeDeroulante extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
	}
	render() {
		return (
			<form name="Activites" className="formActivities">
				<select
					name="ListeActivites"
					onChange={this.handleChange}
					className="form-control"
				>
					<option value="">Choisir une activité</option>
					{this.props.typeActivite.map(function(monActivite) {
						return (
							<option
								key={"id_" + monActivite.activite}
								value={monActivite.activite}
							>
								{monActivite.activite}
							</option>
						);
					})}
				</select>

				<button
					onClick={this.handleClick}
					className="btn btn-outline-primary ml-2"
				>
					OK
				</button>
			</form>
		);
	}
	handleChange = value => {
		this.setState({ value });
	};
	handleClick = () => {
		this.props.onSubmit(this.state.value);
	};
}

export default ListeDeroulante;
