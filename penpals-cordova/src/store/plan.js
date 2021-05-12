import axios from "axios";

const GET_PLANS = "GET_PLANS";
const POST_PLAN = "POST_PLAN";
const DELETE_PLAN = "DELETE_PLAN";
const EDIT_ATTENDANCE = "EDIT_ATTENDANCE";

export const getPlans = (plans) => {
  return {
    type: GET_PLANS,
    plans,
  };
};

export const postPlan = (plan) => ({
  type: POST_PLAN,
  plan,
});

export const editAttendance = (attendance) => ({
  type: EDIT_ATTENDANCE,
  attendance,
});

export const deletePlan = () => ({
  type: DELETE_PLAN,
});

export const getAllPlans = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`http://localhost:8081/api/plans/${id}`);
    return dispatch(getPlans(data));
  } catch (error) {}
};

export const postNewPlan = (PlanObject) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `http://localhost:8081/api/plans/`,
      PlanObject
    );
    return dispatch(postPlan(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllPlans = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:8081/api/plans/${userId}`
    );
    return dispatch(deletePlan(data));
  } catch (error) {
    console.log(error);
  }
};
export const editPlanAttendance = (postId, userId, attendance) => async (
  dispatch
) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:8081/api/posts/${postId}/users/${userId}`,
      attendance
    );
    return dispatch(editAttendance(data));
  } catch (error) {
    console.error(error);
  }
};

export default function planReducer(state = [], action) {
  switch (action.type) {
    case GET_PLANS:
      return action.plans;
    case DELETE_PLAN:
      return [];
    case POST_PLAN:
      return [...state, action.plan];
    case EDIT_ATTENDANCE:
      return action.attendance;
    default:
      return state;
  }
}
