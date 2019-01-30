import React, { Component } from "react";
import DoughnutWrapped from "../containers/DoughnutWrapped"
import HorizontalBarWrapped from "../containers/HorizontalBarWrapped";
import LineExampleWrapped from "../containers/LineExampleWrapped";
import BarWrapped from "../containers/BarWrapped";
import Test from "../containers/Test"
import ListeDeroulante from "../presentation/ListeDeroulante";
import DonneesMap from "../containers/DonneesMap";
import TypeEntrepriseGraph from "../containers/TypeEntrepriseGraph";

export default class MapLayout extends Component {
	render() {
		var donnees=[
			{"id":"5", "activite":"Supermarché", "nom":"Express", "Adresse":"110 Boulevard du 11 Novembre 1918, 69100 Villeurbanne", "lat":"45.776074", "long":"4.8622857000000295"},
			{"id":"6", "activite":"Supermarché", "nom":"Carrefour Market", "Adresse":"61 Avenue Roger Salengro, 69100 Villeurbanne", "lat":"45.7770772", "long":"4.875454200000036"},
			{"id":"7", "activite":"Supermarché", "nom":"Casino Shop", "Adresse":"2 Avenue Salvador Allende, 69100 Villeurbanne", "lat":"45.77601399999999", "long":"4.862334000000033"},
			{"id":"8", "activite":"Supermarché", "nom":"Franprix", "Adresse":"21 Avenue Piaton, 69100 Villeurbanne", "lat":"45.77426620000001", "long":"4.867366899999979"}
		]
		var typeActivite=[
			{"id":"1", "activite":"Boulangerie"},
			{"id":"2", "activite":"Supermarché"},
		]
		return (
			<div>
				<DonneesMap/>
				<TypeEntrepriseGraph/>
				<ListeDeroulante typeActivite={typeActivite} onSumbit={this.handleSubmit}/>
				<DoughnutWrapped isToggleOn={false} titre="titreTest" data={[300, 50, 100]} labels={['Red', 'Green', 'Yellow']}/>
				<HorizontalBarWrapped isToggleOn={false} titre="HorizontalBar" data={[65, 59, 80, 81, 56, 55, 40]} labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}/>
				<LineExampleWrapped isToggleOn={false} titre="Line" data={ [65, 59, 80, 81, 56, 55, 40]} labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}/>
				<BarWrapped isToggleOn={false} titre="Bar" data={[65, 59, 80, 81, 56, 55, 40]} labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}/>
				<Test/>
			</div>
		)
	}
}
