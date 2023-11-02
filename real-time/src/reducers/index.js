
 import {combineReducers} from "redux"
import ChatArray from "./ChatArray";
import ScrollToBottom from "./ScrollToBottom";
import Admin from "./Admin";
import ChatList from "./ChatList";
import SelectedChat from "./SelectedChat";
import Friends from "./Friends";
import  OnlineUsers  from "./OnlineUsers";
import NotificationState from "./NotificationStore";
 const rootReducer=combineReducers({
  ChatArray
  ,ChatList
  ,SelectedChat,
  Admin,
  OnlineUsers,
  NotificationState,
  Friends,
  ScrollToBottom
 });

 export default rootReducer;