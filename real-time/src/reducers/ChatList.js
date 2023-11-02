 
 var initialState2=[];


 const ChatList=(state = initialState2,action)=>{

    switch(action.type){

        case"chatlist":{

        const temp=action.payload
    
        // function areObjectsEqual(obj1, obj2) {
        //     return JSON.stringify(obj1) === JSON.stringify(obj2);
        // }

        // function addObjectIfNotExists(arr, obj) {
            
        //     if (!arr.some(item => areObjectsEqual(item, obj))) {
        //         arr.push(obj); 
        //     }
        // }
        //   addObjectIfNotExists(state,temp)

//   console.log(state)
            return temp;

        }
        default: return state;

    }
 }


 export default ChatList;