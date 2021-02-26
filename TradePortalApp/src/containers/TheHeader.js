import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CSubheader,
  CHeaderNav,
  CBreadcrumbRouter
} from '@coreui/react'


// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
      



      

    <div class="col-sm-10">
    <CSubheader className="px-3 justify-content-between">
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
        
          <div className="d-md-down-none mfe-2 c-subheader-nav">
            
        
          </div>

      </CSubheader>

    </div>
    <div class="col-sm-2">
      <CHeaderNav className="px-3">
            <TheHeaderDropdownNotif/>
            <TheHeaderDropdown/>
        </CHeaderNav>
</div>

    </CHeader>

    
  )
}

export default TheHeader
