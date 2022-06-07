import { createStore } from "redux";
interface stateType {
  indexKey: number;
  selectedIndex: number;
}
const ADD = ">";
const SUB = "<";
const START = "<<";
const END = ">>";
const CHANGE_INDEX_KEY = "CHANGE_INDEX_KEY";
const CHANGE_SELECTED_INDEX = "CHANGE_SELECTED_INDEX";
const startIndexKey = (text: string) => {
  return {
    type: START,
    text,
  };
};
const addIndexKey = (text: string) => {
  return {
    type: ADD,
    text,
  };
};
const subIndexKey = (text: string) => {
  return {
    type: SUB,
    text,
  };
};
const changeIndexKey = (text: string, value: number) => {
  return {
    type: CHANGE_INDEX_KEY,
    value,
    text,
  };
};
const changeSelectedIndex = (text: string, value: number) => {
  return {
    type: CHANGE_SELECTED_INDEX,
    value,
    text,
  };
};

const reducer = (
  state: stateType = { indexKey: 0, selectedIndex: 1 },
  action: any
): any => {
  switch (action.type) {
    case ADD: {
      state.indexKey += 1;
      return state;
    }
    case SUB: {
      if (state.indexKey > 0) {
        state.indexKey -= 1;
      }
      return state;
    }
    case START: {
      state.indexKey = 0;
      return state;
    }
    case END: {
      state.indexKey = 10;
      return state;
    }
    case CHANGE_INDEX_KEY: {
      state.indexKey = action.value;
      return state;
    }
    case CHANGE_SELECTED_INDEX: {
      state.selectedIndex = action.value;
      return state;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export const actionCreators = {
  startIndexKey,
  addIndexKey,
  subIndexKey,
  changeIndexKey,
  changeSelectedIndex,
};

export default store;
