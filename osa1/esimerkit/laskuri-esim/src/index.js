import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 1
    }

    setInterval(() => {
      this.setState({counter: this.state.counter + 1})
    }, 1000)
  }

  render() {
    console.log('renderöidään',this.state.counter)
    return (
      <div>{this.state.counter}</div>
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
