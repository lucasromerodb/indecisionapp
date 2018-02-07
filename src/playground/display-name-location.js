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

const appRoot =  document.getElementById('app');
ReactDOM.render(template, appRoot);
