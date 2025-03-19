import { Typography } from '@core/ui'
import { ENUM_1 } from '../constants/consts'

const Module1Component = () => {
  return (
    <>
      <Typography>Module 1 Component</Typography>
      <br />
      from the constants:
      <Typography>{ENUM_1.OPTION_1}</Typography>
      <Typography>{ENUM_1.OPTION_2}</Typography>
      <br />
    </>
  )
}

export default Module1Component
