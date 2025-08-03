
import React from "react";

const allPlayers = ["Kohli", "Rohit", "Gill", "Pant", "Rahul", "Hardik"];

const T20players = ["Kohli", "Rohit", "Pant"];
const RanjiTrophy = ["Pujara", "Rahane", "Iyer"];
const mergedPlayers = [...T20players, ...RanjiTrophy]; // ES6 spread operator

function IndianPlayers() {
  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Odd Index Players</h2>
      <ul>{oddPlayers.map((name, idx) => <li key={idx}>{name}</li>)}</ul>

      <h2>Even Index Players</h2>
      <ul>{evenPlayers.map((name, idx) => <li key={idx}>{name}</li>)}</ul>

      <h2>Merged Team (T20 + Ranji)</h2>
      <ul>{mergedPlayers.map((name, idx) => <li key={idx}>{name}</li>)}</ul>
    </div>
  );
}

export default IndianPlayers;
