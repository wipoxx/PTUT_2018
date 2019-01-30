import React, { Component } from "react";
import Maps from "../containers/Maps";
import ListeDeroulante from "../presentation/ListeDeroulante";
import DoughnutWrapped from "../containers/DoughnutWrapped";
import DonneesMap from "../containers/DonneesMap";

export default class MapLayout extends Component {
	render() {
		var donnees=[
			{"id":"1", "activite":"Boulangerie", "nom":"Boulangerie Menetrier", "Adresse":"115 Avenue Roger Salengro, 69100 Villeurbanne", "lat":"45.7784646", "long":"4.879230499999949"},
			{"id":"2", "activite":"Boulangerie", "nom":"Aux Milles et Une Mie", "Adresse":"38 Avenue Roger Salengro, 69100 Villeurbanne", "lat":"45.7760103", "long":"4.871306499999946"},
			{"id":"3", "activite":"Boulangerie", "nom":"La Huche Aux Pains", "Adresse":"78 Avenue Roger Salengro, 69100 Villeurbanne", "lat":"45.776613", "long":"4.876162399999998"},
			{"id":"4", "activite":"Boulangerie", "nom":"J&H Boulangerie Tonkin", "Adresse":"2 rue Salvador Allende, Centre Commercial Samouraï, 69100 Villeurbanne", "lat":"45.776074", "long":"4.8622857000000295"},
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
				<Maps donneesMap={donnees} />
				{/* <DonneesMap/> */}
				<ListeDeroulante typeActivite={typeActivite} onSumbit={this.handleSubmit}/>
				<DoughnutWrapped isToggleOn={false} titre="titreTest" data={[300, 50, 100]} labels={['Red', 'Green', 'Yellow']}/>
				<DoughnutWrapped isToggleOn={false} titre="titreTest" data={[300, 50, 100]} labels={['Red', 'Green', 'Yellow']}/>
				<DoughnutWrapped isToggleOn={false} titre="titreTest" data={[300, 50, 100]} labels={['Red', 'Green', 'Yellow']}/>
			</div>
		)
	}
}
