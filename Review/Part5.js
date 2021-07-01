const PlayNumber = props => (
  <button
    className="number"
    style={{backgroundColor: colors[props.status]}}
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.number}
  </button>
);

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  /**
   * Un array con loa=s numueros candidatos para empezar el juego.
   */
  const [candidateNums, setCandidateNums] = useState([]);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const numberStatus = number => {
    if (!availableNums.includes(number)) {
      return 'used';
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }
    return 'available';
  };
  /**
   * 
   * @param {*} number recibe un numero
   * @param {*} currentStatus recibel el estado del boton-numero
   * @returns lo que va a realizar el boton una ves que se haga click
   * Una ves que se usa el numero no se puede volver a utilizar.
   * 
   */
  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === 'used') {
      return;
    }
    /**
     * Si el numero esta disponible entonces se agrega al array de numeros candidatos
     * Desmarca un numero no disponible y un numero incorrecto
     */
		const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter(cn => cn !== number);
    /**
     * Suma los nuevos numeros candidatos y los compara con el recuento de la estrellas.
     */
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        n => !newCandidateNums.includes(n)
      );
      /**
       * Actualiza el numero de estrellas de acuerdo a los numeros disponibles
       */
      setStars(utils.randomSumIn(newAvailableNums, 9));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
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