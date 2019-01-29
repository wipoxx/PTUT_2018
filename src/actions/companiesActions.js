import companiesApi from '../api/companiesApi';

export function loadCompanies(params) {
    return function(dispatch) {
        return companiesApi.getCompanies(params).then(companies => {
            dispatch(loadCompaniesSuccess(companies));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadCompaniesSuccess(companies) {
    return {type: 'LOAD_COMPANIES_SUCCESS', companies};
}