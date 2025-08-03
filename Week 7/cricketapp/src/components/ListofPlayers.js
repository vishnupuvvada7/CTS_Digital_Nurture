
import React from "react";

const players = [
  { name: "Virat", score: 85 },
  { name: "Rohit", score: 60 },
  { name: "Gill", score: 90 },
  { name: "Kohli", score: 45 },
  { name: "Pant", score: 75 },
  { name: "Rahul", score: 30 },
  { name: "Hardik", score: 82 },
  { name: "Jadeja", score: 70 },
  { name: "Ashwin", score: 55 },
  { name: "Bumrah", score: 65 },
  { name: "Shami", score: 80 },
];

function ListofPlayers() {
  const topScorers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h3>Players with score ≥ 70</h3>
      <ul>
        {topScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
