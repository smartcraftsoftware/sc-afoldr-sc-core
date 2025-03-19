import { ReactElement, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Module1 = lazy(() => import('./components/Module1'))
const Module1Feature = lazy(() => import('./features/Module1Feature'))

const Module1Route = (): ReactElement => {
  return (
    <Routes>
      <Route index element={<Module1 />} />
      <Route path=':id' element={<Module1Feature />} />
    </Routes>
  )
}

export default Module1Route
