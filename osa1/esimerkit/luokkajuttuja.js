class Henkilo {
  constructor(nimi,ika) {
    this.nimi = nimi
    this.ika = ika
  }
  tervehdi() {
    console.log('hello, my name is',this.nimi)
  }
}

const arto = new Henkilo('Arto Hellas',35)
arto.tervehdi()

const jami = new Henkilo('Jami Kousa',21)
jami.tervehdi()
