import Increment from "../reducer/increment";
import Decrement from '../reducer/decrement';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    increment:Increment,
    decrement:Decrement
});

export default rootReducer;