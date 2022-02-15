import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import activeUsersState from "../../../atoms/activeUsersState";
import currentChatState from "../../../atoms/currentChatState";
import avatar from "../../../img/avatar.png";
import {BiArrowBack} from 'react-icons/bi'
import authState from "../../../atoms/authState";

const MsgNavbar = ({flag,setFlag}) => {
  const currentChat = useRecoilValue(currentChatState);
  const activeUsers = useRecoilValue(activeUsersState);
  const {user}  = useRecoilValue(authState);
  const [status, setStatus] = useState("Offline");
  useEffect(() => {
	  const find = activeUsers?.find(e=> e?.user?._id === currentChat?._id)
	  if(find)setStatus('Online');
	  else setStatus('Offline');
  }, [activeUsers,currentChat,user]);
  return (
    <>
    <div
      className="px-5 hidden sm:flex items-center space-x-3 shadow-md fixed faded-bg h-20 rounded-lg z-10"
      style={{ width: "calc(100vw - 300px - 2*0.75rem + 1px)" }}
    >
      <img
        src={currentChat?.avatar ? currentChat.avatar : avatar}
        alt="avatar"
        className="w-14 h-14 rounded-full cursor-pointer"
      />
      <div className="flex flex-col justify-center">
        <p className="text-lg font-semibold">{currentChat?.name}</p>
        <p>{status}</p>
      </div>
    </div>
    <div
      className="px-5 flex sm:hidden items-center space-x-3 shadow-md fixed faded-bg h-20 rounded-lg z-10"
      style={{ width: "calc(100vw - 2*0.75rem + 1px)" }}
    >
      <div onClick={()=> setFlag(false)} ><BiArrowBack className="text-2xl cursor-pointer"/></div>
      <img
        src={currentChat?.avatar ? currentChat.avatar : avatar}
        alt="avatar"
        className="w-14 h-14 rounded-full cursor-pointer"
      />
      <div className="flex flex-col justify-center">
        <p className="text-lg font-semibold">{currentChat?.name}</p>
        <p>{status}</p>
      </div>
    </div>
    </>
  );
};

export default MsgNavbar;
