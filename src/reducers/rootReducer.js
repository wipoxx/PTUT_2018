import {combineReducers} from 'redux';
import companies from './companiesReducer';
import companiesStats from './companiesStatsReducer'

const rootReducer = combineReducers({
    companies,
    companiesStats
});

export default rootReducer;