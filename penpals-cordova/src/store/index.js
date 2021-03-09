import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./user";
import usersReducer from "./users";

// import authors from './authors'
// import singleStory from './singleStory'
// import singleAuthor from './singleAuthor'

const reducer = combineReducers({
  user: userReducer,
  users: usersReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
