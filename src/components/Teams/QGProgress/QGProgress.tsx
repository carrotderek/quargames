import { Progress, Text, useTheme } from '@geist-ui/react'

export const QGProgress = ({ percent, style }) => {
  const theme = useTheme()
  const colors = {
    50: theme.palette.error,
    70: theme.palette.warning,
    100: theme.palette.cyan,
  }

  const number = percent < 1 ? 0 : percent > 99 ? 100 : percent.toPrecision(2)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        ...style,
      }}
    >
      <Progress colors={colors} value={percent} />
      <Text small b style={{ marginLeft: '15px' }}>
        {number}
      </Text>
    </div>
  )
}
