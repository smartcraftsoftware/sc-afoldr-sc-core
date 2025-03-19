import { Box, useTheme } from '@mui/joy'
import { Divider, Link, Page, PageHeader, Typography } from '@core/ui'
import Module1Component from './Module1Component'
import { useNavigate } from 'react-router-dom'

const Module1 = () => {
  const theme = useTheme()
  const navigate = useNavigate()

  const module1Text = 'Module 1 title'

  return (
    <Page header={<PageHeader title={module1Text} description='Module 1 description' />} container='spacious'>
      <Divider />
      <Box pt={theme.spacing(3)}>
        <Typography>Module 1</Typography>
        <Module1Component />
        <Link onClick={() => navigate(`/module1/${'some_dynamic_id_supposedly'}`)}>Module1</Link>
      </Box>
    </Page>
  )
}
export default Module1
