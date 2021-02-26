import React, { lazy } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CLabel,
    CInput,
    CSelect,
    CFormGroup,CButton
} from '@coreui/react';
import FileUpload from '../MakerChecker/FileUpload';
import { Link } from 'react-router-dom';


const launchCase = () => {
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
                                            <Link to="/dashboard">
                                                <CButton color="primary" className="px-4">Launch Case</CButton>
                                            </Link>
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

export default launchCase