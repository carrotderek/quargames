import { Grid, useTheme } from '@geist-ui/react'
import { GamesMapping, GameTypes } from '../Teams/data/types'
import { Multiplayer } from './components/MultiPlayer'
import { SinglePlayer } from './components/SinglePlayer'
import styles from './Games.module.css'

export const Games = () => {
  const gameSeries = GamesMapping
  const theme = useTheme()

  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: theme.palette.accents_2 }}
      >
        <Grid.Container gap={2}>
          <SinglePlayer
            series={gameSeries[GameTypes.SeriesOne]}
            seriesType={GameTypes.SeriesOne}
          />
        </Grid.Container>
      </div>

      <div
        className={styles.container}
        style={{
          backgroundColor: theme.palette.accents_1,
        }}
      >
        <Grid.Container gap={2} style={{ flexDirection: 'column' }}>
          <Multiplayer
            series={gameSeries[GameTypes.SeriesTwo]}
            seriesType={GameTypes.SeriesTwo}
          />

          <Multiplayer
            series={gameSeries[GameTypes.SeriesThree]}
            seriesType={GameTypes.SeriesThree}
          />
        </Grid.Container>
      </div>
    </>
  )
}
