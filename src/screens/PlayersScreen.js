import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import Player from "../components/Player";
import '../styles/Players.css';
const axios = require('axios');


const PlayersScreen = () => {
    let { id } = useParams();
    const [playerInfo, setPlayerInfo] = useState([]);

    useEffect(() => {
       axios.get('https://mock-foooty-api.herokuapp.com/teams/'+ id +'/players').then(function(response){
           setPlayerInfo(response.data.players);
       })
   }, []);

    return(
        <div className="playersContainer">
            <div className="titles">
                <h3>Player</h3>
                <h3>Info</h3>
            </div>
            {playerInfo.map((player) => (
                <Player key={player.id} prop={player}/>
            ))}
        </div>
    )
}

export default PlayersScreen;