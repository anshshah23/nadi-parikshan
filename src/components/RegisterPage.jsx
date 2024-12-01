import { useState } from "react";
import { register } from "../services/authService";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const result = await register(username, password);
    alert(result.message);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-teal-500 via-blue-500 to-teal-400">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-teal-600 mb-6">Register</h1>
        <div className="flex flex-col space-y-4">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={handleRegister}
            className="w-full py-2 text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
