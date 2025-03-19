import { useState,useContext } from "react";
import {ChatContext} from "../Contexts/ChatContext.jsx"

export default function ChatInput() {
  const { addMessage } = useContext(ChatContext);
  const [input,setInput] = useState("");
  const sendMessage =async () => {
    if(input.trim()){
      await addMessage(input,"user");
      setInput("");
    }
  } 
  return (
    <div className="p-4 bg-white flex justify-center">
      <div className="flex items-center rounded-2xl px-4 py-3 shadow-lg w-2xl shadow-gray-300">
        <input
          type="text"
          placeholder="Ask Anything..."
          className="flex-1 px-3 py-2 border-none focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === "Enter"){
              e.preventDefault()
              sendMessage()
            }
          }}
        />
        <button className="cursor-pointer ml-2 p-2 rounded-full hover:bg-gray-500"
        onClick = {sendMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
