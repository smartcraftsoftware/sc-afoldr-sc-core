import { Divider, Page, PageHeader, Typography } from '@core/ui'
import { Box, useTheme } from '@mui/joy'
import { useParams } from 'react-router-dom'

const Module1Feature = () => {
  const theme = useTheme()
  const { id } = useParams<{ id: string }>()
  return (
    <Page header={<PageHeader title='Module 1 Feature Title' />} container='spacious'>
      <Divider />
      <Box pt={theme.spacing(3)}>
        <Typography>Module 1 Feature displaying id: {id}</Typography>
        <Typography>check! it's also in the url.</Typography>
      </Box>
    </Page>
  )
}

export default Module1Feature
