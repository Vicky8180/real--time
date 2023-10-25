export const AddtoChatArray=(adding)=>{
    return{
        type:"ADD",
        payload:adding
    }
}
export const ScrollToBottomAction=(functionGetting)=>{
    return{
        type:"ExcecuteFunction",
        payload:functionGetting
    }
}