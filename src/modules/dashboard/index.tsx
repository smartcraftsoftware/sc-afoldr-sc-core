import { ReactElement, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Dashboard = lazy(() => import('./features/Dashboard'))

const DashboardRoute = (): ReactElement => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  )
}

export default DashboardRoute
