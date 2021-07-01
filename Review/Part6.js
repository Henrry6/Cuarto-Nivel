/**
 * 
 * @param {*} onClick cuando haga click ejecuta el metodo para poder reiniciar el juego.
 * @returns Devuelve un boton
 */

const PlayAgain = props => (
	<div className="game-done">
	  <button onClick={props.onClick}>Play Again</button>
	</div>
);

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  /**
   * Indica si el array de numeros disponibles esta terminado.
   */
  const gameIsDone = availableNums.length === 0;
  /**
   * Pones las variables con los valores inciales para poder jugar
   */
  const resetGame = () => {
  	setStars(utils.random(1, 9));
    setAvailableNums(utils.range(1, 9));
    setCandidateNums([]);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameIsDone ? (
          	<PlayAgain onClick={resetGame} />
          ) : (
          	<StarsDisplay count={stars} />
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map(number => (
            <PlayNumber
              key={number}
              status={numberStatus(number)}
              number={number}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};