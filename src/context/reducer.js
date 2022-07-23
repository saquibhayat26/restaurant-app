export const actionType = {
  SET_USER: "SET_USER",
};

export const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

// export default reducer;