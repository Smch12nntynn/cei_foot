import React from 'react'
import styles from "./menu.module.css"
import MenuPost from '../menuPost/MenuPost'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"Recentes"}</h2>
            <h1 className={styles.title}>Mais Populares</h1>
            <MenuPost />
            <h2 className={styles.subtitle}>Discover by topics</h2>
            <h1 className={styles.title}>Categories</h1>
            <MenuCategories />
            <h2 className={styles.subtitle}>Escolha por Editores</h2>
            <h1 className={styles.title}>Editores</h1>
            <MenuPost />

        </div>
    )
}

export default Menu