import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src="/ufrjFACC.png" alt='' width={50} height={50} />
                    <h1 className={styles.logoText}>CEI Foot</h1>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit. 
                    Optio reiciendis excepturi laboriosam 
                    voluptatem repudiandae ullam quod 
                    quas at, velit eaque hic aliquid 
                    earum distinctio cumque nobis tempore 
                    itaque rem dolore!
                </p>
                <div className={styles.icons}>
                    <Image src="/facebook.png" alt='' width={18} height={18} />
                    <Image src="/instagram.png" alt='' width={18} height={18} />
                    <Image src="/tiktok.png" alt='' width={18} height={18} />
                    <Image src="/youtube.png" alt='' width={18} height={18} />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                    <Link href='/'>Homepage</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer