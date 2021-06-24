import React, { Component } from "react";

// Required Components

import ListPlayers from "./ListPlayers";
import AddPlayers from "./AddPlayers";



const players = [{
  name: "wad",
  firstName: "Mirek",
  lastName: "Kedzierski",
  playedGames: 12,
},
{
  name: "kacpi",
  firstName: "Kacper",
  lastName: "Suchodolski",
  playedGames: 102,
},

]

// Class users
class Players extends Component {
    constructor(prop){
        super(prop);
        this.state = {
            showForm: true
        }
    }
    //Flip the view of the applicaton
    showForm=()=>{
      console.log("showForm");
        this.setState((currentState)=> ({showForm : !currentState.showForm}))
    }

  render() {
    return (
      <>
        {
            !this.state.showForm && ( <AddPlayers showForm = {this.showForm} />)
        }
        <ListPlayers playerList={players} /> 
        {
            this.state.showForm && ( <button onClick={this.showForm}>Add user </button>)
        }
      </>
    );
  }
}

export default Players;
