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
  <p>{props.osio.nimi} {props.osio.tehtavia}</p>
)

// nyt on <div> ympärillä eikä tule edes warning,
// joka luultavasti johtuu siitä, että nyt Osiin viitataan eksplisiittisesti
const Sisalto = (props) => {
  const osat = props.tiedot.map(t => <Osa osio={t} /> )
  return (
    <div>
      {osat[0]}
      {osat[1]}
      {osat[2]}
    </div>
)}

// Yhteensa: huolehtii tehtavien yhteismäärästä
// oletetaan, että App:issa propsi annetaan {n + m + k}
// ei enää oleteta tehtävässä 1.4
const Yhteensa = (props) => (
  <p>yhteensä {props.summa.map(o => o.tehtavia).reduce((t,tot)=>tot=tot+t)} tehtävää</p>
)

// tehtävä 1.4
const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
  {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  },
  {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  },
  {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }]

  return (
    <div>
      <Otsikko otsake={kurssi} />
      <Sisalto tiedot={osat} />
      <Yhteensa summa={osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
