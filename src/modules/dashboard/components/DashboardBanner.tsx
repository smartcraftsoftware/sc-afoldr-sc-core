import { Stack, Typography, useTheme } from '@mui/joy'

const DashboardBanner = () => {
  const theme = useTheme()

  return (
    <Stack
      direction='row'
      mb={3}
      p={8}
      gap={7}
      sx={{
        backgroundColor: theme.palette.primary.softBg,
        border: `1px solid ${theme.palette.customColors.section.border}`,
        borderRadius: theme.radius.sm,
        height: { xs: 'auto', md: '328px', xl: '500px' },
      }}
      flexWrap={{ xs: 'wrap', md: 'nowrap' }}
    >
      <Stack justifyContent='center' alignItems='flex-start' spacing={3}>
        <Typography level='h2' sx={{ color: theme.palette.text.primary }}>
          The Dashboard
        </Typography>
      </Stack>
    </Stack>
  )
}

export default DashboardBanner
