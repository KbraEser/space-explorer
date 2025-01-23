export const initialState = {
  apodData: null,
  asteroidsData: null,
  epicImages: null,
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

    // case-3
    case "getEpicImages":
      return {
        ...state,
        epicImages: action.payload,
        error: null,
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
