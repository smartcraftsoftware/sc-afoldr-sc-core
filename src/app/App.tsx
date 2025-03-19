import './theme/fonts.css'
import { ComponentsProvider, ErrorBoundary, SnackbarProvider, scTheme } from '@core/ui'
import { CssVarsProvider, Stack } from '@mui/joy'
import CssBaseline from '@mui/material/CssBaseline'
import { THEME_ID as MATERIAL_THEME_ID, extendTheme as materialExtendTheme, ThemeProvider } from '@mui/material/styles'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import HeaderScripts from './components/HeaderScripts'
import { registerLicenses } from 'licenses'
import { AuthenticatedPage } from './components/AuthenticatedPage'

registerLicenses()

function App() {
  const location = useLocation()

  const themeValue = useMemo(() => ({ [MATERIAL_THEME_ID]: materialExtendTheme() }), [])

  return (
    <ComponentsProvider>
      <SnackbarProvider>
        <ThemeProvider theme={themeValue}>
          <CssBaseline enableColorScheme />
          <CssVarsProvider theme={scTheme}>
            <Stack>
              <HeaderScripts />
              <ErrorBoundary location={location}>
                <AuthenticatedPage />
              </ErrorBoundary>
            </Stack>
          </CssVarsProvider>
        </ThemeProvider>
      </SnackbarProvider>
    </ComponentsProvider>
  )
}

export default App
