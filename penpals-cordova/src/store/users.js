import axios from "axios";
const serverLink = "http://localhost:8081";

// ACTION TYPES
const GET_ALL_USERS = "GET_ALL_USERS";
const GET_ALL_REQUESTS = " GET_ALL_REQUESTS ";
// ACTION CREATORS
const getAllUsers = (users) => ({ type: GET_ALL_USERS, users });
const getAllRequests = (users) => ({ type: GET_ALL_REQUESTS, users });
// THUNK
export const getUsersInfo = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8081/api/users`);
    dispatch(getAllUsers(data));
  } catch (error) {
    console.log(error);
  }
};

// Initial State
const defaultUsers = [];

// REDUCER
export default function usersReducer(state = defaultUsers, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users;
    default:
      return state;
  }
}
