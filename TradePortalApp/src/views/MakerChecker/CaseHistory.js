import React, { Component } from 'react';


import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow
  } from '@coreui/react'

  const CaseHistory = () => {
    const fields = ['Stage','Status', 'Received', 'Completed','Comments','CompletedBy']
    const usersData =[
        {Stage: 'Maker', Status: 'Completed', Received: '2021/23/03', Completed: '2021/24/03', Comments: 'submit',CompletedBy :"Maker"},
        {Stage: 'Checker', Status: 'Pending', Received: '2021/24/03', Completed: '', Comments: '',CompletedBy :""},
    ];

        return (
            <>
      <CRow>
        <CCol xs="12" >
          <CCard id ="caseHistory">
            
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              itemsPerPage={5}
              pagination
              
            />
            </CCardBody>
          </CCard>
        </CCol>
        </CRow>
        </>
        )
    
}

export default CaseHistory
