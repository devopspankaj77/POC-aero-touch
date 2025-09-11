import React, { useEffect, useState } from "react";
import { getMessage } from "./api";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    getMessage().then((res) => setMessage(res)).catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Three-Tier Microservices Project created by Pankaj Kumar Tiwari</h1>
      <h2>Frontend (React) connected to Backend (Node.js)</h2>
      <p><b>Backend says:</b> {message}</p>
    </div>
  );
}

export default App;
