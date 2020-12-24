import { Grid, Row, Text, useTheme } from '@geist-ui/react'
import { TIME_UNIT_NAMES } from './constants'

interface Props {
  duration: string
  value: Number
}

export const TimeUnit = ({ duration, value }: Props) => {
  const theme = useTheme()

  return (
    <Grid
      justify="center"
      alignItems="center"
      direction="column"
      style={{
        textAlign: 'center',
        margin: '0 60px',
      }}
    >
      <Text
        style={{
          color: theme.palette.secondary,
          fontSize: '80px',
          fontWeight: 600,
          margin: 0,
        }}
      >
        {value}
      </Text>
      <Text
        small
        style={{
          color: theme.palette.secondary,
          fontWeight: 400,
          textTransform: 'uppercase',
        }}
      >
        {TIME_UNIT_NAMES[duration]}
      </Text>
    </Grid>
  )
}
