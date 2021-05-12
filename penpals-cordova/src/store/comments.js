import axios from "axios";

const GET_COMMENTS = "GET_COMMENTS ";

export const get_all_comments = (comments) => {
  return {
    type: GET_COMMENTS,
    comments,
  };
};

export const getComments = (postId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8081/api/posts/${postId}/comments`
    );
    return dispatch(get_all_comments(data));
  } catch (error) {
    console.log(error);
  }
};

export default function commentsReducer(state = {}, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments;
    default:
      return state;
  }
}
