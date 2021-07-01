const StarsDisplay = props => (
  <>
    {utils.range(1, props.count).map(starId => (
      <div key={starId} className="star" />
    ))}
  </>
);

/**
 * 
 * @param {*status-number} estado del botón si ya esta usado, sumado o disponible
 * @param {*number} numeros que recibe de la interacion.
 * @returns Deacuerdo al estado Dibuja los numeros del 1 al 9 conun color.
 */
const PlayNumber = props => (
	<button 
  	className="number"
    style={{ backgroundColor: colors[props.status] }}
    onClick={() => console.log('Num', props.number)}
  >
    {props.number}
  </button>
);

const StarMatch = () => {
	const [stars, setStars] = useState(utils.random(1, 9));
  const [availableNums, setAvailableNums] = useState(utils.range(1, 9));
  const [candidateNums, setCanditateNums] = useState([]);
  
  const candidatesAreWrong = utils.sum(candidateNums) > stars;
  /**
   * 
   * @param {*} number si el numero es usado se crea un estado de acuerdo a la situación.
    * @returns Devuelve el estado de un boton-numero.
   */
  const numberStatus = (number) => {
  	if (!availableNums.includes(number)) {
    	return 'used';
    }
    if (candidateNums.includes(number)) {
    	return candidatesAreWrong ? 'wrong': 'candidate';
    }
    return 'available';
  };
  
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
					<StarsDisplay count={stars}/>
        </div>
        <div className="right">
        	{utils.range(1, 9).map(number =>
          	<PlayNumber 
            	key={number} 
              status={numberStatus(number)}
              number={number}
            />
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};
