import {recipes} from "./recipes";
import {combineReducers} from "redux";


export const rootReducer = combineReducers({recipes: recipes});