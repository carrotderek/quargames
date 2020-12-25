import { PerkConfig } from '../../data/types'
import styles from './Perk.module.css'

interface Props {
  perk: number
  style: any
}
export const Perk = ({ perk, style }: Props) => {
  const config = PerkConfig[perk]

  return (
    <div className={styles.container} style={style}>
      <img src={`/assets/${config.asset}`} className={styles.asset} />
      <span className={styles.text}>{config.text}</span>
    </div>
  )
}
