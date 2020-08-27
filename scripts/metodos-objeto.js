// MÉTODOS O FUNCINOES EN OBJETOS
const persona = {
  nombre: 'Manuel',
  profesion: 'Creativo',
  edad: 39,
  musicaRock: false,
  mostrarInfo(){
    console.log(`${this.nombre} es ${this.profesion} y tiene ${this.edad} años.`)
  }
}
persona.mostrarInfo()