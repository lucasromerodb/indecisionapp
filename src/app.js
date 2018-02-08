class IndecisionApp extends React.Component {

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['uno', 'dos'];

    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {

    console.log(this.props);

    return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return(
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return(
      <ol>
        <li><Option /></li>
      </ol>
    )
  }
}

class Option extends React.Component {
  render() {
    return(
      <div>Lanonda</div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return(
      <div>
        <button>Add option</button>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
