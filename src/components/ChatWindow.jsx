import ChatInput from "./ChatInput";
export default function ChatWindow() {
 return (
  <div className="flex-1 overflow-y-auto bg-white h-full p-6 relative">
   <p>hello Chat</p>
   <ChatInput />
  </div>
 );
}