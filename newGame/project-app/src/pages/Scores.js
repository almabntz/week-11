import React from 'react';
import { useState, useEffect } from "react";
import Form from './Form'

function Players() {
	const [players, setPlayers] = useState([])


	// useEffect(() => {
	// 	fetch("http://localhost:3000/api/scores")
	// 	  .then((response) => response.json())
	// 	  .then((players) => {
	// 			setPlayers(players);
	// 		  });
	//   }, []);
	
	  const addPlayer = (newPlayer) => {
		//console.log(newPlayer);
		//postPlayer(newPlayer);
		setPlayers((players) => [...players, newPlayer]);
	  };
	


//new code
  //fetching DB data 
  // client/src/components/Users.jsx
  const getPlayers = async () => {
	const response = await fetch('http://localhost:3000/players');
	const players = await response.json();
	setPlayers(players);
  };
  
  useEffect(() => {
	getPlayers();
  }, []);



	return (
		
		<div className="players">
			<h1>Route scores here</h1>
		<h2> List of Players</h2>
		<ul>
		  {players.map((players) => (
			<li key={players.name}>
			  {" "}
			  {players.name} {players.score}
			</li>
		  ))}
		</ul>
		<Form addPlayer={addPlayer} />
	  </div>
	  
	);
}




// TO DO
/* I need to create a form where a new user can enter their info
I also need to find a way to make that user name option to be a drop down in the info component 
this way returning players can enter themselves.*/

export default Players;