import { Grid, Spacer, Text, useTheme } from '@geist-ui/react'
import { TeamSection } from './components/TeamSection/TeamSection'
import { TeamConfigs } from './data/types'
import styles from './Teams.module.css'
import personnel from './data/personnel.json'

export const Teams = () => {
  const teams = Object.keys(TeamConfigs)
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
    <>
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
          <Grid xs={24} justify="center" style={{ textAlign: 'center' }}>
            <Text id="teams" h2 style={{ fontWeight: 600, fontSize: '48px' }}>
              The teams
            </Text>
          </Grid>
        </Grid.Container>
      </div>
      {teams.map((t) => (
        <TeamSection teamId={t} members={membersByTeam[t]} />
      ))}
    </>
  )
}
