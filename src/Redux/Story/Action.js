import { FETCH_FOLLOWING_USER_STORY, FETCH_USER_STORY } from "./ActionType";
const BASE_URL = "http://localhost:5454/api";

export const findFollowingUserStory = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/stories/${data.userIds}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data.data),
    });
    const stories = await res.json();
    console.log(stories);
    dispatch({ type: FETCH_FOLLOWING_USER_STORY, payload: stories });
  } catch (error) {
    console.log(error);
  }
};

export const findStoryById = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/stories/${data.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data.data),
    });
    const stories = await res.json();
    console.log("stories", stories);
    dispatch({ type: FETCH_USER_STORY, payload: stories });
  } catch (error) {
    console.log(error);
  }
};
