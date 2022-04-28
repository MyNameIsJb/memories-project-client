import { combineReducers } from "redux";

import Posts from "./posts";
import auth from "./auth";

export default combineReducers({ Posts, auth });
