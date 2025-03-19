import { lazy, ReactElement, Suspense } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { GlobalStyles, Box } from '@mui/joy'
import { PageSkeleton, scTheme } from '@core/ui'

const MyModule1 = lazy(() => import('modules/module1'))
const DashboardRoute = lazy(() => import('modules/dashboard'))

const ModuleRoutes = (): ReactElement => {
  return (
    <Box display='flex' flexGrow={1}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: scTheme.palette.customColors.masterBg,
          },
        }}
      />
      <Routes>
        <Route path='/*' element={<Navigate to='/' replace />} />
        <Route path='/' element={<DashboardRoute />} />
        <Route path='module1/*' element={<MyModule1 />} />
      </Routes>
    </Box>
  )
}

const AppRoutes = (): ReactElement => {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route path='*' element={<ModuleRoutes />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
