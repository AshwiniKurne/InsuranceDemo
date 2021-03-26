import React from 'react'
import CIcon from '@coreui/icons-react'




const _nav =  [
 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'UMS',
   
    icon: 'cil-user',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add User',
        to: '/addUser',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'User Role Mapping',
        to: '/assignRole',
       
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
