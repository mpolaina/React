import React, { useState } from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

const Label = styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Boton = styled.button`
    background-color: #00838f;
    color: #fff;
    width: 100%;
    padding: 1rem;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    
    &:hover {
        cursor: pointer;
        background-color: #26c6da;
    }
`

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`

const Formulario = () => {
    // STATE DATOS
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    // State para el error
    const [error, setError] = useState(false)
    
    // Extraer valores del state
    const {marca, year, plan} = datos
    
    // Leer datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        setDatos({
          ...datos,
          [e.target.name] : e.target.value
        })
    }
    
    // Cuando el usuario presiona submit (cotizar)
    const cotizarSeguro = e => {
        e.preventDefault();
        
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
          setError(true)
          return
        }
        setError(false)
        
        // obtener diferencia de años
        
        // cada año hay que restar un 3%
        
        // Americano 15%
        // Asiático 5%
        // Europeo 30%
        
        // Básico aumenta 20%
        // Completo 50%
        
        // Total
    }
    
    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
            { error ? <Error>Todos los campos requeridos</Error> : null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === 'basico'}
                    onChange={obtenerInformacion}
                /> Básico
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === 'completo'}
                    onChange={obtenerInformacion}
                /> Completo
            </Campo>
            <Boton type="submit">Cotizar</Boton>
        </form>
      
     );
}
 
export default Formulario;