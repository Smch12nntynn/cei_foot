import React from 'react'
import styles from "./cardList.module.css"
import Pagination from '../pagination/pagination'

const CardList = () => {
    return (
        <div className={styles.container}>CardList
        <Pagination/>
        </div>
    )
}

export default CardList