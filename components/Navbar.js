import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" width="32" height="32" alt='' />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORFDER NOW</div>
          <div className={styles.text}>01991166550</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt='' width="160" height="69" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt='' width="30" height="30" />
          <div className={styles.counter}>4</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar