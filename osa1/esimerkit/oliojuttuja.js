const arto = {
  nimi: 'Arto Hellas',
  ika: 35,
  koulutus: 'Filosofian tohtori',
  tervehdi: function () {
    console.log('hello, my name is',this.nimi)
  },
  laskeSumma: function (a,b) {
    console.log(a+b)
  }
}

arto.vanhene = function() {
  this.ika += 1
}

arto.tervehdi()
console.log(arto.ika)
arto.vanhene()
console.log(arto.ika)

arto.laskeSumma(1,4)

const viiteSummaan = arto.laskeSumma
viiteSummaan(10,15)


const viiteTervehdykseen = arto.tervehdi
viiteTervehdykseen()

setTimeout(arto.tervehdi,1000)
setTimeout(arto.tervehdi.bind(arto),1000)
