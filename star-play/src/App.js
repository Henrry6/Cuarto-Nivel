import React,{ useState } from 'react';
import './app.css'
import { Game } from './components/Game';
import Login from './components/Login';
import ListPlayer from './components/ListPlayers';
import Players from './helpers/Players';


export const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
	const [newPlayers, setNewPlayers] = useState(Players)
	const [estaLogueado, setEstaLogueado] = useState(false)

	const addNewPlayer = (player) => {
		setNewPlayers([...newPlayers, player])
		setEstaLogueado(true)
	}
	return (
		<>
			{
				estaLogueado === true ? (
					<Game key={gameId} startNewGame={() => setGameId(gameId + 1)} setEstaLogueado={setEstaLogueado}/>
					) : (
						<Login onSubmit={addNewPlayer} />
					)
			}
				<ListPlayer newPlayers={newPlayers}  />
		</>
	);
}

