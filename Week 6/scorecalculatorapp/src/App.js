import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Vishnu"
        School="DNV Public School"
        total={490}
        goal={5}
      />
    </div>
  );
}

export default App;
