import React,{ useState } from 'react';
import './app.css'
import { Game } from './components/Game';


export const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}

