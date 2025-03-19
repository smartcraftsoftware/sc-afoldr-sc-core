import { ReactElement } from 'react'
import { Stack } from '@mui/joy'
import { UserIcon } from '@hugeicons/react-pro'

const Logo = (): ReactElement => {
  return (
    <Stack justifyContent='center' alignItems='center' direction='row' sx={{ py: 2 }}>
      <UserIcon fontSize='large' color='white' />
    </Stack>
  )
}

export default Logo
