import { Grid } from '@geist-ui/react'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { TimeUnit } from './components/TimeUnit/TimeUnit'
import data from './data/data.json'

export const Countdown = ({ style }) => {
  const datetime = moment(data.startDate)
  const [date, setDate] = useState(null)
  const [durations, setDurations] = useState({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  })

  useEffect(() => {
    setDate(datetime)
  }, [])

  useEffect(() => {
    let interval = null
    if (date) {
      interval = setInterval(() => {
        const now = moment()
        const duration = moment.duration(date.diff(now))

        setDurations({
          days: duration.days(),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        })
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [date])

  const durationKeys = Object.keys(durations)
  const animatedStyles = date ? style : null
  return (
    <Grid.Container
      gap={4}
      justify="center"
      alignItems="center"
      style={{
        marginBottom: '40px',
        padding: '20px 50px',
        width: '1200px',
        zIndex: 1,
        ...animatedStyles,
      }}
    >
      <Grid
        xs={24}
        justify="center"
        alignContent="center"
        style={{ textAlign: 'center', paddingBottom: '0px' }}
      ></Grid>
      {durationKeys.map((key, index) => (
        <>
          <TimeUnit key={index} duration={key} value={durations[key]} />
        </>
      ))}
    </Grid.Container>
  )
}
