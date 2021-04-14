import axios from "axios";

const GET_REQUESTS = "GET_REQUESTS";
const POST_REQUEST = "POST_REQUEST";
const DELETE_REQUESTS = "DELETE_REQUESTS";
const UPDATE_CURRENT_REQUEST = "UPDATE_CURRENT_REQUEST";
export const getRequests = (requests) => {
  return {
    type: GET_REQUESTS,
    requests,
  };
};
const updateCurrentRequest = (request) => ({
  type: UPDATE_CURRENT_REQUEST,
  request,
});

export const postRequest = (requests) => ({
  type: POST_REQUEST,
  requests,
});

export const deleteRequests = () => ({
  type: DELETE_REQUESTS,
});

export const updateRequest = (id, body) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `http://localhost:8081/api/requests/${id}`,
      body
    );
    return dispatch(updateCurrentRequest(data));
  } catch (error) {
    console.error(error);
  }
};
export const getAllRequests = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:8081/api/requests/");
    return dispatch(getRequests(data));
  } catch (error) {}
};
export const getCurrentUserRequest = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8081/api/requests/${userId}`
    );
    return dispatch(getRequests(data));
  } catch (error) {}
};

export const postNewRequest = (requestObject) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8081/api/requests/`,
      requestObject
    );
    return dispatch(postRequest(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllRequests = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:8081/api/requests/${userId}`
    );
    return dispatch(deleteRequests(data));
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  requests: [],
};

export default function requestsReducer(state = [], action) {
  switch (action.type) {
    case GET_REQUESTS:
      return action.requests;
    case DELETE_REQUESTS:
      return [];
    case POST_REQUEST:
      return [...state, action.requests];
    case UPDATE_CURRENT_REQUEST:
      return action.request;
    default:
      return state;
  }
}
