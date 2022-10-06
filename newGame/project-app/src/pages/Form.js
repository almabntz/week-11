import { useState } from "react";

const Form = (props) => {
  const [player, setPlayer] = useState({
    Name: "",
    Score: null,
  });

  //create functions that handle the event of the user typing into the form
  const handleNameChange = (event) => {
    const name = event.target.value;
    setPlayer((player) => ({ ...player, name }));
  };


  //rewrite this as score change logic later
  // const handleLastnameChange = (event) => {
  //   const lastname = event.target.value;
  //   setStudent((student) => ({ ...student, lastname }));
  // };

  //function to handle the post request
  const postName = async (newPlayer) => {
    const response = await fetch("http://localhost:3000/players", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlayer),
    });
    const data = await response.json();
    console.log("From the post ", data);
    props.addPlayer(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postName(player);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>Name</label>
        <input
          type="text"
          id="add-user-name"
          placeholder="Your Name"
          required
          value={player.Name}
          onChange={handleNameChange}
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;