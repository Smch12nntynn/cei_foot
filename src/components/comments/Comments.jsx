import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Comments = () => {
    const status = "autenticated"
    return (
        <div className={styles.container}>
            <h1 className={status.title}>Comments</h1>
            {status === "autenticated" ? (
                <div className={styles.write}>
                    <textarea placeholder='write a comment..' className={styles.input}/>
                    <button className={styles.button}>Send</button>
                </div>
                ) : (
                <Link href="/login">Login to write a comment</Link>
                )}
                <div className={styles.comments}>
                    <div className={styles.comment}>
                        <div className={styles.user}>
                            <Image 
                            src='/ufrjFACC.png' 
                            width={50}
                            height={50}
                            alt='' 
                            className={styles.image}/>
                            <div className={styles.userInfo}>
                                <span className={styles.username}>Michel Marques</span>
                                <span className={styles.date}>12.02.1999</span>
                            </div>
                        </div>
                        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum laborum tempore unde magnam, optio deserunt voluptas corporis doloribus. Similique sequi, est laboriosam odio exercitationem harum quasi consequatur quas quo quidem?</p>

                    </div>
                </div>
        </div>
    )
}

export default Comments