import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b> Lorem ipsum, </b> dolor sit amet consectetur adipisicing elit.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                        <Image
                            src="/ufrjFACC.png"
                            alt=''
                            fill
                            sizes="100vw"
                            style={{
                                objectFit: 'contain',
                            }}
                            priority
                            quality={80}
                        />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}> Lorem ipsum dolor sit, amet consectetur</h1>
                    <p className={styles.postDesc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perferendis mollitia eveniet accusamus. Laborum id accusamus, placeat repellat ratione necessitatibus ullam quidem iste. Labore nihil similique nam tempore atque! Error.</p>
                    <button className={styles.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Featured