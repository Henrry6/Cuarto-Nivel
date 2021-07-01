/**
 * Crea un hook llamado Stars con un valor inicial de #1-9
 * Dibuja cada unos de los numeros y estrellas utilizando el rango que en este caso reemplaza a un for.
 */

const StarMatch = () => {
	const [stars, setStars] = useState(utils.random(1, 9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1, stars).map(starId =>
          	<div key={starId} className="star" />
          )}
        </div>
        <div className="right">
        	{utils.range(1, 9).map(number =>
          	<button key={number} className="number">{number}</button>
          )}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};
