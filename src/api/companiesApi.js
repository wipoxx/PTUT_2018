import querystring from 'querystring';

class CompaniesApi {
    static getCompanies(params) {
        const stringParams = querystring.stringify(params);
        return fetch(`http://marinecamuset.com:1234/companies?${stringParams}`, { method: "get" }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getCompaniesStatsActivities(params) {
        const stringParams = querystring.stringify(params);
        return fetch(`http://marinecamuset.com:1234/companies/stats/activities?${stringParams}`, { method: "get" }).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default CompaniesApi;