import { Card, Grid, Text, useTheme } from '@geist-ui/react'
import { useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { animated, useChain, useSpring, useSprings } from 'react-spring'
import { StatNames } from '../../data/types'
import { QGProgress } from '../../QGProgress/QGProgress'
import { Perk } from '../Perk/Perk'
import styles from './MemberCard.module.css'

export const MemberCard = ({ member }) => {
  const theme = useTheme()
  const memberStats = Object.keys(member.stats)

  const [showCard, setShowCard] = useState(false)
  const statsFillRef = useRef()
  const containerRef = useRef()
  const textRef = useRef()
  const perkRef = useRef()
  const delayValue = 20

  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    rootMargin: '-200px 0px',
  })

  if (!showCard && inView) {
    setShowCard(true)
  }

  const AnimatedQGProgress = animated(QGProgress)
  const AnimatedText = animated(Text)
  const AnimatedCard = animated(Card)

  const cardProps = useSpring({
    ref: containerRef,
    width: showCard ? '100%' : '0%',
    from: { width: '0%' },
    config: {
      tension: 400,
      duration: 150,
    },
  })

  const opacityProps = useSpring({
    ref: textRef,
    opacity: showCard ? 1 : 0,
    from: { opacity: 0 },
  })

  const statsFillProps = useSprings(
    memberStats.length,
    memberStats.map((item, index) => ({
      ref: statsFillRef,
      item: StatNames[item],
      delay: index * delayValue,
      to: [
        { opacity: showCard ? 1 : 0 },
        { value: showCard ? member.stats[item] : 0 },
      ],
      from: { opacity: 0, value: 0 },
      config: {
        tension: 400,
      },
    }))
  )

  useChain([containerRef, textRef, statsFillRef])

  return (
    <Grid xs={6}>
      <div ref={ref}>
        <AnimatedCard
          shadow
          style={{
            backgroundColor: theme.palette.accents_1,
            opacity: 0.95,
            ...cardProps,
          }}
          className={styles.card}
        >
          <AnimatedText
            h3
            style={{ textTransform: 'uppercase', ...opacityProps }}
          >
            {member.name}
          </AnimatedText>

          {statsFillProps.map(({ value, ...rest }: any, index) => {
            return (
              <div
                className={styles.progress_container}
                style={{ color: theme.palette.secondary }}
              >
                <AnimatedText small style={opacityProps}>
                  {StatNames[index]}
                </AnimatedText>
                <AnimatedQGProgress key={index} percent={value} style={rest} />
              </div>
            )
          })}

          <animated.div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'baseline',
              ...opacityProps,
            }}
          >
            {member.perks.map((p) => (
              <Perk perk={p} style={opacityProps} />
            ))}
          </animated.div>
        </AnimatedCard>
      </div>
    </Grid>
  )
}
