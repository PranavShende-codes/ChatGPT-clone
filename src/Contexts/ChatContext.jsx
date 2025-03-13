import { createContext, useState } from "react";

export const ChatContext = createContext();

export function ChatProvider({children}) {
 const [messages,setMessages] = useState([])

 const addMessage = (text,sender = "user") => {
  setMessages((prev) => [...prev,{text,sender}]);
 };

 return (
  <ChatContext.Provider value={{messages,addMessage}}>
   {children}
  </ChatContext.Provider>
 )
}