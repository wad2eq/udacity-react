import { Component } from "react";
import Player from "./Player";


// TODO: add posiblities to hide played games
class ListPlayers extends Component{
    render(){
        return(
            <div>
                <header>
                    <h2> List of players</h2>
                </header>
                <div className="player-list">
                    <ul>
                    {
                        this.props.playerList.map((player, index)=> <Player player={player} index={index} key={index} />)
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

export default ListPlayers;