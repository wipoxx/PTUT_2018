import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function companiesReducer(state = initialState.companiesStats, action) {
    switch (action.type) {
        case types.LOAD_COMPANIES_STATS_ACTIVITIES_SUCCESS:
            return Object.assign({}, {activities: action.activities});
        default:
            return state;
    }
}