import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
  <div className={styles.container}>
  <div className={styles.item}>
  <div className={styles.chatButton}>
    <Image src="/img/bear2.jpg" alt="" height="100%" width="100%" />
  </div>
  
  <div className={styles.texts}>
 

  </div>
  </div>
  <div className={styles.item}>
  <ul className={styles.list}>
    <li className={styles.listItem}>Startsida </li>
    
    <li className={styles.listItem}>Profil </li>
    <li className={styles.listItem}>Matchningar </li>
  </ul>
  </div>
  <div className={styles.item}></div>
  <div className={styles.searchButton}>
  <Image src="/img/love-finder.jpg" alt="" height="45" width="50" />
  </div>
  <div className={styles.chatButton}>
    <Image src="/img/chatButton.png" alt="" height="50" width="50" />
    </div>
  </div>
  )
}

export default Navbar
