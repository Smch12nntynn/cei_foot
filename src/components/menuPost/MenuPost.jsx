import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './menuPost.module.css'

const MenuPost = () => {
    return (
        <div className={styles.items}>
            <Link href="/" className={styles.item}>
                <div className={styles.imageContainer}>
                    <Image src="/ufrjFACC.png" alt='' fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <span className={`${styles.category} ${styles.style}`}>
                        Style
                    </span>
                    <h3>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h3>
                    <div className={styles.detail}>
                        <span className={styles.username}>Michel Marques - </span>
                        <span className={styles.date}>12.02.1999</span>
                    </div>
                </div>
            </Link>

            <div className={styles.items}>
                <Link href="/" className={styles.item}>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.style}`}>
                            Style
                        </span>
                        <h3>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>Michel Marques - </span>
                            <span className={styles.date}>12.02.1999</span>
                        </div>
                    </div>
                </Link>
            </div>


        </div>




    )
}

export default MenuPost