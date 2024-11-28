import React, { useState } from "react";
import { ChatBubbleIcon, PersonIcon } from "@radix-ui/react-icons";
import { FaPaperPlane } from "react-icons/fa";

const ChatbotPage: React.FC = () => {
    const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (!input.trim()) return;

        const userMessage: { sender: "user"; text: string } = { sender: "user", text: input };
        const botMessage: { sender: "bot"; text: string } = { sender: "bot", text: "Hello! How can I assist you today?" }; // Mock bot response

        setMessages([...messages, userMessage, botMessage]);
        setInput("");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSendMessage();
    };

    return (
        <div className="flex flex-col h-[95vh] md:h-screen overflow-y-auto mt-[5vh] md:mt-0 bg-gray-50">
            {/* Header */}
            <div className="hidden md:flex items-center justify-between px-4 py-4 md:py-2 text-teal-500">
                <div className="flex items-center space-x-2">
                    <ChatBubbleIcon className="w-6 h-6 z-100" />
                </div>
            </div>
            {/* Chat Area */}
            <div className="flex-grow overflow-y-auto pt-6 p-4 space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div className="flex items-start space-x-3 max-w-lg">
                            {message.sender === "bot" && (
                                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-400 text-white">
                                    <ChatBubbleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                            )}
                            <div
                                className={`px-3 py-2 sm:px-4 sm:py-3 flex-grow min-h-min rounded-lg shadow-md ${message.sender === "user"
                                        ? "bg-teal-600 text-white"
                                        : "bg-white text-gray-900 border border-gray-200"
                                    } text-xs sm:text-sm md:text-base break-words max-w-full w-full`}
                            >
                                {message.text}
                            </div>
                            {message.sender === "user" && (
                                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-500 text-white">
                                    <PersonIcon className="w-3 h-3 sm:w-6 sm:h-6" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>


            {/* Input Section */}
            <div className="flex items-center px-1 md:px-4 py-3 bg-white border-t border-gray-300 shadow-md space-x-1 md:space-x-3">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 px-2 md:px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-full hover:bg-teal-500 transition"
                    title="Send Message"
                    aria-label="Send Message"
                >
                    <FaPaperPlane />
                </button>
            </div>
        </div>
    );
};

export default ChatbotPage;
