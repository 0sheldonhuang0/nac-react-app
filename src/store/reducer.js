const initialState = {
  content: "Bienvenue à utiliser - https://nac-app.netlify.app",
  userInfo: {
    name: undefined,
    email: undefined,
    uid: undefined,
  },
  successedData: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USERINFO": {
      const newTemp = action.userInfo;
      return {
        ...state,
        userInfo: newTemp,
      };
    }
    case "ADD_CONTENT": {
      const newTemp = action.content;
      return {
        ...state,
        content: newTemp,
      };
    }
    case "ADD_UPLOADSUCCESS": {
      const newTemp = action.successedData;
      return {
        ...state,
        successedData: newTemp,
      };
    }
    default:
      return state; //在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
  }
};

export default reducer;
