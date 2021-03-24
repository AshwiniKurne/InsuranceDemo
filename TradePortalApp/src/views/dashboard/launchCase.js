import React, { Fragment, useState,useEffect } from 'react';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CLabel,
    CSelect,
    CProgress,
    CFormGroup,CButton,CModal,CModalBody,CModalFooter,CInput,CAlert,CSwitch
} from '@coreui/react';
import FileUpload from '../MakerChecker/FileUpload';
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react'
const LaunchCase = () => {
	const [modal, setModal] = useState(false);
	const[value2,setValue2] =useState();
    useEffect(() => { 
        document.getElementById("copyCreate").style.display="none";
        document.getElementById("new").style.display="none";
        document.getElementById("secDiv").style.display="none";
    });
	const toggle = ()=>{
    setModal(!modal);
	}
	
	const search=()=>{
    console.log("inside search"+value2); 
	if(value2 =='copyCreate'){
		document.getElementById("copyCreate").style.display="";
        document.getElementById("new").style.display="none";
	}else if(value2 =='New'){
		document.getElementById("new").style.display="";
        document.getElementById("copyCreate").style.display="none";
	}else{
		document.getElementById("firstDiv").style.display="";
        document.getElementById("new").style.display="none";
        document.getElementById("copyCreate").style.display="none";
	}
    
    }
    
    const search2=()=>{
        console.log("inside search2"); 
        document.getElementById("secDiv").style.display="";
       
    }
	
	const handleChange =(e) =>{
		
		console.log("on change value ",e.target.value);
        var val =e.target.value;

        if(val ==0){
            console.log("inside if 0");
            setValue2('');
        }else if(val ==1){
            console.log("inside if 1");
            setValue2('copyCreate');

        }else if(val ==2){
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
								<div id ='firstDiv'>
								<CFormGroup row className="my-0">
								<CCol>
                                        <CLabel htmlFor="CopyCreate/New">Copy Create/New</CLabel>
                                        <CSelect id="select" onChange={handleChange} >
                                            <option value="0" >Please select </option>
                                            <option value="1">Copy Create</option>
                                            <option value="2">New</option>
                                            
                                        </CSelect>
                                    </CCol>
                                    <CCol>
                                    <div class="buttonAlign">
                                      <CButton color="warning" className="px-4" onClick={search.bind(this)} >
									  <CIcon name="cilSearch" />&nbsp;Submit</CButton>
                                        </div>
                                    </CCol>
								</CFormGroup>
								
								</div>
                                <br/><br/>
                                <div id='copyCreate'>
                                <CFormGroup row className="my-0">
                                <CCol>
                                        <CLabel htmlFor="Reference">Reference No</CLabel>
                                        <CInput id="Reference" placeholder="Enter Reference No" />
                                    </CCol>
                                    <CCol>
                                        <div class="buttonAlign">
                                            <CButton color="warning" className="px-4" onClick={search2.bind(this)} >
                                            <CIcon name="cilSearch" />&nbsp;Search</CButton>
                                        </div>
                                    </CCol>
                                </CFormGroup> 
                                </div>
                                <br/><br/>
                                <div id ='secDiv'>
                                <CCard>
                                <br/>
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
                                        <CSelect id="select"  disabled >
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
                                <br/>
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
                                                    shape="pill"/>
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
                                                    shape="pill"/>
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
                                                    shape="pill"/>
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
                                                    shape="pill"/>
                                                    </div>
                                                </CCol>
                                            </CRow>
                                        </CAlert>

                                    </CCol>
                                    
                                </CRow>

                                </CCol>
                                </CFormGroup>
                                </CCardBody>
                                </CCard>
                                </div>
                                <div className='container mt-4' id ='new'>
                                <CFormGroup row className="my-0">
                                    <CCol>
                                        <CLabel htmlFor="Product">Product</CLabel>
                                        <CSelect id="select" >
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
                                            
				<CButton color="success" onClick={toggle} className="px-4"><CIcon name="cil-cursor" />&nbsp;Launch Case</CButton>
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