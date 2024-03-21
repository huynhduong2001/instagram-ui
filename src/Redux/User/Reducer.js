import {
  FOLLOW_USER,
  GET_USERS_BY_USER_IDS,
  GET_USER_BY_USERNAME,
  POPULAR_USER,
  REQ_USER,
  SEARCH_USER,
  UNFOLLOW_USER,
  UPDATE_USER,
} from "./ActionType";

const initialValue = {
  reqUser: null,
  findByUsername: null,
  findUserByIds: [],
  followUser: null,
  unfollowUser: null,
  searchUser: [],
  updateUser: null,
  popular: [],
};

export const UserReducer = (store = initialValue, { type, payload }) => {
  switch (type) {
    case REQ_USER:
      return { ...store, reqUser: payload };
    case GET_USER_BY_USERNAME:
      return { ...store, findByUsername: payload };
    case GET_USERS_BY_USER_IDS:
      return { ...store, findUserByIds: payload };
    case FOLLOW_USER:
      return { ...store, followUser: payload };
    case UNFOLLOW_USER:
      return { ...store, unfollowUser: payload };
    case SEARCH_USER:
      return { ...store, searchUser: payload };
    case UPDATE_USER:
      return { ...store, updateUser: payload };
    case POPULAR_USER:
      return { ...store, popular: payload };
    default:
      return store;
  }
};
