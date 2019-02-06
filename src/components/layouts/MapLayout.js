import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../../style/bootstrap.css";
import * as companieActions from "../../actions/companiesActions";
import ListeDeroulante from "../presentation/ListeDeroulante";
import GraphWrapper from "../containers/GraphWrapper";
import Maps from "../containers/Maps";
import Toggle from "../containers/Toggle";

import "./MapLayout.css";

class MapLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			graphType: null,
			graphLabel: null,
			lastButtonClicked: null,
			dataRender:[],
			labelsRender:[],
			dataTypeEntreprise:[],
			labelsTypeEntreprise:[]
		};
		this.handleGraphRendering = this.handleGraphRendering.bind(this);
		this.handleMoveEnd = this.handleMoveEnd.bind(this);
	}

	render() {
		var typeActivite = [
			{ id: "1", activite: "Boulangerie" },
			{ id: "2", activite: "Supermarché" },
		];
		var data = [65, 59, 80, 81, 56, 55, 40];
		var labels = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
		];

		return (
			<div className="layout">
				<div className="mapLayout">
					<div className="mapButton">
						<Toggle
							texte="Bloquer la localisation sur l'actuelle"
							isToggleOn={!this.state.flagBlock}
							onClick={this.props.actions.toggleFlagBlock}
						/>
						<ListeDeroulante
							typeActivite={typeActivite}
							onSumbit={this.handleSubmit}
						/>
					</div>
					<Maps onMoveEnd={this.handleMoveEnd}/>
				</div>
				<div className="graphs">
					<div className="graphsButtons">
						<button
							className={"btn btn-outline-primary"}
							onClick={() => {
								this.handleGraphRendering("Doughnut", 1, "", this.state.dataTypeEntreprise, this.state.labelsTypeEntreprise);
							}}
						>
							Type d'entreprise
						</button>
						<button
							className={" btn btn-outline-primary  "}
							onClick={() => {
								this.handleGraphRendering("Bar", 2, "Méga Graphique", data, labels);
							}}
						>
							Histogramme
						</button>
						<button
							className={" btn btn-outline-primary  "}
							onClick={() => {
								this.handleGraphRendering(
									"HorizontalBar",
									3,
									"Super Graphique",
									 data,
									 labels
								);
							}}
						>
							Histogramme horizontal
						</button>
						<button
							className={" btn btn-outline-primary  "}
							onClick={() => {
								this.handleGraphRendering("Line", 4, "Ultra Graphique", data, labels);
							}}
						>
							Courbe
						</button>
					</div>
					<div className="graphRendering">
						<GraphWrapper
							graphType={this.state.graphType}
							data={this.state.dataRender}
							labels={this.state.labelsRender}
							graphLabel={this.state.graphLabel}
						/>
					</div>
				</div>
			</div>
		);
	}

	handleMoveEnd() {
		alert("truc");
	}

	handleSubmit() {}

	handleGraphRendering(type, nb, graphLabel, data, labels) {
		// Pour typesEntreprises
		let dataTmp = [];
		let labelsTmp = [];
		this.props.companiesStats.activities.map(value => {
			labelsTmp.push(value._id);
			dataTmp.push(value.count);
		});

		this.props.companiesStats.activities.map(value => {
			this.setState({ dataTypeEntreprise: dataTmp })
			this.setState({ labelsTypeEntreprise: labelsTmp })
		});

		this.setState({ lastButtonClicked: nb, graphLabel: graphLabel });
		this.state.graphType === null || this.state.lastButtonClicked !== nb
			? this.setState({ graphType: type })
			: this.setState({ graphType: null });
		this.setState({dataRender:data});
		this.setState({labelsRender:labels});

	}

}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(companieActions, dispatch),
	};
}

function mapStateToProps(state) {
	return {
		flagBlock: state.map.flagBlock,
		companiesStats: state.companiesStats
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MapLayout);
