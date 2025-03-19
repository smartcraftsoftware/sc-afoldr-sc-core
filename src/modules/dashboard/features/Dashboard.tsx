import { Page } from '@core/ui'
import DashboardWelcome from '../components/DashboardWelcome'
import DashboardBanner from '../components/DashboardBanner'

const Dashboard = () => {
  return (
    <Page container='spacious' header={<DashboardWelcome />}>
      <DashboardBanner />
    </Page>
  )
}
export default Dashboard
