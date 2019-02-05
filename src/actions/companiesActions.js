import companiesApi from "../api/companiesApi";

export function loadCompanies(params) {
	return function(dispatch) {
		return companiesApi
			.getCompanies(params)
			.then(companies => {
				dispatch(loadCompaniesSuccess(companies));
			})
			.catch(error => {
				throw error;
			});
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
