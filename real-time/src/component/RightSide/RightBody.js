import React ,{useEffect ,useRef} from 'react'
import "./RightSideStyle.css"
import Chat from "./Chat"
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { ScrollToBottomAction } from '../../action/index'
import io from 'socket.io-client';
const receiverSocket = io('http://localhost:3003');
export default function RightBody() {

  const data2=useSelector((state)=>state.ChatArray)
  // console.log(data2)
  const dispatch= useDispatch();
  const bottomRef = useRef();
  const scrollToBottom = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // useEffect(()=>{
    dispatch(ScrollToBottomAction(scrollToBottom))
  // },[])
// console.log("upr")
  // useEffect(() => {
   
  //   receiverSocket.on('chat message', (message) => {
  // console.log(message)
    
  //   });

  //   return () => {
  //     receiverSocket.disconnect();
  //   };
  // }, []);




  return (
    <div className='RB-1'>
    
        {data2.map((i)=>
            <Chat text={i.text} fromSender={i.fromSender}/> 
        )
        
        }
        <div ref={bottomRef}></div>


  

    </div>
  )
}
