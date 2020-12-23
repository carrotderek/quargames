import { Grid, Text, useTheme } from '@geist-ui/react'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import { TeamNames } from '../../data/types'
import { MemberCard } from '../MemberCard/MemberCard'

interface Props {
  teamId: string
  members: []
}
export const TeamSection = ({ teamId, members }: Props) => {
  const theme = useTheme()

  return (
    <>
      <Grid xs={24}>
        <Text h3 style={{ color: theme.palette.secondary, fontWeight: 500 }}>
          Team {TeamNames[teamId]}
        </Text>
      </Grid>

      <Grid.Container gap={2} style={{ marginBottom: '90px' }}>
        {members.map((m) => (
          <MemberCard member={m} />
        ))}
      </Grid.Container>
    </>
  )
}
