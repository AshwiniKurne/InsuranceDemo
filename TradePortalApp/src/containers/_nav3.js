import React from 'react'
import CIcon from '@coreui/icons-react'




const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/newDashboard',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>
    
  },
 
  {
    _tag: 'CSidebarNavItem',
    name: 'Inbox',
    to: '/dashboard',
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
    icon: <CIcon name="cil-envelope-open" customClasses="c-sidebar-nav-icon"/>
    
  },
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Reports',
    route: '/reports',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'MIS View',
        to: '/charts/MISCharts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Charts View',
        to: '/charts',
        icon: 'cil-chart-pie'
      }
    ],
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/Login',
    icon: 'cil-scrubber',
    
  },
 
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
