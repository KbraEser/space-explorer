export const initialState = {
  apodData: null,
  asteroidsData: null,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    // case-1
    case "getApodData":
      return {
        ...state,
        apodData: action.payload,
      };

    //   case-2
    case "getAsteroidsData":
      return {
        ...state,
        asteroidsData: action.payload,
      };

    // case Error
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
