import styles from "./page.module.css";
import React from 'react'
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import Featured from "@/components/featured/Featured";

const page = () => {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
    </div>
  )
}

export default page