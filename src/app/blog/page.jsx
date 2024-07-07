import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'

const blogPage = ({ searchParams }) => {

    const page = parseInt(searchParams.page) || 1;
    const { cat } = searchParams;

    // console.log(searchParams)
    // console.log(cat)
    // console.log(page)

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blog</h1>
            <div className={styles.content}>
                <CardList page={page} cat={cat}/>
                <Menu />
            </div>
        </div>
    )
}

export default blogPage