import { useContext } from "react";
import { ChatContext } from "../Contexts/ChatContext.jsx";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  const contextValue = useContext(ChatContext); // ✅ Check if context is available
  console.log("ChatContext Value:", contextValue); // ✅ Debugging

  if (!contextValue) {
    return <div>Error: ChatContext is not available!</div>; // Show error if context is missing
  }

  const { messages } = contextValue; // ✅ Destructuring after checking

  return (
    <div className="flex-1 overflow-y-auto bg-white h-full p-6 relative">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`p-3 rounded-lg ${
            msg.sender === "user"
              ? " self-end"
              : "bg-gray-200 text-black"
          }`}
        >
          {msg.text}
        </div>
      ))}
      <ChatInput />
    </div>
  );
}
