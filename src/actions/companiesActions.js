import companiesApi from "../api/companiesApi";

// export function loadCompanies(params) {
// 	return function(dispatch) {
// 		return companiesApi
// 			.getCompanies(params)
// 			.then(companies => {
// 				dispatch(loadCompaniesSuccess(companies));
// 			})
// 			.catch(error => {
// 				throw error;
// 			});
// 	};
// }

var donnees = [
	{
		_id: "5c461a0cc4c2f31380d22f9a",
		datasetid: "sirene",
		recordid: "7a8ecbeab836ab55d1fdd7790446a24930326a38",
		geometry: {
			type: "Point",
			coordinates: [4.328742, 46.107134],
		},
		record_timestamp: "2019-01-08T16:43:00+01:00",
		activite: "Industrie manufacturière / Fabrication de tapis et moquettes",
		activnat: "NR",
		amintren: "2012-09",
		amintret: "2012-09",
		apen700: "4673B",
		apet700: "1393Z",
		arronet: "2",
		auxilt: "Non auxiliaire",
		categorie: "PME",
		code_classe: "1393",
		code_division: "130",
		code_groupe: "139",
		code_section: "C",
		codpos: "69470",
		comet: "066",
		coordonnees: [46.107134, 4.328742],
		ctonet: "11",
		dapen: "2008",
		dapet: "2008",
		dateess: "2018-06-21",
		datemaj: "2019-01-06T04:36:07+01:00",
		dcren: "1965-01-01",
		dcret: "2003-01-01",
		ddebact: "2003-01-01",
		defen: "2016",
		defet: "2016",
		depcomen: "69040",
		depcomet: "69066",
		depet: "69",
		diffcom: "Établissement diffusable",
		du: "69",
		efencent: "20",
		efetcent: "6",
		epci: "200040566",
		esaann: "2016",
		esaapen: "4673B",
		esasec1n: "4673B",
		ess: "N",
		ind_publipo: "établissement faisant partie du champ du publipostage",
		iriset: "690660000",
		l1_declaree: "BENOIT LE TAPIS BROSSE",
		l1_normalisee: "BENOIT LE TAPIS BROSSE",
		l2_declaree: "B.T.B.",
		l2_normalisee: "B T B",
		l3_declaree: "QUARTIER DE L'ISLE",
		l3_normalisee: "QUARTIER DE L ISLE",
		l4_declaree: "RUE DE L ISLE",
		l4_normalisee: "RUE DE L ISLE",
		l5_normalisee: "COURS LA VILLE",
		l6_declaree: "69470 COURS",
		l6_normalisee: "69470 COURS",
		l7_normalisee: "FRANCE",
		libactivnat: "Non renseigné",
		libapen:
			"Commerce de gros d'appareils sanitaires et produits de décoration",
		libapet: "Fabrication de tapis et moquettes",
		libcom: "COURS",
		libesaapen:
			"Commerce de gros (commerce interentreprises) d'appareils sanitaires et de produits de décoration",
		libessen: "L’entreprise n’appartient pas au champ de l’ESS",
		libmoden: "Activité simple",
		libmodet: "Activité simple",
		libmonoact:
			"Entreprise à établissements multiples dont les activités principales se répartissent dans plusieurs divisions de la NAF, aucune ne regroupant plus de 50% des effectifs",
		libnj: "SAS, société par actions simplifiée",
		liborigine: "Création (pour tout type de déclaration)",
		libreg_new: "Auvergne-Rhône-Alpes",
		libtca: "De 5 millions à moins de 10 millions d' euros",
		libtefen: "12 - 20 à 49 salariés",
		libtefet: "03 - 6 à 9 salariés",
		libtu: "Unité urbaine de moins de 5 000 habitants",
		libvoie: "DE L ISLE",
		lieuact: "99",
		moden: "S",
		modet: "S",
		monoact: "4",
		nic: "00136",
		nicsiege: "00169",
		nj: "5710",
		nom_dept: "RHONE",
		nomen_long: "BENOIT LE TAPIS BROSSE",
		origine: "1",
		proden: "Productif",
		prodet: "Productif",
		rpen: "84",
		rpet: "84",
		saisonat: "Permanente",
		section: "Industrie manufacturière",
		siege: "Etablissement non siège",
		sigle: "BTB",
		siren: "965506991",
		siret: "96550699100136",
		sous_classe: "Fabrication de tapis et moquettes",
		tca: "4",
		tcd: 21,
		tefen: "12",
		tefet: "03",
		tu: "1",
		typvoie: "RUE",
		uu: "06",
		vmaj: "F",
		vmaj1: "0",
		vmaj2: "0",
		vmaj3: "1",
		zemet: "8214",
	},
];
export function loadCompanies() {
	return function(dispatch) {
		dispatch(loadCompaniesSuccess(donnees));
	};
}

export function toggleFlagBlock() {
	return function(dispatch) {
		dispatch(toggleFlagBlockMap());
	};
}

export function loadCompaniesStatsActivities(params) {
	return function(dispatch) {
		return companiesApi
			.getCompaniesStatsActivities(params)
			.then(activities => {
				dispatch(loadCompaniesStatsActivitiesSuccess(activities));
			})
			.catch(error => {
				throw error;
			});
	};
}

export function loadCompaniesSuccess(companies) {
	return { type: "LOAD_COMPANIES_SUCCESS", companies };
}

export function loadCompaniesStatsActivitiesSuccess(activities) {
	return { type: "LOAD_COMPANIES_STATS_ACTIVITIES_SUCCESS", activities };
}

export function toggleFlagBlockMap() {
	return { type: "TOGGLE_FLAG_BLOCK_MAP" };
}
