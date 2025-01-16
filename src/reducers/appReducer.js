export const initialState = {
  apodData: null,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    // case-1
    case "getApodData":
      return {
        ...state,
        apodData: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
