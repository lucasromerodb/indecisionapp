const app ={
  title : 'My título',
  subtitle : 'Esto es un subtitulo',
  options : ['One', 'Two']
}

// JSX - JavaScript XML
const template = (
  <div id="myp">
    <hr></hr>
    <strong>babel src/app.js --out-file=scripts/app.js --presets=env,react --watch</strong>
    <h2>{app.title}</h2>
    {app.subtitle && <p>{app.subtitle}</p> }
    <p>{app.options.length > 0 ? 'Here are your options ' : 'No options'}</p>
    <ol>
      <li>first item</li>
      <li>second item</li>
    </ol>
  </div>
);

const user = {
  name: '',
  age: 26,
  location: 'Argentina',
}

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anónimo'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

ReactDOM.render(templateTwo, document.getElementById('app'));
ReactDOM.render(template, document.getElementById('app2'));
