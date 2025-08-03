import React from "react";

function App() {
  const offices = [
    {
      name: "Orchid Workspace",
      rent: 55000,
      address: "MG Road, Bangalore",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    },
    {
      name: "TechHub Suites",
      rent: 75000,
      address: "Hinjewadi, Pune",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    {
      name: "WorkNest",
      rent: 60000,
      address: "Cyber City, Gurugram",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be"
    }
  ];



  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>Office Space Rental Listings</h1>

      {offices.map((office, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "15px",
            borderRadius: "8px"
          }}
        >
          <img
            src={office.image}
            alt={office.name}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <h2>{office.name}</h2>
          <p>{office.address}</p>
          <p
            style={{
              color: office.rent > 60000 ? "green" : "red",
              fontWeight: "bold"
            }}
          >
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
