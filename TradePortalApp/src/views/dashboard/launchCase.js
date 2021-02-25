import React, { lazy } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CLink,
    CLabel,
    CInput,
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

                                    <CLabel htmlFor="Product">Product</CLabel>
                                    <CInput id="productl" placeholder="Enter your Product Name" />
                                    <br />
                                    <CLabel htmlFor="SubProduct">Sub Product</CLabel>
                                    <CInput id="subproductl" placeholder="Enter your Sub Product Name" />
                                    <br />
                                    <CLabel htmlFor="Operation">Operation</CLabel>
                                    <CInput id="operationl" placeholder="Enter your Operation Name" />
                                    <br />
                                    <div>
                                    <FileUpload />
                                    </div>
                                   
                                    
                                    <br />
                                    <br />
                                    <CRow>
                                        <CCol xs="6">
                                            <Link to="/dashboard">
                                                <CButton color="primary" className="px-4">Submit</CButton>
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