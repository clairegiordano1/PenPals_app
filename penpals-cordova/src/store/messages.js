import axios from "axios";

const GET_MESSAGES = "GET_MESSAGES";

export const get_all_messsages = (messages) => {
  return {
    type: GET_MESSAGES,
    messages,
  };
};

export const getMesssages = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8081/api/posts/${postId}/messages`
    );
    return dispatch(get_all_messsages(data));
  } catch (error) {
    console.log(error);
  }
};

export default function messagesReducer(state = {}, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.messages;
    default:
      return state;
  }
}
