import axios from "axios";

// backend service URL (Kubernetes me service name use hoga: http://backend:3000)
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

export async function getMessage() {
  const response = await axios.get(`${API_URL}/api/message`);
  return response.data.message;
}
