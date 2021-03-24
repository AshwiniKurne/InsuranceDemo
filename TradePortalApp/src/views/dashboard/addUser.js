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
          



        
              <CForm action="" method="post">
                <CRow>
                  <CCol sm="4">
                    <CFormGroup>
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>Username</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="email" id="username3" name="username3" autoComplete="name"/>
                        <CInputGroupAppend>
                          <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </CFormGroup>
                  </CCol>
                  <CCol sm="4">
                    <CFormGroup>
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>User Id</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="email" id="userId" name="userId" autoComplete="username"/>
                        <CInputGroupAppend>
                          <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </CFormGroup>
                  </CCol>
                  <CCol sm="4">
                    <CFormGroup>
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>Email</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="email" id="email" name="email" autoComplete="current-password"/>
                        <CInputGroupAppend>
                          <CInputGroupText><CIcon name="cil-envelope-closed" /></CInputGroupText>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </CFormGroup>
                  </CCol>
                </CRow>

                <CRow>
                  <CCol sm="4">
                  <CFormGroup>
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>Password</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" id="password3" name="password3" autoComplete="current-password"/>
                        <CInputGroupAppend>
                          <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </CFormGroup>
                  </CCol>
                  <CCol sm="4">
                    <CFormGroup>
                      <CInputGroup>
                        <CInputGroupPrepend>
                          <CInputGroupText>Confirm Password</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput type="password" id="password3" name="password3" autoComplete="current-password"/>
                        <CInputGroupAppend>
                          <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </CFormGroup>
                  </CCol>
                  <CCol sm="4">
                    
                  </CCol>
                </CRow>

                
              </CForm>
            




          
          
        </CForm>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit" size="sm" color="success" onClick={toggle}><CIcon name="cil-scrubber" /> Submit</CButton>&nbsp;&nbsp;
        <CButton type="reset" size="sm" color="warning"><CIcon name="cil-ban" /> Reset</CButton>
        
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