import { Grid } from '@geist-ui/react'
import { BackgroundVideo } from '../BackgroundVideo/BackgroundVideo'
import { Countdown } from '../Countdown/Countdown'
import { HeadingInfo } from './components/HeadingInfo/HeadingInfo'
import { Logo } from './components/Logo/Logo'
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
        <BackgroundVideo src="/assets/bg.mp4" />
        <Logo />

        <Countdown />
        <HeadingInfo />
      </Grid.Container>
    </div>
  )
}
