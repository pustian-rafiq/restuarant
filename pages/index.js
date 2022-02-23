import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Satkhira Halal Food</title>
        <meta name="description" content="Pure honey supplier" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
    </div>
  )
}
