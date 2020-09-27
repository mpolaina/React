import { graphql, useStaticQuery } from 'gatsby'

const useInicio = () => {
    
    const resultado = useStaticQuery(graphql`
        query {
            allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
              nodes {
                id
                nombre
                contenido
                imagen {
                    sharp: childImageSharp {
                        fluid ( maxWidth: 1920 duotone: {
                            highlight: "#4169E1", shadow: "#192555", opacity: 30
                        }) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
              }
            }
          }
    `)
    return resultado.allStrapiPaginas.nodes.map(inicio => ({
        nombre: inicio.nombre,
        contenido: inicio.contenido,
        imagen: inicio.imagen
    }))
}
 
export default useInicio;