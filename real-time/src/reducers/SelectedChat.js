var initialState=[{checkerBool:false}];

const SelectedChat=(state=initialState,action)=>{

      switch(action.type){


        case "selectedchat":{

    const temp=action.payload.user

    state[0]={user:temp,checkerBool:true}
   console.log(state[0]);
        return state;

        } 
        default : return initialState;
      }

}

export default SelectedChat