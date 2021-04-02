import React from "react";
import {Link} from 'react-router-dom';

const Team = ({prop}) => {
    return(
        <div className="teamContainer">
           <Link to={"/players/"+prop.id}>
               <img src={prop.icon} alt={prop.name}/>
               <h3>{prop.name}</h3>
           </Link>
        </div>
    )
}

export default Team;