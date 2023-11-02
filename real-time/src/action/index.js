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
export const Admin=(data)=>{
    return {
        type:"AdminDetails",
        payload:data
    }
}

export  const ChatList=(data)=>{

    return {
        type:"chatlist",
        payload:data
    }
}

export const SelectedChat=(data)=>{

    return {
        type:"selectedchat",
        payload:data
    }
}

export const Friends=(data)=>{

    return {
        type:"friends",
        payload:data
    }
}

export const OnlineUsers=(data)=>{

    return {
        type:"onlineusers",
        payload:data
    }
}

export const NotificationState=(data)=>{

    return {
        type:"notificationstate",
        payload:data,
    }
}