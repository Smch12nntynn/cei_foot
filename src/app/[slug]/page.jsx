import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>aut inventore enim explicabo, eos cumque veritatis!</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src='/ufrjFACC.png' alt='' fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Michel Marques</span>
                            <span className={styles.date}>12.02.1999</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src='/ufrjFACC.png' alt='' fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description}>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos vero culpa eveniet veniam at cumque porro recusandae sed, error maxime modi ullam voluptatum architecto optio laborum laboriosam dolores suscipit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos vero culpa eveniet veniam at cumque porro recusandae sed, error maxime modi ullam voluptatum architecto optio laborum laboriosam dolores suscipit.</p>
                        <h3>Lorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dignissimos vero culpa eveniet veniam at cumque porro recusandae sed, error maxime modi ullam voluptatum architecto optio laborum laboriosam dolores suscipit.</p>
                    </div>
                    <div className={styles.comment}>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default page