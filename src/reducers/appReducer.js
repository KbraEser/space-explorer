export const initialState = {};

export const appReducer = (state, action) => {
  switch (action.type) {
    // case-1
    case "getApotData":
      return {
        ...state,
        apodData: action.payload,
      };
  }
};

export default appReducer;
