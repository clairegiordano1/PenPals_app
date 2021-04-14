import axios from "axios";

const GET_POSTS = "GET_POSTS";
const POST_NEW_POST = "POST_NEW_POST";

export const getPosts = (posts) => ({
  type: GET_POSTS,
  posts,
});

export const postPost = (post) => ({
  type: POST_NEW_POST,
  post,
});

export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8081/api/posts`);
    return dispatch(getPosts(data));
  } catch (err) {
    console.error(err);
  }
};

export const getUserPosts = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:8081/api/posts/${userId}`
    );
    return dispatch(getPosts(data));
  } catch (error) {}
};

export const postNewPost = (addPostForm) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8081/api/posts`,
      addPostForm
    );
    return dispatch(postPost(data));
  } catch (error) {
    console.log(error);
  }
};

export default function postsReducer(state = [], action) {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    case POST_NEW_POST:
      return [...state, action.post];
    default:
      return state;
  }
}
