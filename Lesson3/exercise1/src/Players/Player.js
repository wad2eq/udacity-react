import { Component } from "react";

class Player extends Component {
    state={
        hideGames:false
    }
    hidePlayedGames= () =>{
        console.log('hide')
        this.setState((currentState)=>({
            hideGames: !currentState.hideGames
        }))
    }
    render() {
    console.log(this.props);
    return (
      <li key={this.props.index}>
        <p>
          <strong>{this.props.player.name} </strong> played
          <strong> {
              this.state.hideGames? 
                "0":
                this.props.player.playedGames
            } </strong>
          games
        </p>
        <button onClick={this.hidePlayedGames}>{!this.state.hideGames? "Hide playde games": "Show played Games" }</button>
      </li>
    );
  }
}

export default Player;
