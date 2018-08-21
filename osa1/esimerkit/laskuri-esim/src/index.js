import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 1
    }
  }
  asetaArvoon = (arvo) =>
    () => {
        this.setState({counter: arvo})
    }

  kasvataYhdella = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }))
  }

  nollaa = () => {
    this.setState((prevState) => ({
      counter: 0
    }))
  }

  nelioi = () => {
    this.setState((prevState) => ({
      counter: prevState.counter*prevState.counter
    }))
  }

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.asetaArvoon(this.state.counter+1)}>
          plus<br />
        </button>
        <button onClick={this.asetaArvoon(this.state.counter*this.state.counter)}>
          square<br />
        </button>
        <button onClick={this.asetaArvoon(0)}>
          reset<br />
        </button>
      </div>
    )
  }
}

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       counter: 1
//     }
//     this.kasvataYhdella = this.kasvataYhdella.bind(this)
//     this.nollaa = this.nollaa.bind(this)
//     this.nelioi = this.nelioi.bind(this)
//   }
//   kasvataYhdella() {
//     this.setState({counter: this.state.counter + 1})
//   }
//
//   nollaa() {
//     this.setState({counter: 0})
//   }
//
//   nelioi() {
//     this.setState({counter: this.state.counter*this.state.counter})
//   }
//
//   render() {
//     return (
//       <div>
//         <div>{this.state.counter}</div>
//         <button onClick={this.kasvataYhdella}>
//           plus<br />
//         </button>
//         <button onClick={this.nelioi}>
//           square<br />
//         </button>
//         <button onClick={this.nollaa}>
//           reset<br />
//         </button>
//       </div>
//     )
//   }
// }

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
