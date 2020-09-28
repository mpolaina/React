import { graphql, useStaticQuery } from 'gatsby';

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
        query {
            allStrapiPropiedades {
                nodes {
                    nombre
                    descripcion
                    id
                    wc
                    precio
                    aparcamientos
                    habitaciones
                    categoria {
                        nombre
                    }
                    agentes {
                        nombre
                        telefono
                        email
                    }
                    imagen {
                        sharp: childImageSharp {
                            fluid( maxWidth: 600, maxHeight: 400 ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    //console.log(datos);

    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        imagen: propiedad.imagen,
        id: propiedad.id,
        wc: propiedad.wc,
        precio: propiedad.precio,
        aparcamientos: propiedad.aparcamientos,
        habitaciones: propiedad.habitaciones,
        categoria: propiedad.categoria,
        agentes: propiedad.agentes,
    }))
}

export default usePropiedades;