import { darkOnlyTheme, Navigation } from '@core/ui'
import { Box, CssVarsProvider, useTheme } from '@mui/joy'
import { ReactElement } from 'react'
import useSidebarNavigation from './useSidebarNavigation'
import Logo from './Logo'
import { ZINDEX_NAV } from './constants'

const Sidebar = (): ReactElement => {
  const theme = useTheme()
  const isSmallScreenHeight = window.innerHeight < 725

  const boxStyles = {
    position: 'fixed',
    height: '100vh',
    padding: theme.spacing(1),
    paddingBottom: isSmallScreenHeight ? theme.spacing(3) : theme.spacing(1),
    backgroundColor: theme.palette.customColors.masterBg,
    overflowX: 'hidden',
    overflowY: isSmallScreenHeight ? 'scroll' : 'hidden',
    width: theme.spacing(12),
    zIndex: ZINDEX_NAV,
  }

  const { navigationItems } = useSidebarNavigation()

  const renderNavigation = () => <Navigation items={navigationItems} />

  return (
    <CssVarsProvider theme={darkOnlyTheme}>
      <Box sx={boxStyles}>
        <Logo />
        {renderNavigation()}
      </Box>
    </CssVarsProvider>
  )
}

export default Sidebar
