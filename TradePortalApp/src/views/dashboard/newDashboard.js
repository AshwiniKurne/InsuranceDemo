import React, { lazy } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

import usersData from '../users/inboxData1';
import UserContext from '../../UserContext';

const getBadge = Status => {
  switch (Status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['Txn_No','Product', 'Sub-Product', 'Operation', 'Currency', 'Amount', 'Party Name', 'Bank Ref No', 'Ref No', 'Date Time','Status']

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

class newDashboard extends React.Component {
  static contextType = UserContext;
  constructor(props){
    super(props);
    this.state={
      userN:'',
  
    }
  }

  componentDidMount() {
    const user = this.context;

    console.log(JSON.stringify(user)) ;
    console.log(user);
    console.log(user.user.name);
    this.setData(user.user.name);
    }

    setData = (e) =>{

      this.setState({
        userN : e,
      })
      console.log("value of user state2 "+this.state.userN); 
    }
render(){
  return (
    
    <>
    <WidgetsDropdown></WidgetsDropdown>
    
    <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Past Transactions
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={7}
              pagination
              scopedSlots = {{
                'Status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.Status)}>
                        {item.Status}
                      </CBadge>
                    </td>
                  )

              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}
}
export default newDashboard