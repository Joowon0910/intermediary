import { createStore } from "redux";
const DEFAULT_PAGE_STATE = 0;
const MY_PAGE_STATE = 1;
const DEFAULT_PAGE = "DEFAULT_PAGE";
const MY_PAGE = "MY_PAGE";
const changeToDefaultPage = (text: string) => {
  return {
    type: DEFAULT_PAGE,
    text,
  };
};
const changeToMyPage = (text: string) => {
  return {
    type: MY_PAGE,
    text,
  };
};
const reducer = (state: number = 0, action: any): any => {
  switch (action.type) {
    case DEFAULT_PAGE: {
      state = DEFAULT_PAGE_STATE;
      return state;
    }
    case MY_PAGE: {
      state = MY_PAGE_STATE;
      return state;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export const actionCreators = {
  changeToDefaultPage,
  changeToMyPage,
};

export default store;
