import { Grid, Text, useTheme } from '@geist-ui/react'

export const HeadingInfo = () => {
  const theme = useTheme()
  return (
    <Grid.Container justify="center" alignItems="center" direction="column">
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
        <Text h2 style={{ fontWeight: 500 }}>
          December 27, 2020
        </Text>
      </Grid>
    </Grid.Container>
  )
}
