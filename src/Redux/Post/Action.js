import {
  CREATE_NEW_POST,
  DELETE_POST,
  GET_SINGLE_POST,
  GET_USER_POST,
  LIKE_POST,
  REQ_USER_POST,
  SAVE_POST,
  UNLIKE_POST,
  UNSAVE_POST,
} from "./ActionType";

const BASE_URL = "http://localhost:5454/api";

export const createPostAction = (data) => async (dispatch) => {
  try {
    console.log(data);
    const res = await fetch(`${BASE_URL}/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
      body: JSON.stringify(data.data),
    });
    const post = await res.json();
    console.log("create post ", post);
    dispatch({ type: CREATE_NEW_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const findPostUserAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/following/${data.userIds}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
    });
    const post = await res.json();
    console.log("find post by userids ", post);
    dispatch({ type: GET_USER_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const reqUserPostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/all/${data.userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
    });
    const post = await res.json();
    console.log("req user post ", post);
    dispatch({ type: REQ_USER_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const likePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/like/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
    });
    const post = await res.json();
    console.log("liked post ", post);
    dispatch({ type: LIKE_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const unlikePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/unlike/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
    });
    const post = await res.json();
    console.log("unliked post ", post);
    dispatch({ type: UNLIKE_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const deletePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/delete/${data.postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
    });
    const post = await res.json();
    console.log("deleted post ", post);
    dispatch({ type: DELETE_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const savePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/save_post/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
    });
    const post = await res.json();
    console.log("saved post ", post);
    dispatch({ type: SAVE_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const unsavePostAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/unsave_post/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
    });
    const post = await res.json();
    console.log("unsaved post ", post);
    dispatch({ type: UNSAVE_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};

export const findPostByIdAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_URL}/posts/${data.postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.jwt}`,
      },
    });
    const post = await res.json();
    console.log("get single post ", post);
    dispatch({ type: GET_SINGLE_POST, payload: post });
  } catch (error) {
    console.log(error);
  }
};
