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
    _children: ['Theme']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Maker Screen',
    //to: '/theme/colors',
    
    to :'/MakerChecker/Maker',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Checker Screen',
    //to: '/theme/typography',
    to :'/MakerChecker/Checker',
    icon: 'cil-user',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
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
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'test',
    to: '/MakerChecker/test',
    icon: 'cil-scrubber',
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'test2',
    to: '/MakerChecker/test2',
    icon: 'cil-scrubber',
    
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
