export default function validarCrearProducto(valores) {
    
    let errores = {}
    
    // Validar nombre de usuario
    if(!valores.nombre) {
        errores.nombre = "El nombre es obligatorio"
    }
    // Validar empresa
    if(!valores.empresa) {
        errores.empresa = "El nombre de empresa es obligatorio"
    }
    
    // Validar la url
    if(!valores.url) {
        errores.url = "La URL es obligatoria"
    } else if ( !/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url) ) {
        errores.url = "Formato incorrecto de URL o no válida"
    }
    
    // Validar descripción
    if(!valores.descripcion) {
        errores.descripcion = "Agrega una descripción de tu producto"
    }
    
    return errores;
}