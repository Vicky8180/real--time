// var initialState =[];
// const ChatArray = (state = initialState, action) => {

//     switch (action.type) {

//         case "ADD":

        
//             console.log(action.payload)
        
// const data=action.payload;

//             if (Array.isArray(data)){
//                 state.splice(0, state.length);
//                 for(let i=0;i<data.length;i++){
//                     state.push(data[i]);
//                 }
//             }else {
//                 if(data!==undefined){
//                     console.log(state)
//                     console.log("undefine nhi hai")
//                 state=[...state,data];}
//             }
//             console.log(state);
          
//             return data
    
//     default: return state
//     }

// }
// export default ChatArray



var initialState = [];

const ChatArray = (state = initialState, action) => {
     

    switch (action.type) {

        case "ADD":
            const data = action.payload;
             
            if (Array.isArray(data)) {
                return [...data];
            } else if (data !== undefined) {
                return [...state, data];
            }

            return state; // Return the existing state if data is neither an array nor defined.

        default:
            return state; // Always return a state, even in the default case.
    }
}

export default ChatArray;
