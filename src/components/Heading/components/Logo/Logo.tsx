import styles from './Logo.module.css'

export const Logo = () => (
  <div className={styles.logo_container}>
    <img className={styles.img} src="/logo.svg" />
  </div>
)
