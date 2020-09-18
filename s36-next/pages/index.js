import React from 'react';
import Layout from '../components/layout/Layout'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled'

const Heading = styled.h1`
    color: red;
`

export default function Home() {
    return (
        <div>
            <Layout>
                <Heading>Inicio</Heading>
            </Layout>
        </div>
  )
}
