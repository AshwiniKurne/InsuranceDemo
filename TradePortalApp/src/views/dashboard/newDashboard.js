import React, { lazy } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CLink,
} from '@coreui/react'

import usersData from '../users/inboxData1'
const fields = ['Txn_No','Product', 'Sub-Product', 'Operation', 'Cust ID', 'Account no', 'Currency', 'Amount', 'Beneficiary Name', 'Bill Ref No', 'Customer Portal Ref No', 'Entry Time']

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))


const newDashboard = () => {
  return (
    
    <>
    <WidgetsDropdown></WidgetsDropdown>
    
    <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Pending Queue
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              sorter
              size="sm"
              itemsPerPage={7}
              pagination
              
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default newDashboard