import { CircularProgress } from '@core/ui'
import { Box } from '@mui/joy'

const Loader = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' width='100%' height='100%'>
      <CircularProgress size='lg' />
    </Box>
  )
}

export default Loader
