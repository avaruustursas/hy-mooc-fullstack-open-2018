import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => (
//   <div>
//     <p>Hello world</p>
//   </div>
// )

// const App = () => {
//   //console.log('Hello from komponentti')
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>{a} plus {b} is {a + b}</p>
//     </div>
//   )
// }

// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

//testi
const Footer = () => (
  <div>greeting app created by <a href="https://github.com/avaruustursas">avaruustursas</a></div>
)

// const App = () => {
//     const nimi = 'Pekka'
//     const ika = 10
//     return (
//       <div>
//         <h1>Greetings</h1>
//         <Hello name="Arto" age={26+10} />
//         <Hello name={nimi} age={ika} />
//         <Footer />
//       </div>
//     )
// }

const App = () => {
    const nimi = 'Pekka'
    const ika = 10
    return (
      [
        <h1>Greetings</h1>,
        <Hello name="Arto" age={26+10} />,
        <Hello name={nimi} age={ika} />,
        <Footer />
      ]
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
