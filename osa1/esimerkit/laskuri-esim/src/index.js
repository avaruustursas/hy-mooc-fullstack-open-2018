import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 1
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>
          plus<br />
        </button>
        <button onClick={() => this.setState({counter: this.state.counter*this.state.counter})}>
          square<br />
        </button>
        <button onClick={() => this.setState({counter: 0})}>
          reset<br />
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
// const App = (props) => {
//   const {counter} = props
//   return (
//     <div>{counter.value}</div>
//   )
// }

// const counter = {
//   value: 1
// }

// const renderoi = () => {
//   ReactDOM.render(
//     <App counter={counter} />,
//     document.getElementById('root')
//   )
// }
//
// setInterval(() => {
//   renderoi()
//   counter.value += 1;
// }, 1000)
// renderoi()
// counter.value += 1
// renderoi()
// counter.value += 1
// renderoi()

// ReactDOM.render(
//   <App counter={counter} />,
//   document.getElementById('root')
// );
