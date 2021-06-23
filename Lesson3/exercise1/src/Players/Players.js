import React, { Component } from "react";

// Required Components

import ListPlayers from "./ListPlayers";
import AddPlayers from "./AddPlayers";


// data



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
            showPlayerList: true
        }
    }

    renderForm=()=>{
        this.setState((currentState)=> ({showPlayerList : !currentState.showPlayerList}))
    }

  render() {
    return (
      <>
        {
            !this.state.showPlayerList && ( <AddPlayers />)
        }
        <ListPlayers playerList = {players} />
        {
            this.state.showPlayerList && ( <button onClick={this.renderForm}>Add user </button>)
        }
      </>
    );
  }
}

export default Players;
