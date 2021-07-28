import React ,{useContext} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CLabel,
  CImg,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav';
import navigation2 from './_nav2';
import navigation3 from './_nav3';
import navigation4 from './_nav4';
// import sglogo from './datamatics.jpg';
import sglogo from './Dgsl_Logo.jpg';


import UserContext from '../UserContext';

const TheSidebar = () => {
 const user =useContext(UserContext);
console.log("user value at sidebar ",user.user.name);
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
 
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
      
      <img src={sglogo} alt="DGSL Logo" />
  
      </CSidebarBrand>
      <CSidebarNav>
      {user.user.name =='Maker'?(<CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />):(user.user.name == 'Checker'?(<CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />):(user.user.name == 'Admin'?(
		<CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
		):(<CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />)))}
        
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
