import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./user";
import usersReducer from "./users";
import requestsReducer from "./users";
import endorsementsReducer from "./endorsement";
import postsReducer from "./posts";
import singlePostReducer from "./singlePost";
import planReducer from "./plan";
import likesReducer from "./likes";
import messagesReducer from "./messages";
import commentsReducer from "./comments";

const reducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  requests: requestsReducer,
  endorsements: endorsementsReducer,
  posts: postsReducer,
  singlePost: singlePostReducer,
  plans: planReducer,
  likes: likesReducer,
  messages: messagesReducer,
  comments: commentsReducer,
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
