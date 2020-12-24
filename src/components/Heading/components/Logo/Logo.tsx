import styles from './Logo.module.css'

export const Logo = ({ style }) => (
  <div className={styles.logo_container} style={style}>
    <img className={styles.img} src="/logo.svg" />
  </div>
)
