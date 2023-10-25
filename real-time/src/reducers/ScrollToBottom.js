var initialState = [];
const ScrollToBottom = (state = initialState, action) => {

    switch (action.type) {

        case "ExcecuteFunction":
        action.payload();
        // console.log(action.payload)
        return state;
    
    default: return state
    }

}
export default ScrollToBottom