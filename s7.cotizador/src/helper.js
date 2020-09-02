
// DIFERENCIA DE AÑOS
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year
}

// CALCULA TOTAL SEGÚN LA MARCA
export function calcularMarca(marca){
    
    let incremento
    switch (marca) {
      case 'europeo':
        incremento = 1.30;
        break;
      case 'americano':
        incremento = 1.15;
        break;
      case 'asiatico':
        incremento = 1.05;
        break;
    
      default:
        break;
    }
    return incremento
}

// CALCULAR TIPO DE SEGURO
export function obtenerPlan(plan){
    return (plan === 'básico' ? 1.20 : 1.50)
}

// Primera letra mayúscula
export function primeraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}