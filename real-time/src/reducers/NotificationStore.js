// const initialstate=[];

// const NotificationState=(state=initialstate,action)=>{


//     switch(action.type){

//       case"notificationstate":
//       {
//          console.log("1")
//          console.log(state)
//          let temp=0;
//         if(action.payload===1){
//             console.log("2")
//             state[0]=state[0]+1;
//         }else {
//             console.log("3")
//    state[0]=0;
//         }
//         console.log(state)

//         return state 
//       }
//       default: return state;
//     } 

// }

// export default NotificationState


const initialState = []; // Set the initial state to 0

const NotificationState = (state = initialState, action) => {
  switch (action.type) {
    case "notificationstate":
      if (action.payload !== 0) {
        // Increment the state by 1
      
        return [...state,action.payload];
      } else {
        // Set the state to 0
        return 0;
      } 
    default:
      return state;
  }
};

export default NotificationState;
