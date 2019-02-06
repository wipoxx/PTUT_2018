import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function companiesStatsReducer(state = initialState.companiesStats, action) {
    switch (action.type) {
        case types.LOAD_COMPANIES_STATS_ACTIVITIES_SUCCESS:
            let labels=[];
            let data=[];
            action.activities.map(value => {
                labels.push(value._id);
                data.push(value.count);
            });
            console.log("data : "+data+" labels : " + labels);
            return Object.assign({}, {activities: {labels:labels,data:data}});
        default:
            return state;
    }
}