import { combineReducers } from "redux";
import webReducer from "./website.reducer";
import authReducer from "./auth.reducer";
import adminReducer from "./admin.reducer";
export const rootReducer = combineReducers({
  web: webReducer,
  auth: authReducer,
  admin: adminReducer,
});
