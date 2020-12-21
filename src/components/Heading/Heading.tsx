import { Grid, Text } from '@geist-ui/react'
import { Countdown } from '../Countdown/Countdown'
import { HeadingInfo } from './components/HeadingInfo/HeadingInfo'
import { QGDivider } from './components/QGDivider/QGDivider'
import styles from './Heading.module.css'

export const Heading = () => {
  return (
    <div className={styles.container}>
      <Grid.Container
        style={{ height: '100%' }}
        gap={2}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Text h1 className={styles.main_title}>
          Quargames
        </Text>

        <QGDivider />
        <Countdown />
        <QGDivider />

        <HeadingInfo />
      </Grid.Container>
    </div>
  )
}
