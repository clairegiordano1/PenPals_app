import axios from "axios";

const GET_SINGLE_POST = "GET_SINGLE_POST";
const UPDATE_POST = "UPDATE_POST";
const DELETE_POST = "DELETE_POST";

export const getSinglePost = (post) => ({
  type: GET_SINGLE_POST,
  post,
});
export const updatePost = (post) => ({
  type: UPDATE_POST,
  post,
});
export const deleteAPost = () => ({
  type: DELETE_POST,
});

export const fetchSinglePost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8081/api/posts/${id}`);
    return dispatch(getSinglePost(data));
  } catch (err) {
    console.error(err);
  }
};
export const fetchUpdatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `http://localhost:8081/api/posts/${id}`,
      post
    );
    return dispatch(updatePost(data));
  } catch (err) {
    console.error(err);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8081/api/posts/${id}`);
    return dispatch(deleteAPost());
  } catch (err) {
    console.error(err);
  }
};

export default function singlePostReducer(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_POST:
      return action.post;
    case UPDATE_POST:
      return action.post;
    case DELETE_POST:
      return {};
    default:
      return state;
  }
}
