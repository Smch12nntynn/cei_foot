"use client"
import React, { useState } from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'
import { signOut } from 'next-auth/react'

const AuthLinks = () => {
    const status = "authenticated"
    const [open, setOpen] = useState(false)
    return (
        <>
            {status === "notauthenticated" ? (
                <Link href="/login">Login</Link>
            ) : (
                <>
                    <Link href="/write">Escrever</Link>
                    <span className={styles.link} onClick={signOut}>Logout</span>
                </>
            )}
            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Sobre</Link>
                    <Link href="/">Contato</Link>
                    {status === "notauthenticated" ? (
                        <Link href="/login">Login</Link>
                    ) : (
                        <>
                            <Link href="/write">Escrever</Link>
                            <span className={styles.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default AuthLinks