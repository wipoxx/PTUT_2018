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
					value={this.state.value}
				>
					<option value="">Toutes les activités</option>
					{this.props.typeActivite.map(function(monActivite, i) {
						return (
							<option
								key={i}
								value={monActivite}
							>
								{monActivite}
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
	handleChange = e => {
		const value = e.target.value;
		this.setState({ value });
	};
	handleClick = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.value);
	};
}

export default ListeDeroulante;
