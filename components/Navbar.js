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
      <div className={styles.item}>center</div>
      <div className={styles.item}>right</div>
    </div>
  )
}

export default Navbar