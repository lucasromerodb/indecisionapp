class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Curso de React', 'Curso de VUE', 'Curso de Angular', 'Trabajar'],
      picked: undefined
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handlePick() {
    this.setState(() => {
      return {
        picked: this.state.options[Math.floor(Math.random() * this.state.options.length)]
      }
    })
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <p>{this.state.picked}</p>
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
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
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option option={option} key={option} /> )
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return(
      <p>{this.props.option}</p>
    )
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const inputValue = e.target.elements.option.value.trim();
    if (inputValue) {
      alert(`The value is: ${inputValue}`);
    }
  }
  render() {
    return(
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Add option</button>
      </form>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
