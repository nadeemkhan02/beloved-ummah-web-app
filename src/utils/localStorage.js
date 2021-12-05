const REDUX_STATE = "state";
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(REDUX_STATE, serializedState);
  } catch (err) {
    //log this
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(REDUX_STATE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
