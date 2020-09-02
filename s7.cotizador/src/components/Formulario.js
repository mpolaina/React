import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper'

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

const Label = styled.label`
    flex: 0 0 80px;
`
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const InputRadio = styled.input`
    margin: 0 .5rem;
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

// COMPONENTE ========================================
const Formulario = ({ setResumen, setCargando}) => {
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
    
    // COTIZAR == Cuando el usuario presiona submit (cotizar)
    const cotizarSeguro = e => {
        e.preventDefault();
        
        // VALIDAR FORMULARIO
        if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
          setError(true)
          return
        }
        setError(false)
        
        // BASE DE 2000
        let resultado = 2000
        
        // obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(year)
        console.log(diferencia)
        
        // cada año hay que restar un 3%
        resultado -= (( diferencia * 3 ) * resultado ) / 100
        console.log(resultado)
        
        // Americano +15%
        // Asiático +5%
        // Europeo +30%
        resultado = calcularMarca(marca) * resultado
        console.log(resultado)
        
        // Básico aumenta 20%
        // Completo 50%
        const incrementoPlan = obtenerPlan(plan)
        resultado = parseFloat( incrementoPlan * resultado ).toFixed(2)
        
        // Cargar spinner y resumen datos
        setCargando(true)
        setTimeout(() => {
            // Elimina spiner
            setCargando(false)  
            // Mostramos info en el componente principal
            setResumen({
              cotizacion: Number(resultado),
              datos
            })
        }, 2000);
        
    }
    
    return ( 
        <form
            onSubmit={cotizarSeguro}
        >
            { error ? <Error>Todos los campos requeridos</Error> : null}
            <Campo>
                <Label>Modelo</Label>
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
                    value="básico"
                    checked={plan === 'básico'}
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

Formulario.propTypes = {
  setResumen: PropTypes.func.isRequired, 
  setCargando: PropTypes.func.isRequired
}

export default Formulario;