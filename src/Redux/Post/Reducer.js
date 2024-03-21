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

const initialValue = {
  createdPost: null,
  usersPost: [],
  deletedPost: null,
  likePost: null,
  unlikePost: null,
  savePost: null,
  unsavePost: null,
  reqUserPost: null,
  singlePost: null,
};

export const PostReducer = (store = initialValue, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_POST:
      return { ...store, createdPost: payload };
    case GET_USER_POST:
      return { ...store, usersPost: payload };
    case DELETE_POST:
      return { ...store, deletedPost: payload };
    case LIKE_POST:
      return { ...store, likePost: payload };
    case UNLIKE_POST:
      return { ...store, unlikePost: payload };
    case SAVE_POST:
      return { ...store, savePost: payload };
    case UNSAVE_POST:
      return { ...store, unsavePost: payload };
    case REQ_USER_POST:
      return { ...store, reqUserPost: payload };
    case GET_SINGLE_POST:
      return { ...store, singlePost: payload };
    default:
      return store;
  }
};
