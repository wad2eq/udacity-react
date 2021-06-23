import React, { Component } from "react";

// Required Components

import ListPlayers from "./ListPlayers";
import AddPlayers from "./AddPlayers";

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
        <ListPlayers /> 
        {
            this.state.showPlayerList && ( <button onClick={this.renderForm}>Add user </button>)
        }
      </>
    );
  }
}

export default Players;
