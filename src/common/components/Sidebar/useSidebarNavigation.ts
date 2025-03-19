import { DashboardSquareEditIcon, UserGroupIcon } from '@hugeicons/react-pro'
import { NavigationItemProps } from '@core/ui'

const getDashboardNavigation = () => {
  return {
    Icon: DashboardSquareEditIcon,
    text: 'dashboard',
    url: '/',
    isDisabled: false,
  }
}

const getModule1Navigation = () => {
  return {
    Icon: UserGroupIcon,
    text: 'module1',
    url: '/module1',
    isDisabled: false,
  }
}

const useSidebarNavigation = () => {
  const navigationItems: NavigationItemProps[] = [getDashboardNavigation(), getModule1Navigation()]

  return {
    navigationItems,
  }
}

export default useSidebarNavigation
