import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function companiesAttributesReducer(state = initialState.companiesAttributes, action) {
    switch (action.type) {
        case types.LOAD_COMPANIES_ATTRIBUTES_DISTINCT_VALUES_SUCCESS:
            return Object.assign({}, {[action.attribute]: action.values});
        default:
            return state;
    }
}