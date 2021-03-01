
import React, { Fragment, useState } from 'react';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CLabel,
    CSelect,
    CProgress,
    CFormGroup,CButton,CModal,CModalBody,CModalFooter
} from '@coreui/react';
import FileUpload from '../MakerChecker/FileUpload';
import { Link } from 'react-router-dom';

const LaunchCase = () => {
	const [modal, setModal] = useState(false);

	const toggle = ()=>{
    setModal(!modal);
	}
	
    return (

        <>


            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            Launch Case
            </CCardHeader>
                        <CCardBody>
                            <CFormGroup row className="my-0">

                                <div className='container mt-4'>
                                <CFormGroup row className="my-0">
                                    <CCol>
                                        <CLabel htmlFor="Product">Product</CLabel>
                                        <CSelect id="select"  >
                                            <option value="0" >Please select Product</option>
                                            <option value="1">LC</option>
                                            <option value="2">BG</option>
                                            <option value="3">Collection</option>
                                        </CSelect>
                                    </CCol>
                                    <CCol>
                                        <CLabel htmlFor="SubProduct">Sub Product</CLabel>
                                        <CSelect id="select"  >
                                            <option value="0" >Please select Sub Product</option>
                                            <option value="1">Lodgement</option>
                                            <option value="2">Import</option>
                                            <option value="3">Export</option>
                                        </CSelect>
                                    </CCol>
                                    <CCol>
                                        <CLabel htmlFor="Operation">Operation</CLabel>
                                        <CSelect id="select"  >
                                            <option value="0" >Please select Operation</option>
                                            <option value="1">Issuance</option>
                                            <option value="2">BG</option>
                                            <option value="3">Collection</option>
                                        </CSelect>
                                    </CCol>
                                    </CFormGroup>
                                    <div>
                                    <FileUpload />
                                    </div>
                                   
                                    
                                    <br />
                                    <br />
                                    <CRow>
              <CCol xs="6">
                                            
				<CButton color="primary" onClick={toggle} className="px-4">Launch Case</CButton>
				<CModal show={modal} onClose={toggle}>
					 <CModalBody>Case created successfully with Ref no. 1234567
					 </CModalBody>
					<CModalFooter>
					<Link to="/dashboard">
					<CButton color="primary">OK</CButton>
					</Link>
					{' '}
					
					</CModalFooter>
				
				</CModal>                           
              </CCol>
                                    </CRow>

                                    </div>

                            </CFormGroup>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </>
    )
}

export default LaunchCase