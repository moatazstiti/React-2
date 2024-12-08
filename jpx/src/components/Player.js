import React from 'react'


const Player = ({ player }) => {
    return (
      <div className="col-md-3">
        <div className="card">
          <img src={player.image} className="card-img-top" alt={player.name} />
          <div className="card-body">
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">
              Team: {player.team} <br />
              Nationality: {Player.nationality} <br />
              Jersey Number: {player.jerseyNumber} <br />
              Age: {player.age}
            </p>
          </div>
        </div>
      </div>
    );
  };



export default Player





