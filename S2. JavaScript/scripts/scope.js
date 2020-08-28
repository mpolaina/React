// Scope con var - global
var musica = 'Rock'

if(musica){
  var musica = 'Grunge'
  console.log('Var en if: ', musica) // return Grunge
}
console.log('Var fuera del if: ', musica) // return Grunge

// Scope con let/const - local
let musica2 = 'Rock'
if(musica2){
  let musica2 = 'Grunge'
  console.log('Let en if: ', musica2) // return Grunge
}
console.log('Let fuera del if: ', musica2) // return Grunge
