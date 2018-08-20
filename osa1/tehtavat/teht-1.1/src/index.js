import React from 'react';
import ReactDOM from 'react-dom';

// Otsikko: huolehtii kurssin nimen renderöimisestä
const Otsikko = (props) => (
  <h1>{props.otsake}</h1>
)


// Sisalto: huolehtii osista ja niiden tehtävämääristä
// Muutetaan tämä niin, että tätä kutsutaan vain kerran kuten tehtävänannossa
// propsit annetaan listoina, jotka kootaan python zip() tyyliin
// [osa1,osa2,...] [tehtavia1,tehtavia2,...] ---> [(osa1,tehtavia1),...]
// ... mutta koska sitä ei ole näköjään valmiina, oletetaan, että propsit
// annetaan valmiiksi pareina (x,y),(å,z),...
// palautetaan siis map() tulos, sillä materiaalin mukaan renderöijän pitäisi
// osata käsitellä taulukkoja palautusarvoina
// Toimii, mutta warningin kera. Pitäisi muka olla joka arrayn jäsenellä
// 1käsitteiset avaimet

// tehtävä 1.2
const Osa = (props) => (
  <p>{props.tiedot[0]} {props.tiedot[1]}</p>
)

// tässä ei nyt ole <div> erottamassa sisältöä muusta vielä
const Sisalto = (props) => (
  props.tiedot.map(t => <Osa tiedot={[t[0],t[1]]} /> )
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
      <Sisalto tiedot={[[osa1,tehtavia1],[osa2,tehtavia2],[osa3,tehtavia3]]} />
      <Yhteensa summa={tehtavia1 + tehtavia2 + tehtavia3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
