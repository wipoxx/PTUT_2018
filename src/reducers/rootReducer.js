import { combineReducers } from "redux";
import map from "./mapReducer";
import companiesStats from "./companiesStatsReducer";
import companiesAttributes from "./companiesAttributesReducer";

const rootReducer = combineReducers({
	map,
	companiesStats,
	companiesAttributes
});

export default rootReducer;
