import {combineReducers} from "redux";
import {counter} from "../redux/redux";
import {authState} from "../Auth.redux/Auth.redux";

export default combineReducers({counter,authState})
