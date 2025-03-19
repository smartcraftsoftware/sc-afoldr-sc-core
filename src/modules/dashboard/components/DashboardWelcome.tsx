import { Stack, useTheme } from '@mui/joy'
import { Typography } from '@core/ui'

const DashboardWelcome = () => {
  const theme = useTheme()

  return (
    <Stack
      p={3}
      gap={2}
      sx={{ border: `1px solid ${theme.palette.customColors.section.border}`, borderRadius: theme.radius.sm }}
      direction='row'
      justifyContent='space-between'
      flexWrap={{ xs: 'wrap', md: 'nowrap' }}
    >
      <Stack>
        <Typography level='h2'>Welcome</Typography>
        <Typography>You can start here</Typography>
      </Stack>
    </Stack>
  )
}

export default DashboardWelcome
