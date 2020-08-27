
// SPREAD OPERATOR
let lenguajes = ['javascript', 'php', 'phyton']
let frameworks = ['ReactJS', 'Laravel', 'Django'] 

// Unir los arrays en uno solo
let comboNew = [...lenguajes, ...frameworks]
// let combo = lenguajes.concat(frameworks) -- forma antigua
console.log(comboNew)

// para crear un nuevo array
let newArray = [...lenguajes]
newArray.push('TypeScript')
// console.log(lenguajes)
// console.log(newArray) // ahora son 4

let [ultimo] = lenguajes.reverse()
lenguajes.reverse() // para volver a poner el array en su orden
console.log(ultimo) // devuelve phyton [da igual lo que pongamos]

// Con Spread
let [ultimoSpread] = [...lenguajes].reverse()
console.log(ultimoSpread)
console.log(lenguajes) // mantiene su orden porque spread devuelve un nuevo Array

function suma(a,b,c){
  console.log(a+b+c)
}
const numeros = [1,2,3]
suma(numeros) // devuelve 1,2,3,undefinedundefined
suma(...numeros) // devuelve 6
