const initialState=[];

const Friends=(state=initialState,action)=>{



    switch(action.type){


        case "friends":{

   

            return action.payload
        } 

        default: return state;
    }

}

export default Friends