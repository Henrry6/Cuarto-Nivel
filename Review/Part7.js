/**
 * 
 * @param {*} props recibe el estado del juego 
 * @returns Pinta el resultado final del juego si gana o pierde
 */
const PlayAgain = props => (
	<div className="game-done">
  	<div 
    	className="message"
      style={{ color: props.gameStatus === 'lost' ? 'red' : 'green'}}
    >
  	  {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
  	</div>
	  <button onClick={props.onClick}>Play Again</button>
	</div>
);

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCandidateNums] = useState([]);
  
  const [secondsLeft, setSecondsLeft] = useState(10);
/**
 * Introduce un efecto secundario al componente
 * Se ejectura cada vez que el componente se renderice a si mismo.
 */
	useEffect(() => {
    /**
     * Si el juego esta terminado no introduce un nuevo temporizador
     * las condiciones indican que todavia estamos jugando
     */
  	if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => {
	      setSecondsLeft(secondsLeft - 1);
      }, 1000);
      /**
       * Restablece el temporizador
       */
    	return () => clearTimeout(timerId);
  	}
  });  

  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  const onNumberClick = (number, currentStatus) => {
    /**
     * Desabilita hacer cilck una vez que haya finalizado el temporizador
     * No cambia el estado
     */
    if (gameStatus !== 'active' || currentStatus === 'used') {
      return;
    }
  }
  
  /**
   * Etsa variable indica en que momento gana o pierde
   */
  const gameStatus = availableNums.length === 0 
  	? 'won'
    : secondsLeft === 0 ? 'lost' : 'active'  
  
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
          {gameStatus !== 'active' ? (
          	<PlayAgain onClick={resetGame} gameStatus={gameStatus} />
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
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
};
