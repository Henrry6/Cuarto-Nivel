import React, { useState } from 'react'
import useGameState from './UseGameState'



const ListPlayer = ({newPlayers}) => {
  const {secondsLeft} = useGameState();
  const [estado, setEstado] = useState(false)
  return (
    <>
    { 
      secondsLeft === 0 ?
      (<div className="box">
        {newPlayers.map(player => 
          <div><p className="list">
          <b className="list">Nombre:  </b>{player.nombre}    
          <b className="list"> ---- puntaje: </b>{player.puntaje}
          </p></div>
        )}
      </div>)
      : (<div></div>)
    }
    </>
  )
}

export default ListPlayer