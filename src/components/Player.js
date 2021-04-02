import React from "react";
import '../styles/Player.css';

const Player = ({prop}) => {
    console.log(prop);
    return(
        <div className="playerContainer">
            <div className="playerLeftContainer">
                <div className="imageContainer" style={prop.role.code3==='MID' ? {borderColor: 'blue'} : prop.role.code3 === 'DEF' ? {borderColor: 'orange'} : prop.role.code3 === 'FWD' ? {borderColor: 'yellowgreen'} : {borderColor: 'darkseagreen'}}>
                    <img style={{width: '50px'}} src={prop.image ? prop.image : 'https://kuzguncuk.comparisonator.com/static/players/590644.png'} alt=""/>
                </div>
                <div className="countryContainer">
                    <p>{prop.birthArea.alpha2code}</p>
                    <p>{prop.passportArea.alpha2code}</p>
                </div>
                <p className="fullName">{prop.firstName} {prop.lastName}</p>
            </div>
            <div className="playerRightContainer">
                <p>{((Date.now() - new Date(prop.birthDate)) / 31556952000).toString().substr(0,2)}</p>
                <p>{prop.foot}</p>
            </div>
        </div>
    )
}
export default Player;