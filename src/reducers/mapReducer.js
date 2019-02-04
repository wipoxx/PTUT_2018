import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function mapReducer(state = initialState.map, action) {
	switch (action.type) {
		case types.LOAD_COMPANIES_SUCCESS:
			return { ...state, companies: action.companies };
		case types.TOGGLE_FLAG_BLOCK_MAP:
			return { ...state, flagBlock: !state.flagBlock };
		default:
			return state;
	}
}
