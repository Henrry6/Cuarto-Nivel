// ! React
const { useState } = React
const testData = [
  {name: "Alexander", avatar_url: "https://avatars.githubusercontent.com/u/52291881?v=4", company: "@facebook"},
  {name: "Fercho", avatar_url: "https://avatars.githubusercontent.com/u/47802477?v=4", company: "@Humu"},
  {name: "Kevin", avatar_url: "https://avatars.githubusercontent.com/u/33032880?v=4", company: "@Facebook"},
  {name: "Jazz", avatar_url: "https://avatars.githubusercontent.com/u/58913696?v=4", company: "@Facebook"},
  {name: "Mauricio", avatar_url: "https://avatars.githubusercontent.com/u/61792044?v=4", company: "@Facebook"},
];

const CardList = (props) => (
	<div>
    {props.profiles.map(profile => <Card key={profile.name} {...profile}/>)}
	</div>
);

function Card(props) {
  const profile = props;
  return (
    <div className="tam">
      <img className="tam2" src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    </div>
  );
}

const Form = (props) => {
  const [userName, setState] = useState('')

  let handleChange = async (e) => {
    e.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    props.onSubmit(resp.data)
    setState('')
  } 

  return (
    <form method="get" onSubmit={handleChange}>
      <div className="ipt">
        <input 
          className="input"
          type="text" 
          value={userName}
          onChange={e => setState(e.target.value)}
          placeholder="Nombre del usuario" 
          required 
        />
        <button className="but" type="submit" value="Obtener">Obtener</button>
      </div>
    </form>
  );
}

function App (props) {
  const [profiles, setState] = useState(testData);

  const addNewProfile = (prof) => {
    let logs = [...profiles, prof];
    setState(logs);
  }

  return (
    <div>
      <div className="title">{props.title}</div>
      <Form onSubmit={addNewProfile}/>
      <CardList profiles={profiles} />
    </div>
  )
}

ReactDOM.render(<App title="Usuarios de Github"/>, document.getElementById('root'));