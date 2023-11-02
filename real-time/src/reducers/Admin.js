const initialState=[];

const Admin=(state=initialState, action)=>{

switch(action.type){
    case"AdminDetails":{
      
        const temp=action.payload
        
        return [...state,temp]

    }
    default: return state;
}

}

export default Admin;