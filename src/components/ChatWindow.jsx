import { useContext } from "react";
import { ChatContext } from "../Contexts/ChatContext.jsx";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  const contextValue = useContext(ChatContext); 

  if (!contextValue) {
    return <div>Error: ChatContext is not available!</div>; 
  }

  const { messages } = contextValue;

  return (
    <div className="flex-1 overflow-y-auto bg-white p-6 relative w-full">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg ${
            msg.sender === "user" ? " self-end" : "bg-gray-200 text-black"
          }`}
        >
          {msg.text}
        </div>
      ))}
      <div className="fixed bottom-0 right-0 left-1/5  ">
        <ChatInput />
      </div>
    </div>
  );
}
