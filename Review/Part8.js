/**
 * 
 * @returns Cada vez que necesite riniciar el juego, cambia el atributo.
 * React desmontara el juego anterior y montara uno nuevo
 * Borra todos los efectos secundarios y monta un nuevo juego con un nuevo estado
 */
const StarMatch = () => {
	const [gameId, setGameId] = useState(1);
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)}/>;
}
 /**
  * Este componente activara el startNewGame cuando se haga click.
  */
<PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />