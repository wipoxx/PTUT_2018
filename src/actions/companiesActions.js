import companiesApi from "../api/companiesApi";
import * as types from "./actionTypes";

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

export function loadCompaniesAttributesDistinctValues(attribute, params) {
	return function(dispatch) {
		return companiesApi
			.getCompaniesAttributeDistinctValues(attribute, params)
			.then(values => {
				dispatch(loadCompaniesAttributesDistinctValuesSuccess(attribute, values));
			})
			.catch(error => {
				throw error;
			});
	};
}

export function loadCompaniesSuccess(companies) {
	return { type: types.LOAD_COMPANIES_SUCCESS, companies };
}

export function loadCompaniesStatsActivitiesSuccess(activities) {
	return { type: types.LOAD_COMPANIES_STATS_ACTIVITIES_SUCCESS, activities };
}

export function toggleFlagBlockMap() {
	return { type: types.TOGGLE_FLAG_BLOCK_MAP };
}

export function loadCompaniesAttributesDistinctValuesSuccess(attribute, values) {
	return { type: types.LOAD_COMPANIES_ATTRIBUTES_DISTINCT_VALUES_SUCCESS, attribute, values};
}
