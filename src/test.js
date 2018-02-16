class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

ReactDOM.render(<Square />, document.getElementById('app'));
