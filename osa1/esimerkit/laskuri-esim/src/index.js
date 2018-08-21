import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const {counter} = props
  return (
    <div>{counter.value}</div>
  )
}

const counter = {
  value: 1
}

const renderoi = () => {
  ReactDOM.render(
    <App counter={counter} />,
    document.getElementById('root')
  )
}

setInterval(() => {
  renderoi()
  counter.value += 1;
}, 1000)
// renderoi()
// counter.value += 1
// renderoi()
// counter.value += 1
// renderoi()

// ReactDOM.render(
//   <App counter={counter} />,
//   document.getElementById('root')
// );
