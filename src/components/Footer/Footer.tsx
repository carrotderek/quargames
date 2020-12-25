import { Divider, Grid, Text } from '@geist-ui/react'

export const Footer = () => (
  <footer>
    <Grid.Container
      justify="center"
      style={{
        height: '100%',
        width: '1200px',
        margin: '100px auto',
      }}
    >
      <Grid xs={24}>
        <Divider style={{ marginBottom: '50px' }} />
        <Text
          p
          style={{ textAlign: 'center', fontWeight: 300, fontSize: '20px' }}
        >
          &copy;2020 by FR11
        </Text>
      </Grid>
    </Grid.Container>
  </footer>
)
