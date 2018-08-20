import React from 'react';
import ReactDOM from 'react-dom';

// Otsikko: huolehtii kurssin nimen renderöimisestä
const Otsikko = (props) => (
  <h1>{props.otsake}</h1>
)

// Sisalto: huolehtii osista ja niiden tehtävämääristä
const Sisalto = (props) => (
  <p>{props.nimi} {props.tehtavia}</p>
)

// Yhteensa: huolehtii tehtavien yhteismäärästä
// oletetaan, että App:issa propsi annetaan {n + m + k}
const Yhteensa = (props) => (
  <p>yhteensä {props.summa} tehtävää</p>
)

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko otsake={kurssi} />
      <Sisalto nimi={osa1} tehtavia={tehtavia1} />
      <Sisalto nimi={osa2} tehtavia={tehtavia2} />
      <Sisalto nimi={osa3} tehtavia={tehtavia3} />
      <Yhteensa summa={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
