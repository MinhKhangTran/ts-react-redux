import { combineReducers } from "redux";
import { reducer as repoReducer } from "./repoReducer";

export const reducer = combineReducers({ repoReducer });

export type RootState = ReturnType<typeof reducer>;
