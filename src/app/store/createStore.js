import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./tags";
import srvPCsReducer from "./srvPCs";
import typesReducer from "./types";

const rootReducer = combineReducers({
  srvPCs: srvPCsReducer,
  types: typesReducer,
  tags: tagsReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
