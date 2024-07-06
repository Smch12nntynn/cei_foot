import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({item}) => {
    return (
        <div className={styles.container} key={item.id}>
            <div className={styles.imageContainer}>
                <Image src="/ufrjFACC.png" alt='' fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>{item.createdAt.substring(0,10)} - </span>
                    <span className={styles.category}>{item.catSlug}</span>
                </div>
                <Link href="/">
                    <h1>{item.title}</h1>
                </Link>
                <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Asperiores voluptatem reprehenderit eligendi.
                    Voluptatem quasi similique voluptas dicta eveniet
                    praesentium quae inventore iusto dolores? Eveniet,
                    ipsam corrupti! Itaque quo molestias fuga!
                </p>
                <Link href="/" className={styles.link}> Saiba Mais</Link>
            </div>
        </div>
    )
}

export default Card