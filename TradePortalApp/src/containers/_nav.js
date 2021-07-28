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
    name: 'Create New Claim',
    to: '/launchCase',
    icon: <CIcon name="cil-paper-plane" customClasses="c-sidebar-nav-icon"/>
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Inbox',
    to: '/dashboard',
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
    icon: <CIcon name="cil-envelope-open" customClasses="c-sidebar-nav-icon"/>
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Search',
    to: '/trashedCases',
    // icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
    icon: <CIcon name="cilSearch" customClasses="c-sidebar-nav-icon"/>
    
  },
 
  {
    _tag: 'CSidebarNavItem',
    name: 'Reports',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Logout',
    to: '/Login',
    icon: 'cil-scrubber',
    
  }
 
 
]

export default _nav
