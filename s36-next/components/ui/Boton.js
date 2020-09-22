import styled from '@emotion/styled'

const Boton = styled.a`
    display: block;
    margin: 2rem auto;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    border: 1px solid #d1d1d1;
    padding: .8rem 2rem;
    margin-right: 1rem;
    background-color: ${props => props.bgColor ? '#da552f' : 'white'};
    color: ${props => props.bgColor ? 'white' : '#000000'};
    /* si es el último botón  */
    &:last-of-type {
        margin-right: 0
    }
    &:hover{
        cursor: pointer;
    }
    
`

export default Boton;