import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function companiesStatsReducer(
	state = initialState.companiesStats,
	action,
) {
	switch (action.type) {
		case types.LOAD_COMPANIES_STATS_ACTIVITIES_SUCCESS:
			let labels = [];
			let data = [];
			action.activities.map(value => {
				labels.push(value._id);
				data.push(value.count);
			});
			return Object.assign({}, { activities: { labels: labels, data: data } });
		case types.LOAD_UNEMPLOYEMENT_SUCCES:
			return {
				...state,
				chomage: {
					taux: action.chomage[0].taux,
					dep: action.chomage[0].Libellé,
				},
			};
		case types.LOAD_RECENSEMENT_SUCCESS:
			let groupePersonnes = [];
			let nb = [];
			try {
				action.recensement.map(value => {
					groupePersonnes.push(value.sexe + " " + value.age);
					nb.push(value.population);
				});
			} catch (error) {
				console.error(
					"Error in recensement -> companiesStatsReducer: " + error,
				);
			}

			return {
				...state,
				recensement: {
					groupePersonnes: groupePersonnes,
					nb: nb,
					codePostal: action.recensement[0].codgeo,
				},
			};
		default:
			return state;
	}
}
