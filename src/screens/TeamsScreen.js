import React, {useEffect, useState} from "react";
import '../styles/Teams.css';
import Team from "../components/Team";
const axios = require('axios');

const TeamsScreen = () => {
    const [teams, setTeams] = useState([]);

useEffect(() => {
        axios.get('https://mock-foooty-api.herokuapp.com/teams').then(function(response){
            setTeams(response.data.teams);
        })
    }, []);

    return(
        <div className="teamsContainer">
            {teams.map((team) => (
                <Team key={team.id} prop={team}/>
            ))}
        </div>
    )
}

export default TeamsScreen;