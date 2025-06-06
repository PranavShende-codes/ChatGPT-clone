import { useState, useContext } from "react";
import { ChatContext } from "../Contexts/ChatContext.jsx";

export default function ChatInput() {
  const { addMessage } = useContext(ChatContext);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      addMessage(input);
      setInput("");
    }
  };

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-2/5 w-full flex justify-center">
      <div className="w-[90%] max-w-[700px] bg-white shadow-lg px-4 py-2 rounded-2xl flex items-center">
        <input
          type="text"
          placeholder="Ask Anything..."
          className="flex-1 px-3 py-2 border-none focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button
          className="cursor-pointer ml-2 p-2 rounded-full hover:bg-gray-200"
          onClick={sendMessage}
        >
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
