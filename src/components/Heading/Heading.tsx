import { Grid } from '@geist-ui/react'
import { MutableRefObject, useRef } from 'react'
import { useSpring, animated, useChain } from 'react-spring'
import { BackgroundVideo } from '../BackgroundVideo/BackgroundVideo'
import { Countdown } from '../Countdown/Countdown'
import { HeadingInfo } from './components/HeadingInfo/HeadingInfo'
import { Logo } from './components/Logo/Logo'
import styles from './Heading.module.css'

export const Heading = () => {
  const logoRef = useRef()
  const countdownRef = useRef()
  const infoRef = useRef()

  const AnimatedLogo = animated(Logo)
  const AnimatedCountdown = animated(Countdown)
  const AnimatedHeadingInfo = animated(HeadingInfo)

  const getSpringProps = (ref: MutableRefObject<undefined>) =>
    useSpring({
      ref: ref,
      opacity: 1,
      from: { opacity: 0 },
    })

  const logoProps = getSpringProps(logoRef)
  const countdownProps = getSpringProps(countdownRef)
  const infoProps = getSpringProps(infoRef)

  useChain([logoRef, countdownRef, infoRef])

  return (
    <div className={styles.container}>
      <BackgroundVideo src="/assets/bg.mp4" />
      <Grid.Container
        style={{ height: '100%' }}
        gap={2}
        justify="center"
        alignItems="center"
        direction="column"
      >
        <AnimatedLogo style={logoProps} />

        <AnimatedCountdown style={countdownProps} />
        <AnimatedHeadingInfo style={infoProps} />
      </Grid.Container>
    </div>
  )
}
