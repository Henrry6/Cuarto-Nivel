/**
 * Divide en componentes para dibujar las estrellas y los numeros.
 * @param {*props.count} recibe el valor 'Stars' desde el componente padre 
 * @returns mapea el rango y Dibuja las estrellas 
 */

const StarsDisplay = props => (
  <>
    {utils.range(1, props.count).map(starId => (
      <div key={starId} className="star" />
    ))}
  </>
);

const PlayNumber = props => (
	<button className="number" onClick={() => console.log('Num', props.number)}>
    {props.number}
  </button>
);