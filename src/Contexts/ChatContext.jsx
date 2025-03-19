import { createContext, useState } from "react";
import { getAIResponse } from "../api/chatAPI";

export const ChatContext = createContext();

export function ChatProvider({children}) {
 const [messages,setMessages] = useState([])

 const addMessage = async(text,sender = "user") => {
  setMessages((prev) => [...prev,{text,sender}]);

  if(sender === "user"){
    const aiResponse = await getAIResponse(text);
    setMessages((prev) => [...prev, {text: aiResponse, sender: "AI"}])
  }
 };

 return (
  <ChatContext.Provider value={{messages,addMessage}}>
   {children}
  </ChatContext.Provider>
 )
}