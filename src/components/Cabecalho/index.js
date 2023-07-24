import React from 'react'
import styles from './Cabecalho.module.css'
import { Link } from 'react-router-dom'
import logo from './Logo-cinetag-branco 1.png'
import CabecalhoLink from 'components/CabecalhoLink'

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to="./">
            <img src={logo} alt='Logo do Cinetag'></img>
            <nav>
                <CabecalhoLink url="./">
                  Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                  Favoritos
                </CabecalhoLink>
            </nav>
        </Link>
    </header>
  )
}
