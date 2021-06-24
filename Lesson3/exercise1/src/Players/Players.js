import React, { Component } from "react";

// Required Components

import ListPlayers from "./ListPlayers";
import AddPlayers from "./AddPlayers";



// Class users
class Players extends Component {
    constructor(prop){
        super(prop);
        this.state = {
            showForm: true,
            addUserMessage: '',
            players : [{
              nickName: "wad",
              firstName: "Mirek",
              lastName: "Kedzierski",
              playedGames: 12,
            },
            {
              nickName: "kacpi",
              firstName: "Kacper",
              lastName: "Suchodolski",
              playedGames: 102,
            },
            
            ]
        }
    }
    //Flip the view of the applicaton
    showForm=()=>{
      console.log("showForm");
        this.setState((currentState)=> ({showForm : !currentState.showForm}))
    }

    //Add new player
    actionMessage= (message='You have added the new User') =>{
      this.setState({
        addUserMessage: message
      })
    }
    addPlayerList = (obj)=> {
      console.log(obj);
      if(!this.isPlayerExists(obj)){
        this.setState((currentState) => (
            {
              players : [...currentState.players , obj ]
            }
          ));
          this.actionMessage();
          return;
        }
        this.actionMessage("User exists try once again");
    }
    updatePlayerList(){
      return
    }
    isPlayerExists(obj){
      const isFinded = this.state.players.find(x=> x.nickName === obj.nickName)
      return isFinded;
      
    }

  render() {
    return (
      <>
        <h3>{this.state.addUserMessage}</h3>
        {
            !this.state.showForm && ( <AddPlayers showForm = {this.showForm} addNewPlayer ={this.addPlayerList} />)
        }
        <ListPlayers playerList={this.state.players} /> 
        {
            this.state.showForm && ( <button onClick={this.showForm}>Add user </button>)
        }
      </>
    );
  }
}

export default Players;
