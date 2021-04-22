import React, { Fragment, useState, useEffect } from 'react';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CLabel,
    CSelect,
    CProgress,
    CFormGroup, CButton, CModal, CModalBody, CModalFooter, CInput, CAlert, CSwitch, CDropdown
} from '@coreui/react';
import FileUpload from '../MakerChecker/FileUpload';
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react'
import { dataCategories } from '../MakerChecker/data';
const LaunchCase = () => {
    const [modal, setModal] = useState(false);
    const[modal2,setModal2] =useState(false);
    const [value2, setValue2] = useState();
    useEffect(() => {
        document.getElementById("copyCreate").style.display = "none";
        document.getElementById("new").style.display = "none";
        document.getElementById("secDiv").style.display = "none";
    });
    const toggle = () => {
        setModal(!modal);
    }
   

    const toggle2 = (e) => {
        console.log("inside toggle2");
        setModal2(!modal2);

        

    }
    const search = () => {
        console.log("inside search" + value2);
        if (value2 == 'copyCreate') {
            document.getElementById("copyCreate").style.display = "";
            document.getElementById("new").style.display = "none";
        } else if (value2 == 'New') {
            document.getElementById("new").style.display = "";
            document.getElementById("copyCreate").style.display = "none";
        } else {
            document.getElementById("firstDiv").style.display = "";
            document.getElementById("new").style.display = "none";
            document.getElementById("copyCreate").style.display = "none";
        }

    }

    const search2 = () => {
        console.log("inside search2");
        document.getElementById("secDiv").style.display = "";

    }

    const selectOperation =(e) =>{
		
		console.log("on change value ",e.target.value);
        var val =e.target.value;

        if(val == "1-Import-LC") {
            var operationN = document.getElementById("operationN");
            operationN.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="Issuance";
            newOption.text="Issuance";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Amendment";
            newOption.text="Amendment";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Realisation";
            newOption.text="Realisation";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Devolvement";
            newOption.text="Devolvement";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Crystalisation";
            newOption.text="Crystalisation";
            operationN.appendChild(newOption);
        }
        if(val == "1-Export-LC") {
            var operationN = document.getElementById("operationN");
            operationN.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="Advising";
            newOption.text="Advising";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Amendment";
            newOption.text="Amendment";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Closure";
            newOption.text="Closure";
            operationN.appendChild(newOption);
        }
        if(val == "2-Import-LC") {
            var operationN = document.getElementById("operationN");
            operationN.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="Lodgement";
            newOption.text="Lodgement";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Acceptance";
            newOption.text="Acceptance";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Realisation";
            newOption.text="Realisation";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Closure";
            newOption.text="Closure";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Devolvement";
            newOption.text="Devolvement";
            operationN.appendChild(newOption);

        }
        if(val == "2-Export-LC") {
            var operationN = document.getElementById("operationN");
            operationN.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="Advising";
            newOption.text="Advising";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Amendment";
            newOption.text="Amendment";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Closure";
            newOption.text="Closure";
            operationN.appendChild(newOption);
        }
        if(val == "3-Open Account") {
            var operationN = document.getElementById("operationN");
            operationN.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="Import Payment";
            newOption.text="Import Payment";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Advance payment";
            newOption.text="Advance payment";
            operationN.appendChild(newOption);

        }
        if(val == "3-Import Bill") {
            var operationN = document.getElementById("operationN");
            operationN.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="Lodgement";
            newOption.text="Lodgement";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Acceptance";
            newOption.text="Acceptance";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Realisation";
            newOption.text="Realisation";
            operationN.appendChild(newOption);

        }
        if(val == "3-Export Bill") {
            var operationN = document.getElementById("operationN");
            operationN.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="Lodgement";
            newOption.text="Lodgement";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Acceptance";
            newOption.text="Acceptance";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Closure";
            newOption.text="Closure";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Free of Payment";
            newOption.text="Free of Payment";
            operationN.appendChild(newOption);

        }
        if(val == "4-Inward Guarantee") {
            var operationN = document.getElementById("operationN");
            operationN.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="Issuance";
            newOption.text="Issuance";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Amendment";
            newOption.text="Amendment";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Closure";
            newOption.text="Closure";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Invocation";
            newOption.text="Invocation";
            operationN.appendChild(newOption);

        }
        if(val == "4-Outward Guarantee") {
            var operationN = document.getElementById("operationN");
            operationN.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="Advising";
            newOption.text="Advising";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Amendment";
            newOption.text="Amendment";
            operationN.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="Closure";
            newOption.text="Closure";
            operationN.appendChild(newOption);

        }
    }

    const selectSubProduct =(e) =>{
		
		console.log("SG on change value ",e.target.value);
        var val =e.target.value;

        if(val == 1) {
            var selProduct = document.getElementById("subProductN");
            selProduct.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="1-Import-LC";
            newOption.text="Import-LC";
            selProduct.appendChild(newOption);
            
            var newOption = document.createElement('option');
            newOption.value="1-Export-LC";
            newOption.text="Export-LC";
            selProduct.appendChild(newOption);
            
        }
        if(val == 2) {
            var selProduct = document.getElementById("subProductN");
            selProduct.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="2-Import-LC";
            newOption.text="Import-LC";
            selProduct.appendChild(newOption);
            
            var newOption = document.createElement('option');
            newOption.value="2-Export-LC";
            newOption.text="Export-LC";
            selProduct.appendChild(newOption);
            
        }
        if(val == 3) {
            var selProduct = document.getElementById("subProductN");
            selProduct.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="3-Open Account";
            newOption.text="Open Account";
            selProduct.appendChild(newOption);
            
            var newOption = document.createElement('option');
            newOption.value="3-Import Bill";
            newOption.text="Import Bill";
            selProduct.appendChild(newOption);

            var newOption = document.createElement('option');
            newOption.value="3-Export Bill";
            newOption.text="Export Bill";
            selProduct.appendChild(newOption);
        }
        if(val == 4) {
            var selProduct = document.getElementById("subProductN");
            selProduct.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="4-Inward Guarantee";
            newOption.text="Inward Guarantee";
            selProduct.appendChild(newOption);
            
            var newOption = document.createElement('option');
            newOption.value="4-Outward Guarantee";
            newOption.text="Outward Guarantee";
            selProduct.appendChild(newOption);
            
        }
        if(val == 5) {
            var selProduct = document.getElementById("subProductN");
            selProduct.options.length = 0;

            var newOption = document.createElement('option');
            newOption.value="5-Inward Remittance";
            newOption.text="Inward Remittance";
            selProduct.appendChild(newOption);
            
            var newOption = document.createElement('option');
            newOption.value="5-Outward Remittance";
            newOption.text="Outward Remittance";
            selProduct.appendChild(newOption);
            
        }
    }

    const handleChange = (e) => {

        console.log("on change value ", e.target.value);
        var val = e.target.value;

        if (val == 0) {
            console.log("inside if 0");
            setValue2('');
        } else if (val == 1) {
            console.log("inside if 1");
            setValue2('copyCreate');

        } else if (val == 2) {
            console.log("inside if 2");
            setValue2('New');

        }

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
                            <CFormGroup >
                                <div id='firstDiv'>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="3">
                                            <CLabel htmlFor="CopyCreate/New">Copy Create/New</CLabel>
                                            <CSelect id="selectCopyCreateNew" onChange={handleChange} >
                                                <option value="0" >Please select </option>
                                                <option value="1">Copy Create</option>
                                                <option value="2">New</option>

                                            </CSelect>
                                        </CCol>
                                        <CCol xs="3">
                                            <div class="buttonAlign">
                                                <CButton color="warning" className="px-4" onClick={search.bind(this)} >
                                                    <CIcon name="cilSearch" />&nbsp;Submit</CButton>
                                            </div>
                                        </CCol>
                                    </CFormGroup>

                                </div>
                                <br /><br />
                                <div id='copyCreate'>
                                    <CFormGroup row className="my-0">
                                        <CCol xs="3">
                                            <CLabel htmlFor="Reference">Reference No</CLabel>
                                            <CInput id="Reference" placeholder="Enter Reference No" />
                                        </CCol>
                                        <CCol xs="3">
                                            <div class="buttonAlign">
                                                <CButton color="warning" className="px-4" onClick={search2.bind(this)} >
                                                    <CIcon name="cilSearch" />&nbsp;Search</CButton>
                                            </div>
                                        </CCol>
                                    </CFormGroup>
                                </div>
                                <br /><br />
                                <div id='secDiv'>
                                    <CCard>
                                        <br />
                                        <CCardBody>
                                            <CFormGroup row className="my-0">
                                                <CCol>
                                                    <CFormGroup row className="my-0">
                                                        <CCol>
                                                            <CLabel htmlFor="Product">Product</CLabel>
                                                            <CSelect id="select" disabled >
                                                                <option value="0" >Please select Product</option>
                                                                <option value="1" selected>LC</option>
                                                                <option value="2">BG</option>
                                                                <option value="3">Collection</option>
                                                            </CSelect>
                                                        </CCol>
                                                        <CCol>
                                                            <CLabel htmlFor="SubProduct">Sub Product</CLabel>
                                                            <CSelect id="select" disabled >
                                                                <option value="0" >Please select Sub Product</option>
                                                                <option value="1">Lodgement</option>
                                                                <option value="2" selected>Import</option>
                                                                <option value="3">Export</option>
                                                            </CSelect>

                                                            
                                                        </CCol>
                                                        <CCol>
                                                            <CLabel htmlFor="Operation">Operation</CLabel>
                                                            <CSelect id="select" disabled >
                                                                <option value="0" >Please select Operation</option>
                                                                <option value="1" selected>Issuance</option>
                                                                <option value="2">BG</option>
                                                                <option value="3">Collection</option>
                                                            </CSelect>
                                                        </CCol>
                                                    </CFormGroup>

                                                    <CCardHeader id="headingOne">

                                                        <h5 className="m-0 p-0">Document List</h5>

                                                    </CCardHeader>
                                                    <br />
                                                    <CRow>
                                                        <CCol>
                                                            <CAlert color="success">
                                                                <CRow>
                                                                    <CCol><b>Bill of Ladding</b></CCol>
                                                                    <CCol><div class="floatRight" >
                                                                        <CSwitch
                                                                            className="mr-1"
                                                                            color="success"
                                                                            defaultChecked
                                                                            shape="pill" />
                                                                    </div>
                                                                    </CCol>
                                                                </CRow>
                                                            </CAlert>

                                                        </CCol>
                                                        <CCol>
                                                            <CAlert color="success">
                                                                <CRow>
                                                                    <CCol><b>Bill of Exchange</b></CCol>
                                                                    <CCol><div class="floatRight" >
                                                                        <CSwitch
                                                                            className="mr-1"
                                                                            color="success"
                                                                            defaultChecked
                                                                            shape="pill" />
                                                                    </div>
                                                                    </CCol>
                                                                </CRow>
                                                            </CAlert>

                                                        </CCol>
                                                        <CCol>
                                                            <CAlert color="success">
                                                                <CRow>
                                                                    <CCol><b>Invoice</b></CCol>
                                                                    <CCol><div class="floatRight" >
                                                                        <CSwitch
                                                                            className="mr-1"
                                                                            color="success"
                                                                            defaultChecked
                                                                            shape="pill" />
                                                                    </div>
                                                                    </CCol>
                                                                </CRow>
                                                            </CAlert>

                                                        </CCol>

                                                    </CRow>

                                                    <CRow>
                                                        <CCol sm='4'>
                                                            <CAlert color="success">
                                                                <CRow>
                                                                    <CCol><b>Packing List</b></CCol>
                                                                    <CCol>
                                                                        <div class="floatRight" >
                                                                            <CSwitch
                                                                                className="mr-1"
                                                                                color="success"
                                                                                defaultChecked
                                                                                shape="pill" />
                                                                        </div>
                                                                    </CCol>
                                                                </CRow>
                                                            </CAlert>

                                                        </CCol>

                                                    </CRow>
                                                    <CRow>

                                                        <CCol xs="8">

                                                       
                                                                <CButton color="success" onClick={toggle2} className="px-4"><CIcon name="cil-cursor" />&nbsp;Copy & Create</CButton>
                                                                

                                                        </CCol>

                                                        
                                                    </CRow>
                                                </CCol>
                                            </CFormGroup>

                                        </CCardBody>
                                    </CCard>
                                </div>
                                <div className='container mt-4' id='new'>
                                    <CFormGroup row className="my-0">
                                        <CCol>
                                            <CLabel htmlFor="Product">Product</CLabel>
                                            <CSelect id="productN" onChange={selectSubProduct} >
                                                <option value="0" >Please select Product</option>
                                                <option value="1">LC</option>
                                                <option value="2">Bills Under LC</option>
                                                <option value="3">Bill under Collection</option>
                                                <option value="4">Guarantees</option>
                                                <option value="5">Remittance</option>
                                                <option value="6">Supply Chain Finance</option>
                                                <option value="7">Invoice Discounting</option>
                                                <option value="8">Export bill Discounting</option>
                                            </CSelect>
                                        </CCol>
                                        <CCol>
                                            <CLabel htmlFor="SubProduct">Sub Product</CLabel>
                                            <CSelect id="subProductN"  onChange={selectOperation} >
                                                <option value="0" >Please select Sub Product</option>
                                                
                                            </CSelect>
                                        </CCol>
                                        <CCol>
                                            <CLabel htmlFor="Operation">Operation</CLabel>
                                            <CSelect id="operationN">
                                                <option value="0" >Please select Operation</option>
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

                                            <CButton color="success" onClick={toggle} className="px-4"><CIcon name="cil-cursor" />&nbsp;Launch Case</CButton>
                                           
                                        </CCol>
                                    </CRow>

                                </div>
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
                                            <CModal show={modal2} onClose={toggle2}>
                                                            <CModalBody>Case has been Copied and Created Successfully with Reference No 3434563.
                                                            </CModalBody>
                                                            <CModalFooter>
                                                                <Link to="/dashboard">
                                                                    <CButton color="primary">OK</CButton>
                                                                </Link>
                                                                {' '}

                                                            </CModalFooter>

                                                        </CModal>


                            </CFormGroup>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </>
    )
}

export default LaunchCase