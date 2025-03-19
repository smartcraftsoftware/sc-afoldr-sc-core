import GlobalStyles from 'app/theme/GlobalStyles'
import { lazy } from 'react'

const AppRoutes = lazy(() => import('../AppRoutes'))
const Sidebar = lazy(() => import('../../common/components/Sidebar/Sidebar'))

export const AuthenticatedPage = () => {
  return (
    <>
      <Sidebar />
      <GlobalStyles />
      <AppRoutes />
    </>
  )
}
