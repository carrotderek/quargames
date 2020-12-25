import { Divider, Grid, Image, Text, useTheme } from '@geist-ui/react'
import { Game } from '../types'

interface Props {
  series: Game[]
  seriesType: string
}

export const Multiplayer = ({ series, seriesType }: Props) => {
  const theme = useTheme()
  return (
    <Grid.Container
      gap={2}
      justify="center"
      style={{ height: '100%', width: '1200px', margin: '100px auto' }}
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
        <Grid
          key={index}
          xs={12}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Image src={`/assets/${game.asset}`} width={575} height={475} />
          <Text p style={{ fontWeight: 300, marginTop: '60px' }}>
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
      ))}
    </Grid.Container>
  )
}
