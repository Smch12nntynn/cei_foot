import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'


const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: "no-store"
    });
    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json()
}


const singlePage = async ({params}) => {
    const {slug} = params;

    const data = await getData(slug)


    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        {data?.title}
                    </h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                        {data?.user?.image && <Image src={data.user.image} alt='' fill className={styles.avatar} />}
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>{data?.user.name}</span>
                            <span className={styles.date}>12.02.1999</span>
                        </div>
                    </div>
                </div>
                {data?.img && <div className={styles.imageContainer}>
                    <Image src='/ufrjFACC.png' alt='' fill className={styles.image} />
                </div>}
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div className={styles.description} dangerouslySetInnerHTML={{__html: data?.desc}}/>
                    <div className={styles.comment}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default singlePage