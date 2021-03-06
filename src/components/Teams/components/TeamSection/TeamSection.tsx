import { Grid, Spacer, Text, useTheme } from '@geist-ui/react'
import { TeamConfigs } from '../../data/types'
import { MemberCard } from '../MemberCard/MemberCard'

interface Props {
  teamId: string
  members: []
}
export const TeamSection = ({ teamId, members }: Props) => {
  const theme = useTheme()
  const team = TeamConfigs[teamId]

  return (
    <>
      <Grid.Container
        style={{
          background: `url('assets/${team.background}.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: '10%',
          height: '100%',
        }}
        gap={2}
        justify="center"
        alignItems="center"
      >
        <Grid.Container style={{ width: '1200px', padding: '60px 0 30px' }}>
          <Grid xs={24}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '25px',
              }}
            >
              <img
                src={`/assets/${team.icon}.svg`}
                style={{ width: '35px', marginRight: '15px' }}
              />
              <Text
                h3
                style={{
                  fontSize: '24px',
                  fontWeight: 400,
                  letterSpacing: '6px',
                  marginBottom: 0,
                  textTransform: 'uppercase',
                }}
              >
                Team {team.name}
              </Text>
            </div>
          </Grid>

          <Grid.Container gap={2} style={{ marginBottom: '90px' }}>
            {members.map((m) => (
              <MemberCard member={m} />
            ))}
          </Grid.Container>
        </Grid.Container>
      </Grid.Container>
      <Spacer y={2} />
    </>
  )
}
