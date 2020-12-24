import { Grid, Text, useTheme } from '@geist-ui/react'

export const HeadingInfo = ({ style }) => {
  const theme = useTheme()
  return (
    <Grid.Container
      justify="center"
      alignItems="center"
      direction="column"
      style={{ zIndex: 1, ...style }}
    >
      <Grid xs={24}>
        <Text
          b
          style={{
            color: theme.palette.secondary,
            fontWeight: 400,
            textTransform: 'uppercase',
          }}
        ></Text>
      </Grid>
      <Grid xs={24}>
        <Text
          h2
          style={{
            color: theme.palette.secondary,
            fontWeight: 500,
            letterSpacing: '10px',
            textTransform: 'uppercase',
          }}
        >
          December 27, 2020
        </Text>
      </Grid>
    </Grid.Container>
  )
}
