import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {expenseReducer} from "../reducers/expenses";
import {AppActions} from "../types/actions";
import {composeWithDevTools} from "redux-devtools-extension"

export const rootReducer = combineReducers({
  expenses: expenseReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
);
