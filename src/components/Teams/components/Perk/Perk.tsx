import { Tooltip } from '@geist-ui/react'
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
      <Tooltip text={config.text} type="dark" style={{ width: '48px' }}>
        <img src={`/assets/${config.asset}`} className={styles.asset} />
      </Tooltip>
    </div>
  )
}
