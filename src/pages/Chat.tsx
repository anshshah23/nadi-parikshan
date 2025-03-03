import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatbotPage: React.FC = () => {
    const [messages, setMessages] = useState<{ sender: "user" | "bot"; text: string }[]>([]);
    const [input, setInput] = useState("");
    const [nadiType, setNadiType] = useState("");
    const [gender, setGender] = useState("");
    const [ageGroup, setAgeGroup] = useState("");
    const [recommendations, setRecommendations] = useState<string | null>(null);

    // Load chat history on component mount
    useEffect(() => {
        const savedChats = localStorage.getItem("chatHistory");
        if (savedChats) {
            setMessages(JSON.parse(savedChats));
        }
    }, []);

    // Save chat history whenever messages change
    useEffect(() => {
        localStorage.setItem("chatHistory", JSON.stringify(messages));
    }, [messages]);

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user" as const, text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        try {
            const response = await fetch("https://chatbot-5mne.onrender.com/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();
            const botMessage = { sender: "bot" as const, text: data.response };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error fetching chatbot response:", error);
            setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong. Please try again." }]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSendMessage();
    };

    const fetchRecommendations = async () => {
        if (!nadiType || !gender || !ageGroup) {
            alert("Please select all options.");
            return;
        }

        try {
            const response = await fetch("https://chatbot-5mne.onrender.com/api/nadi_recommendations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nadi: nadiType, gender, age: ageGroup }),
            });

            const data = await response.json();
            console.log("Recommendations:", data);
            setRecommendations(`
                <h3>Personalized Recommendations</h3>
                <p><strong>General:</strong> ${data.general}</p>
                <p><strong>Diet - Preferred:</strong> ${data.diet.preferred}</p>
                <p><strong>Diet - Avoid:</strong> ${data.diet.avoid}</p>
                <p><strong>Exercise:</strong> ${data.exercise}</p>
                <p><strong>Common Diseases:</strong> ${data.common_diseases}</p>
                <p><strong>Remedies:</strong> ${data.remedies}</p>
            `);
        } catch (error) {
            console.error("Error fetching recommendations:", error);
        }
    };

    return (
        <div className="flex flex-col h-[95vh] md:h-screen bg-gray-50">
            <div className="flex-grow overflow-y-auto p-4">
                <h1 className="text-2xl font-bold text-center text-teal-600 mb-4">Nadi Parikshan & AI Chatbot</h1>

                {/* Chatbot Section */}
                <h2 className="text-xl font-semibold text-teal-500 mb-2">Chatbot</h2>
                <div className="border p-4 bg-gray-100 rounded-md mb-4 h-[200px] overflow-y-auto">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-2`}
                        >
                            <div
                                className={`p-2 rounded-lg max-w-xs ${
                                    message.sender === "user" ? "bg-teal-600 text-white" : "bg-white text-gray-900"
                                }`}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 p-2 border rounded-lg mr-2"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-teal-600 text-white p-2 rounded-lg"
                        title="Send Message"
                        aria-label="Send Message"
                    >
                        <FaPaperPlane />
                    </button>
                </div>

                {/* Nadi Parikshan Section */}
                <h2 className="text-xl font-semibold text-teal-500 mt-6 mb-2">Nadi Parikshan</h2>
                <div className="mb-4">
                    <select
                        id="nadiType"
                        value={nadiType}
                        onChange={(e) => setNadiType(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-2"
                    >
                        <option value="" disabled>Select your dominant Nadi</option>
                        <option value="vata">Vata</option>
                        <option value="pitta">Pitta</option>
                        <option value="kapha">Kapha</option>
                        <option value="tridosha">Tridosha</option>
                    </select>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-2"
                    >
                        <option value="" disabled>Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <select
                        id="ageGroup"
                        value={ageGroup}
                        onChange={(e) => setAgeGroup(e.target.value)}
                        className="w-full p-2 border rounded-lg"
                    >
                        <option value="" disabled>Select your age group</option>
                        <option value="child">Child</option>
                        <option value="adult">Adult</option>
                        <option value="elderly">Elderly</option>
                    </select>
                </div>
                <button
                    onClick={fetchRecommendations}
                    className="w-full bg-teal-600 text-white p-2 rounded-lg"
                >
                    Get Recommendations
                </button>
                {recommendations && (
                    <div
                        className="mt-4 p-4 border rounded-lg bg-gray-100"
                        dangerouslySetInnerHTML={{ __html: recommendations }}
                    />
                )}
            </div>
        </div>
    );
};

export default ChatbotPage;
