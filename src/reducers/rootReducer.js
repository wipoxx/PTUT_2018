import {combineReducers} from 'redux';
import companies from './companiesReducer';

const rootReducer = combineReducers({
    companies
});

export default rootReducer;