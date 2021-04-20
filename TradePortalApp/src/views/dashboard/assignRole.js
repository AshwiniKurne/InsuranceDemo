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
          <CCol xs="3">
			
			<CFormGroup>

            <CLabel htmlFor="company">User Id</CLabel>

            <CInput id="company" placeholder="Enter User Id"/>

			</CFormGroup>
          </CCol>
		  <CCol xs="4" style={{marginTop:'22px'}}>
        
            <CFormGroup>
                <CButton color="warning" className="px-4" onClick={search.bind(this)} >
                <CIcon name="cilSearch" />&nbsp;Search</CButton>
                
            </CFormGroup>
        
		</CCol>
        </CFormGroup>
        <br/>
		<div id="hiddenData" >
          <CFormGroup row>
            <CCol md="2">
              <CLabel htmlFor="text-input">Name</CLabel>
            </CCol>
            <CCol xs="12" md="3">
              <CInput id="text-input" name="text-input" placeholder="" disabled value ='User001'/>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="2">
              <CLabel htmlFor="email-input">Email Id</CLabel>
            </CCol>
            <CCol xs="12" md="3">
              <CInput type="email" id="email-input" name="email-input" placeholder="" autoComplete="email" disabled value ='user001@abcltd.com'/>
            </CCol>
          </CFormGroup>
         
         
          <CFormGroup row>
            <CCol md="2">
              <CLabel htmlFor="date-input">User Roles</CLabel>
            </CCol>
            <CCol xs="12" md="4">
            
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Maker</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Checker</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Admin</CLabel>
                    </CFormGroup>
                  
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