import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const flights = [
    { id: 1, from: "Delhi", to: "Mumbai", time: "10:00 AM", price: 4500 },
    { id: 2, from: "Chennai", to: "Bangalore", time: "11:30 AM", price: 3200 },
    { id: 3, from: "Hyderabad", to: "Kolkata", time: "1:45 PM", price: 5100 },
    { id: 4, from: "Pune", to: "Goa", time: "3:00 PM", price: 2900 },
    { id: 5, from: "Ahmedabad", to: "Jaipur", time: "5:15 PM", price: 3500 },
    { id: 6, from: "Delhi", to: "Bangalore", time: "6:30 PM", price: 4900 },
    { id: 7, from: "Mumbai", to: "Chennai", time: "7:45 PM", price: 5300 },
    { id: 8, from: "Lucknow", to: "Patna", time: "8:15 PM", price: 3000 },
    { id: 9, from: "Kochi", to: "Trivandrum", time: "9:00 PM", price: 2600 },
    { id: 10, from: "Surat", to: "Nagpur", time: "9:45 PM", price: 2700 }
  ];

  let pageContent;

  if (isLoggedIn) {
    pageContent = (
      <div>
        <h2>Welcome, User!</h2>
        <p>You can now book your flight tickets.</p>
        <button onClick={handleLogout}>Logout</button>

        <div
          style={{
            maxHeight: "300px",
            overflowY: "scroll",
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px"
          }}
        >
          <h3>Available Flights:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {flights.map((flight) => (
              <li
                key={flight.id}
                style={{
                  borderBottom: "1px solid #eee",
                  padding: "10px 0"
                }}
              >
                ✈️ {flight.from} → {flight.to} | 🕒 {flight.time} | 💰 ₹
                {flight.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    pageContent = (
      <div>
        <h2>Welcome, Guest!</h2>
        <p>Browse available flight options below.</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>✈️ Ticket Booking App</h1>
      {pageContent}
    </div>
  );
}

export default App;
