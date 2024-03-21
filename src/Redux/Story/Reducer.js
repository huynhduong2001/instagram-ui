import { FETCH_FOLLOWING_USER_STORY, FETCH_USER_STORY } from "./ActionType";

const initialValues = {
  stories: null,
};
export const StoryReducer = (store = initialValues, { type, payload }) => {
  switch (type) {
    case FETCH_FOLLOWING_USER_STORY:
      return { ...store, stories: payload };
    case FETCH_USER_STORY:
      return { ...store, stories: payload };
    default:
      return store;
  }
};
