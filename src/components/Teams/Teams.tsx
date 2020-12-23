import { Grid, Text, useTheme } from '@geist-ui/react'
import { TeamSection } from './components/TeamSection/TeamSection'
import { TeamNames } from './data/types'
import styles from './Teams.module.css'
import personnel from './data/personnel.json'

export const Teams = () => {
  const teams = Object.keys(TeamNames)
  const theme = useTheme()
  const membersByTeam = personnel.reduce((acc, currentPerson) => {
    if (!acc[currentPerson.team]) {
      acc[currentPerson.team] = [currentPerson]
    } else {
      acc[currentPerson.team].push(currentPerson)
    }

    return acc
  }, {})

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: theme.palette.accents_1 }}
    >
      <Grid.Container
        style={{ height: '100%', width: '1200px', margin: '0 auto' }}
        gap={2}
        justify="center"
        alignItems="center"
      >
        <Grid xs={24} justify="center">
          <Text h2 style={{ fontWeight: 600 }}>
            The teams
          </Text>
        </Grid>

        {teams.map((t) => (
          <TeamSection teamId={t} members={membersByTeam[t]} />
        ))}
      </Grid.Container>
    </div>
  )
}
