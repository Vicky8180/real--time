const initialState = [];

const OnlineUsers = (state = initialState, action) => {
  switch (action.type) {
    case "onlineusers": {
      console.log(action.payload);

      return action.payload;
    }

    default:
      return state;
  }
};

export default OnlineUsers;
