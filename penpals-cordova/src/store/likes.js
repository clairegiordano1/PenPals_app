import axios from "axios";

const GET_LIKE = "GET_LIKE";
const POST_LIKE = "POST_LIKE";
const UPDATE_LIKE = "UPDATE_LIKE";
const DELETE_LIKE = " DELETE_LIKE";
const EDIT_ATTENDANCE = "EDIT_ATTENDANCE";
const GET_ALL_LIKES = "GET_ALL_LIKES";
export const editAttendance = (attendance) => ({
  type: EDIT_ATTENDANCE,
  attendance,
});

export const postLike = (like) => ({
  type: POST_LIKE,
  like,
});

export const getLike = (like) => ({
  type: GET_LIKE,
  like,
});

export const getLikes = (likes) => ({
  type: GET_ALL_LIKES,
  likes,
});
export const updateLike = (like) => ({
  type: UPDATE_LIKE,
  like,
});
export const deleteLike = () => ({
  type: DELETE_LIKE,
});

export const fetchLike = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8081/api/likes/${id}`);
    return dispatch(getLike(data));
  } catch (err) {
    console.error(err);
  }
};
export const fetchAllLikes = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:8081/api/likes/");
    return dispatch(getLikes(data));
  } catch (err) {
    console.error(err);
  }
};
export const fetchUpdateLike = (id, like) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `http://localhost:8081/api/likes/${id}`,
      like
    );
    return dispatch(updateLike(data));
  } catch (err) {
    console.error(err);
  }
};
export const deleteALike = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8081/api/likes/${id}`);
    return dispatch(deleteLike());
  } catch (err) {
    console.error(err);
  }
};

export const editLikeAttendance = (postId, userId, attendance) => async (
  dispatch
) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:8081/api//${postId}/users/${userId}`,
      attendance
    );
    return dispatch(editAttendance(data));
  } catch (error) {
    console.error(error);
  }
};

export const postNewLike = (likeObject) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8081/api/likes/`,
      likeObject
    );
    return dispatch(postLike(data));
  } catch (error) {
    console.log(error);
  }
};

export default function likesReducer(state = {}, action) {
  switch (action.type) {
    case GET_ALL_LIKES:
      return action.likes;

    case GET_LIKE:
      return action.like;
    case UPDATE_LIKE:
      return action.like;
    case DELETE_LIKE:
      return {};
    case EDIT_ATTENDANCE:
      return action.attendance;
    case POST_LIKE:
      return [...state, action.like];
    default:
      return state;
  }
}
