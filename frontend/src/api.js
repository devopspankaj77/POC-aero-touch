import axios from "axios";

// backend service URL
const API_URL = process.env.REACT_APP_API_URL || "http://192.168.49.2:30081";

export async function getMessage() {
  const response = await axios.get(`${API_URL}/api/message`);
  return response.data.message;
}
