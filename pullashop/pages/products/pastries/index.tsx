import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../../styles/Pastries.module.css'

const Pastries: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PullaShop</title>
        <meta name="description" content="Pullashop where you can browse the best pastries" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Pastries
        </h1>

        <p className={styles.description}>
         Look all of these Pastries we have! Choose your favourite!
        </p>

        {/* TODO: Fill list with pastries */}
        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Ääkkös-pulla</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error adipisci alias explicabo vero repudiandae et deserunt consequuntur at soluta eius totam sunt provident voluptatibus laboriosam, debitis ipsa, repellat ipsum quo.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://kahville.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
        &copy; 2021 - Ville Kähärä
        </a>
      </footer>
    </div>
  )
}

export default Pastries