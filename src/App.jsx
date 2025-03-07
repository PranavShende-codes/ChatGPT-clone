import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatWindow />  
    </div>
  );
}

export default App
