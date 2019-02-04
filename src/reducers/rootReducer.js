import { combineReducers } from "redux";
import map from "./mapReducer";
import companiesStats from "./companiesStatsReducer";

const rootReducer = combineReducers({
	map,
	companiesStats,
});

export default rootReducer;
