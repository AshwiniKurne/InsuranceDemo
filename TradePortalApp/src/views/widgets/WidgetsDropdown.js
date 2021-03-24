import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header="320"
          text="Request Initiated"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[65, 59, 34, 47, 50, 25, 40]}
              pointHoverBackgroundColor="primary"
              label=""
              labels="months"
            />
          }
        >

          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
              <CDropdownItem disabled>Weekly</CDropdownItem>
              <CDropdownItem>Monthly</CDropdownItem>
              <CDropdownItem>Quaterly</CDropdownItem>
              <CDropdownItem>Half Yearly</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>

        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
        
          color="gradient-info"
          header="112"
          text="Request Pending"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{height: '70px'}}
              dataPoints={[1, 18, 9, 17, 34, 22, 11]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 }}}}
              label=""
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem disabled>Weekly</CDropdownItem>
              <CDropdownItem>Monthly</CDropdownItem>
              <CDropdownItem>Quaterly</CDropdownItem>
              <CDropdownItem>Half Yearly</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>

        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header="178"
          text="Request Processed"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              pointed
              style={{height: '70px'}}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[28, 41, 30, 15, 24, 32, 10]}
              options={{ elements: { line: { borderWidth: 2.5 }}}}
              pointHoverBackgroundColor="warning"
              label=""
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem disabled>Weekly</CDropdownItem>
              <CDropdownItem>Monthly</CDropdownItem>
              <CDropdownItem>Quaterly</CDropdownItem>
              <CDropdownItem>Half Yearly</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header="70"
          text="Request Terminated"
          footerSlot={
            <ChartBarSimple
              className="mt-3 mx-3"
              style={{height: '70px'}}
              backgroundColor="rgb(250, 152, 152)"
              dataPoints={[5,10, 12, 15, 9, 14, 7, 10]}
              label=""
              labels="months"
            />
          }
        >
          <CDropdown>
            <CDropdownToggle color="transparent">
              <CIcon name="cil-settings"/>
            </CDropdownToggle>
            <CDropdownMenu className="pt-0" placement="bottom-end">
            <CDropdownItem disabled>Weekly</CDropdownItem>
              <CDropdownItem>Monthly</CDropdownItem>
              <CDropdownItem>Quaterly</CDropdownItem>
              <CDropdownItem>Half Yearly</CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
