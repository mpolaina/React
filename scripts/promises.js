// PROMISES

const descuento = new Promise((resolve, reject) => {
  setTimeout(() => {
    let dto = true
    if(dto){
      resolve('Descuento aplicado')
    } else {
      reject('No se pudo aplicar')
    }
  }, 3000);
})
descuento.then(res => {
  console.log(res)
})
