import React, { Fragment, useState,useEffect } from 'react';
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
const AssignRole = () => {
    const [modal, setModal] = useState(false);
    
	const toggle = ()=>{
    setModal(!modal);
	}
   
  useEffect(() => {
    document.getElementById("hiddenData").style.display="none";

});
const search=()=>{
    console.log("inside search"); 
    document.getElementById("hiddenData").style.display="";
}   
  
return (

<>
<CRow>
  <CCol xs="12" >	

<CCard>
      <CCardHeader>
       User Role Mapping
       
      </CCardHeader>
      <CCardBody>
        <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
        <CFormGroup row className="my-0">
          <CCol xs="4">
			
			<CFormGroup>

            <CLabel htmlFor="company">UserID</CLabel>

            <CInput id="company" placeholder="Enter UserID"/>

			</CFormGroup>
          </CCol>
		  <CCol xs="4" style={{marginTop:'22px'}}>
        
            <CFormGroup>
                <CButton color="warning" className="px-4" onClick={search.bind(this)} >
                <CIcon name="cilSearch" />&nbsp;Search</CButton>
                
            </CFormGroup>
        
		</CCol>
        </CFormGroup>
		<div id="hiddenData" >
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="text-input">User Name</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="text-input" name="text-input" placeholder="" disabled value ='User001'/>
              
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="email-input">Email Id</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput type="email" id="email-input" name="email-input" placeholder="" autoComplete="email" disabled value ='user001@abcltd.com'/>
              
            </CCol>
          </CFormGroup>
         
         
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="date-input">User Roles</CLabel>
            </CCol>
            <CCol xs="12" md="9">
            <CSelect custom name="select" id="select" value="1">
                      <option value="0">Please select</option>
                      <option value="1">Maker</option>
                      <option value="2">Checker</option>
                      <option value="3">Admin</option>
                    </CSelect>
            </CCol>
          </CFormGroup>
          
          </div>
        </CForm>
		
      </CCardBody>
      <CCardFooter>
        <CButton type="submit"  color="success" onClick={toggle}><CIcon name="cil-scrubber" /> Submit</CButton>&nbsp;&nbsp;
        <CButton type="reset"  color="warning"><CIcon name="cil-ban" /> Reset</CButton>
        
        <CModal show={modal} onClose={toggle}>
					 <CModalBody>User role assigned successfully.
					 </CModalBody>
					<CModalFooter>
					<Link to="/assignRole">
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

export default AssignRole