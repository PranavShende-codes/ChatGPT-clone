import { useContext, useEffect, useRef, useState } from "react";
import { ChatContext } from "../Contexts/ChatContext.jsx";
import ChatInput from "./ChatInput";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"
export default function ChatWindow() {
  const contextValue = useContext(ChatContext);

  if (!contextValue) {
    return <div>Error: ChatContext is not available!</div>;
  }

  const { messages } = contextValue;
  const chatEndRef = useRef(null);
  const [animatedMsg, setAnimatedMsg] = useState([]);
  const [displayedText, setDisplayedText] = useState("");
  const lastMessage =
    messages.length > 0 ? messages[messages.length - 1] : null;

  useEffect(() => {
    if (!lastMessage || lastMessage.sender !== "AI") return;
    setDisplayedText(""); // Reset before typing
    messages.forEach((msg, index) => {
    });

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < lastMessage.text?.length) {
        setDisplayedText((prev) => prev + lastMessage.text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1); // Adjust speed if needed

    return () => clearInterval(interval);
  }, [lastMessage?.text]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-4 pb-24">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mb-2 p-2 rounded-lg ${
            msg.sender === "user"
              ? " self-end"
              : "bg-gray-200 text-black self-start"
          }`}
        >
          {msg.text ? (
            msg.sender === "AI" && index === messages.length - 1 ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {displayedText ||
                  msg.text}
              </ReactMarkdown>
            ) : (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {msg.text}
              </ReactMarkdown>
            )
          ) : (
            <span>Error: Message text is undefined</span>
          )}
        </div>
      ))}
      <ChatInput />
      <div ref={chatEndRef}></div>
    </div>
  );
}
