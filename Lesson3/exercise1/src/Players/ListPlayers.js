

function ListPlayers({playerList}){
        console.log(playerList);
        return(
            <header>
                <h2> Those are the best players</h2>
                <ul>
                    {playerList.map((player, index) => (
                        <li key={index}>
                            <strong>{player.name}</strong> played already :
                            <strong>{player.playedGames} GAMES</strong>
                        </li>
                        ))}
                </ul>
            </header>
        )
}

export default ListPlayers;