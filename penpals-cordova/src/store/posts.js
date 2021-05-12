import axios from "axios";

const GET_POSTS = "GET_POSTS";
const POST_NEW_POST = "POST_NEW_POST";
const CREATE_MESSAGE = "CREATE_MESSAGE";
const CREATE_COMMENT = "CREATE_COMMENT";

export const getPosts = (posts) => ({
  type: GET_POSTS,
  posts,
});

export const postPost = (post) => ({
  type: POST_NEW_POST,
  post,
});

export const create_new_messsage = (message) => {
  return {
    type: CREATE_MESSAGE,
    message,
  };
};

export const create_new_comment = (comment) => {
  return {
    type: CREATE_COMMENT,
    comment,
  };
};

export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8081/api/posts`);
    return dispatch(getPosts(data));
  } catch (err) {
    console.error(err);
  }
};

export const createMesssage = (id, message) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8081/api/posts/${id}/messages`,
      message
    );
    return dispatch(create_new_messsage(data));
  } catch (error) {
    console.log(error);
  }
};

export const createComment = (id, comment) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8081/api/posts/${id}/comments`,
      comment
    );
    return dispatch(create_new_comment(data));
  } catch (error) {
    console.log(error);
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
    case CREATE_MESSAGE:
      return [...state, action.message];
    case CREATE_COMMENT:
      return [...state, action.comment];
    default:
      return state;
  }
}
