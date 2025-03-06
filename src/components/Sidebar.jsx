export default function Sidebar() {
 return (
  <aside className="p-4 overflow-y-auto bg-gray-100 text-black w-64 h-screen flex flex-col items-center">
   <h2 className="text-xl mb-4">ChatGPT-clone</h2>
   <button className="w-full p-2 rounded-lg bg-gray-300 hover:bg-gray-200">New Chat</button>
  </aside>
 );
}