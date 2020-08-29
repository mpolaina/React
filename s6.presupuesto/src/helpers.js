export const revisarPresupuesto = (presupuesto, disponible) => {
    
    let clase
    
    if ( ( presupuesto / 4 ) > disponible ) {
        clase = 'alert alert-danger'
    } else if ( ( presupuesto / 2 ) > disponible )  {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert-success'
    }
    
    return clase
}