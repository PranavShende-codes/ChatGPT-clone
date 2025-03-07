export default function ChatInput() {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white ">
      <div className="flex items-center rounded-2xl px-4 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Ask Anything..."
          className="flex-1 px-3 py-2 border-none focus:outline-none"
        />
        <button className="cursor-pointer ml-2 p-2 rounded-full hover:bg-gray-500">
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
