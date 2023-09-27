import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";

const combinedReducer = combineReducers({
  modalModel: modalSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "CLEAR") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
});
