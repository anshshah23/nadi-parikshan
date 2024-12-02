import { useEffect, useState } from "react";

const PreviousChats = () => {
    const [chatHistory, setChatHistory] = useState([]);
    useEffect(() => {
        // Load chat history from localStorage
        const savedChats = localStorage.getItem("chatHistory");
        if (savedChats) {
            setChatHistory(JSON.parse(savedChats));
        }
    }, []);

    return (
        <div className="p-4 bg-gray-50 h-[95vh] overflow-y-auto">
            <h1 className="text-2xl font-bold text-center text-teal-600 mb-4">Previous Chats</h1>
            {chatHistory.length > 0 ? (
                <div className="border p-4 bg-white rounded-md">
                    {chatHistory.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-2`}
                        >
                            <div
                                className={`p-2 rounded-lg max-w-xs ${
                                    message.sender === "user" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-900"
                                }`}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No previous chats found.</p>
            )}
        </div>
    );
};

export default PreviousChats;
