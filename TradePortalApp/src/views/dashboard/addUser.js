import React, { Fragment, useState } from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,CModal,CModalBody,CModalFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom';
import { DocsLink } from 'src/reusable'
const AddUser = () => {
    const [modal, setModal] = useState(false);

	const toggle = ()=>{
    setModal(!modal);
	}

    return (

<>
<CRow>
  <CCol xs="12" >	

<CCard>
      <CCardHeader>
       Add User
       
      </CCardHeader>
      <CCardBody>
        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
          
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">Username</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="text-input" name="text-input" placeholder="Enter Username" />
              
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">UserID</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="text-input" name="text-input" placeholder="Enter UserID" />
              
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="email-input">Email Id</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
              
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="password-input">Password</CLabel>
            </CCol>
            
            <CCol xs="12" md="9">
              <CInput type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
              
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="password-input">Confirmed Password</CLabel>
            </CCol>
            
            <CCol xs="12" md="9">
              <CInput type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
              
            </CCol>
          </CFormGroup>
          
          
          
        </CForm>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit"  color="success" onClick={toggle}><CIcon name="cil-scrubber" /> Submit</CButton>&nbsp;&nbsp;
        <CButton type="reset"  color="warning"><CIcon name="cil-ban" /> Reset</CButton>
        
        <CModal show={modal} onClose={toggle}>
					 <CModalBody>User Created Successfully.
					 </CModalBody>
					<CModalFooter>
					<Link to="/dashboard">
					<CButton color="primary">OK</CButton>
					</Link>
					{' '}
					
					</CModalFooter>
				
				</CModal>   
      </CCardFooter>
    </CCard>
    


  </CCol>	
  </CRow>
 
              
   </>
    )
}

export default AddUser