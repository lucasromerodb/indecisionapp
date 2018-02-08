const app ={
  title : 'Indecision App',
  subtitle : 'Pon tu vida en las manos de la tecnología',
  options : []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const optionValue = e.target.elements.option.value;
  if (optionValue) {
    app.options.push(optionValue);
    e.target.elements.option.value = '';
    renderApp();
  }
}

const removeItems = () => {
  app.options = [];
  renderApp();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
}

const appRoot =  document.getElementById('app');

const renderApp = () => {

  const template = (
    <div id="myp">
      <h2>{app.title}</h2>
      {app.subtitle && <p>{app.subtitle}</p> }
      <p>{app.options.length > 0 ? 'Here are your options ' : 'No options'}</p>
      <ol>
        {
          app.options.map((option) =>  <li key={option}>{option}</li> )
        }
      </ol>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
      <br/>
      <br/>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
      <br/>
      <button onClick={removeItems}>Remove all</button>
      <hr/>
      <small>babel src/app.js --out-file=scripts/app.js --presets=env,react --watch</small>
    </div>
  )

  ReactDOM.render(template, appRoot);
}

renderApp();
