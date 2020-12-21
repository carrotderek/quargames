import { Divider } from '@geist-ui/react'

interface Props {
  width?: number | string
}

export const QGDivider = ({ width = '85%' }: Props) => {
  return (
    <div style={{ width }}>
      <Divider />
    </div>
  )
}
