import React, { Component } from 'react';

class IndecisionApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: props.options,
      picked: undefined
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options: options}))
        console.log('Fetching Data...');
      }
    } catch (e) {
      // No hacer nada
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('Saving Data...');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }


  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  }

  handlePick() {
    this.setState(() => ({ picked: this.state.options[Math.floor(Math.random() * this.state.options.length)] }))
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
    const subtitle = 'Dejá que esta app se la juegue por vos (?) ...ta dum tss :peola:';

    return(
      <div>
        <Header title="¿Qué vas a jugar hoy?" subtitle={subtitle} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
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

IndecisionApp.defaultProps = {
  options: []
}

// statless functional component
const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: 'IndecisionApp Udemy'
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
      {props.options.length === 0 && <p>Agregue un juego para comenzar!</p>}
      {
        props.options.map((option) => (
          <Option
            option={option}
            key={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ) )
      }
    </div>
  )
}

// statless functional component
const Option = (props) => {
  return(
    <p>
      {props.option}
      <button style={{marginLeft: 10}}
        onClick={(e) => {
          props.handleDeleteOption(props.option)
        }}
      >
        Quitar
      </button>
    </p>
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

    if (!error) {
      e.target.elements.option.value = '';
    }

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

export default IndecisionApp;
