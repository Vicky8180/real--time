var initialState = [];
const ChatArray = (state = initialState, action) => {

    switch (action.type) {

        case "ADD":

            const text=action.payload.userChat;
            const fromSender=action.payload.fromSender
            // console.log(action.payload.userChat)
            // console.log(...state,{userChat,fromSender});
            const temp=[...state,{text,fromSender}]
            console.log(temp)
            return temp
    
    default: return state
    }

}
export default ChatArray
