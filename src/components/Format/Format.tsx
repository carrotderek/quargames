import { Grid, Image, Text, useTheme } from '@geist-ui/react'
import styles from './Format.module.css'

export const Format = () => {
  const theme = useTheme()
  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundColor: theme.palette.accents_1 }}
      >
        <Grid.Container
          style={{ height: '100%', width: '1200px', margin: '90px auto' }}
          gap={2}
          justify="center"
          alignItems="center"
        >
          <Grid xs={24} style={{ textAlign: 'center' }}>
            <Text
              id="teams"
              h2
              style={{
                color: theme.palette.secondary,
                fontWeight: 800,
                fontSize: '56px',
              }}
            >
              Format
            </Text>
            <p className={styles.subtitle}>
              Win games to score points for your team. The team with the most
              points after 3 rounds will be declared the{' '}
              <strong style={{ fontWeight: 600 }}>
                QUARGAMES<sup>TM</sup> CHAMPION.
              </strong>
            </p>

            <p className={styles.text}>
              In the first round, your team’s individual competency will be
              tested, as you compete in 4 grueling 1v1v1 matches. (each player
              may only compete once in this round), each match win will score 1
              point for your team.
            </p>

            <p className={styles.text}>
              In the second round, your team’s tag-team cohesion will be on
              trial in 2 2v2 games, each match win will score 2 points for your
              team and runner-ups will score 1 point.
            </p>

            <p className={styles.text}>
              The third round will be the ultimate assessment of teamwork,
              compassion, interdependency and teamwork, as we really find out
              the answer to the proverbial question “Where is Everyone?”.
            </p>

            <p className={styles.text}>
              Each match win will net teams 3 points and 2 points for the runner
              up. In the event of a tie, a secret tiebreaker game will be
              played.
            </p>

            <Image src="/assets/bracket.png" />
          </Grid>
        </Grid.Container>
      </div>
    </>
  )
}
