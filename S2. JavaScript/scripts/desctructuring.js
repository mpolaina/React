// DESTRUCTURING
const aprendiendoJS = {
  version: {
    nueva: 'ES6',
    anterior: 'ES5'
  },
  frameworks: ['React', 'VueJA', 'AngularJS']
}

// Es extraer valores de un objeto
console.log(aprendiendoJS)

// Antes se hacía así: 
let version = aprendiendoJS.version
let framework = aprendiendoJS.frameworks[0]
console.log(version.nueva)
console.log(framework)

// Destructuring forma actual
let {nueva} = aprendiendoJS.version
console.log('Destructuring--> ' + nueva)