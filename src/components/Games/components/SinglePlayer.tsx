import { Grid, Image, Text, useTheme } from '@geist-ui/react'
import { Game } from '../types'

interface Props {
  series: Game[]
  seriesType: string
}

export const SinglePlayer = ({ series, seriesType }: Props) => {
  const theme = useTheme()

  return (
    <Grid.Container
      gap={2}
      justify="center"
      style={{
        height: '100%',
        width: '1200px',
        margin: '100px auto -19px',
      }}
    >
      <Grid xs={24} style={{ textAlign: 'center' }}>
        <Text
          h2
          style={{
            color: theme.palette.secondary,
            fontWeight: 800,
            fontSize: '56px',
            textTransform: 'uppercase',
            marginBottom: '60px',
          }}
        >
          {seriesType}
        </Text>
      </Grid>

      {series.map((game, index) => (
        <Grid.Container
          justify="center"
          direction={index % 2 === 0 ? 'row' : 'row-reverse'}
        >
          <Grid key={index} xs={12}>
            <Image
              src={`/assets/${game.asset}`}
              style={{ backgroundSize: 'cover' }}
            />
          </Grid>
          <Grid key={index} xs={12} style={{ padding: '0 30px' }}>
            <Text p style={{ fontWeight: 300, marginTop: '140px' }}>
              {game.description}
            </Text>
            <div style={{ marginTop: '60px' }}>
              <Text h4 style={{ fontSize: '18px', fontWeight: 400 }}>
                Special Rules:
              </Text>
              <ul>
                {game.rules.map((rule, index) => (
                  <li key={index} style={{ fontWeight: 300 }}>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
        </Grid.Container>
      ))}
    </Grid.Container>
  )
}
