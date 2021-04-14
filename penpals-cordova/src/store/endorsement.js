import axios from "axios";

const GET_ENDORSEMENTS = "GET_ENDORSEMENTS";
const POST_ENDORSEMENTS = "POST_ENDORSEMENTS";
const DELETE_ENDORSEMENTS = "DELETE_ENDORSEMENTS";
const UPDATE_CURRENT_ENDORSEMENT = "UPDATE_CURRENT_ENDORSEMENT";
export const getEndorsements = (endorsements) => {
  return {
    type: GET_ENDORSEMENTS,
    endorsements,
  };
};
const updateCurrentEndorsement = (endorsement) => ({
  type: UPDATE_CURRENT_ENDORSEMENT,
  endorsement,
});

export const postEndorsement = (endorsements) => ({
  type: POST_ENDORSEMENTS,
  endorsements,
});

export const deleteRequests = () => ({
  type: DELETE_ENDORSEMENTS,
});

export const updateEndorsement = (id, body) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `http://localhost:8081/api/endorsements/${id}`,
      body
    );
    return dispatch(updateCurrentEndorsement(data));
  } catch (error) {
    console.error(error);
  }
};
export const getAllEndorsements = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:8081/api/endorsements/");
    return dispatch(getEndorsements(data));
  } catch (error) {}
};
export const getCurrentEndorsement = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8081/api/endorsements/${userId}`
    );
    return dispatch(getEndorsements(data));
  } catch (error) {}
};

export const postNewEndorsement = (EndorsementObject) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8081/api/endorsements/`,
      EndorsementObject
    );
    return dispatch(postEndorsement(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllEndorsements = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:8081/api/endorsements/${userId}`
    );
    return dispatch(deleteEndorsements(data));
  } catch (error) {
    console.log(error);
  }
};

const initialState = {
  endorsements: [],
};

export default function endorsementsReducer(state = [], action) {
  switch (action.type) {
    case GET_ENDORSEMENTS:
      return action.endorsements;
    case DELETE_ENDORSEMENTS:
      return [];
    case POST_ENDORSEMENTS:
      return [...state, action.endorsements];
    case UPDATE_CURRENT_ENDORSEMENT:
      return action.endorsement;
    default:
      return state;
  }
}
