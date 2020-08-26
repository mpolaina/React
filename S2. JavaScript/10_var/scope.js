// Scope con var - global
var musica = 'Rock'

if(musica){
  var musica = 'Grunge'
  console.log('Dentro del if: ', musica) // return Grunge
}
console.log('Fuera del if: ', musica) // return Grunge

// Scope con let/const - local
let musica2 = 'Rock'
const formato = 'Dvd'
if(musica2){
  let musica2 = 'Grunge'
  console.log('Dentro del if con let: ', musica2) // return Grunge
}
console.log('Fuera del if con let: ', musica2) // return Grunge
