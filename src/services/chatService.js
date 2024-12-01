const API_URL = "http://localhost:5000/chat";

export const sendMessage = async (token, text) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ text }),
  });
  return response.json();
};
