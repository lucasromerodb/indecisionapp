class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [],
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

  handleAddOption(option) {
    if (!option) {
      return 'Escribí un juego capo...';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'El juego ya existe';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    })
  }

  render() {
    const title = '¿Qué voy a jugar hoy?';
    const subtitle = 'Dejá que esta app se la juegue por vos (?) ...ta dum tss :peola:';

    return(
      <div>
        <Header title={title} subtitle={subtitle} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
        <br />
        <Action
          hasOptions={this.state.options.length > 1}
          handlePick={this.handlePick}
        />
      <h3>{this.state.picked}</h3>

      </div>
    )
  }
}
// class Header extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     )
//   }
// }


// statless functional component
const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

// statless functional component
const Action = (props) => {
  return(
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        Decidir que voy a jugar
      </button>
    </div>
  )
}


// statless functional component
const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Comenzar de nuevo</button>
      <br />
      <br />
      {
        props.options.map((option) => <Option option={option} key={option} /> )
      }
    </div>
  )
}

// statless functional component
const Option = (props) => {
  return(
    <p>{props.option}</p>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error
      }
    })

    e.target.elements.option.value = null;
  }

  render() {
    return(
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" placeholder="Nombre de un juego" />
        <button>Añadir juego</button>
        <br />
        {this.state.error && <small>{this.state.error}</small>}
      </form>

    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
