import React, { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      <h1>Three-Tier Microservices Demo</h1>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
