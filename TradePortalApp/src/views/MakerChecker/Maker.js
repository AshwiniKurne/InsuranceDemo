import React, { useState,useEffect } from 'react'
import FileUpload from './FileUpload';
import { Link } from 'react-router-dom'

import ProgressBar from './ProgressBar';

import {
    CAlert,
    CButton,
    
    CCard,

    CCardBody,

    CCardHeader,
    CDataTable,
    CCol,
    CBadge,
    CFormGroup,

    CInput,

    CLabel,

    CSelect, CTextarea,

    CRow,

    CNav,

    CNavItem,

    CNavLink,

    CTabContent,

    CTabPane,

    CTabs, CModal, CModalBody, CModalFooter

} from '@coreui/react';

import CIcon from '@coreui/icons-react'

const Collapses = () => {


    const [collapse, setCollapse] = useState(false)

    const [collapseMulti, setCollapseMulti] = useState([false, false])

    const [accordion, setAccordion] = useState(0)

    const [fade, setFade] = useState(true)

    const[value1,setValue] =useState()
	
	const[value2,setValue2] =useState()

    const[modal2,setModal2] =useState(false);

    const fields = ['FirstName','LastName', 'DateofBirth', 'Gender','RelationwithAssured','NomineeShare']


    const usersData =[
        {id :0, FirstName: 'Sanchay ', LastName: 'John Doe', DateofBirth: '1990/10/28', Gender: 'Male', RelationwithAssured: 'Brother',NomineeShare :'Sanchay Gupta'},
    ];

    const toggle = (e) => {

        setCollapse(!collapse)

        e.preventDefault()

    }

   


    const handleChange2 =(e)=>{
        var amt =e.target.value;
        console.log("amt "+amt);
        if(amt !=''){
        console.log("inside toggle2");
        setModal2(!modal2);
        }
    }

    const handleChange3=(e)=>{
        setModal2(!modal2);
    }

    const handleChange =(e) =>{
		
		console.log("on change value ",e.target.value);
        var val =e.target.value;

        if(val ==0){
            console.log("inside if 0");
            setValue2('');
        }else if(val ==1){
            console.log("inside if 1");
            setValue2('27AABCU9603R1ZN');

        }else if(val ==2){
            console.log("inside if 2");
            setValue2('17AARCU9453W1ZN');

        }else{
            console.log("inside if 3");
            setValue2('24AKBER9343Y1KL');

        }

	}

    const toggleMulti = (type) => {

        let newCollapse = collapseMulti.slice()

        switch (type) {

            case "left":

                newCollapse[0] = !collapseMulti[0];

                break;

            case "right":

                newCollapse[1] = !collapseMulti[1];

                break;

            case "both":

                newCollapse[0] = !collapseMulti[0];

                newCollapse[1] = !collapseMulti[1];

                break;

            default:

        }

        setCollapseMulti(newCollapse)

    }



    const toggleFade = () => {

        setFade(!fade)

    }

    return (

        <>

            <CCol xs="12" md="12" className="mb-4">

                <CCard>



                    <CCardBody>

                    <CAlert color="primary">
                                    <CRow>
                                        <CCol sm="3"><b>Product</b> : LC</CCol>
                                        <CCol sm="3"><b>Sub Product</b> : Lodgement</CCol>
                                        <CCol sm="3"><b>Operation</b> : Issuance</CCol>
                                        <CCol sm="3"><b>Ref No.</b> : 3487534</CCol>
                                    </CRow>
                                </CAlert>
                                <br/><br/>
                               
                                <br/>
                                <br/>
                        <CTabs activeTab="Policy">

                            <CNav variant="tabs">

                                <CNavItem>

                                    <CNavLink data-tab="Policy">

                                      Policy Details

                                     </CNavLink>

                                </CNavItem>

                                <CNavItem>

                                    <CNavLink data-tab="LifeAssured">
                                        Life Assured Details
                                    </CNavLink>

                                </CNavItem>
                                <CNavItem>

                                <CNavLink data-tab="Claim">
                                    Claim Details
                                </CNavLink>

                                </CNavItem>
                                <CNavItem>
                                    <CNavLink data-tab="Claimant">
                                    Claimant Details

                                    </CNavLink>

                                </CNavItem>

                            </CNav>

                            <CTabContent>

                                <CTabPane data-tab="Policy">
                                <br />
                                    

                                    <CCardHeader id="headingOne">

                                        <h5 className="m-0 p-0">Policy Details</h5>

                                    </CCardHeader>



                                    <CCardBody>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Policy No</CLabel>

                                                    <CInput id="company" placeholder="Enter your Policy No" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Plan Name</CLabel>

                                                    <CInput id="company" placeholder="Enter your Plan Name" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Policy Start Date</CLabel>

                                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />

                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Sum Assured</CLabel>

                                                    <CInput id="company" placeholder="Enter your Sum Assured" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Policy Term</CLabel>

                                                    <CInput id="company" placeholder="Enter your Policy Term" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Premium Amount</CLabel>
                                                    <CInput id="company" placeholder="Enter your Premium Amount" value="" />
                                                    
                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Last Premimum Date</CLabel>

                                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                    <CFormGroup>

                                                         <CLabel htmlFor="company">Policy Status</CLabel>
                                                         <CInput id="company" placeholder="Enter your Premium Amount" value="In Force" disabled/>
    
                                                    </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>

                                    </CCardBody>

									<br/>
									 <CCardHeader id="headingOne">

                                        <h5 className="m-0 p-0">Nominee Details</h5>

                                    </CCardHeader>



                                    <CCardBody>
                                        
                                            <CDataTable
                                               items={usersData}
                                                 fields={fields}
                                                  hover
                                              striped
                                               bordered
                                                 size="sm"
                                              
                                                pagination
                                                  
            />                                       
                                    </CCardBody>


                                </CTabPane>

                                <CTabPane data-tab="LifeAssured">

                                    <br />
									<CCardHeader id="headingOne">
                                    <h5 className="m-0 p-0">Personal Details</h5>
                            </CCardHeader>
                            <CCardBody>
								<CFormGroup row className="my-0">
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Date of Birth</CLabel>

                                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">First Name</CLabel>

                                                    <CInput id="company" placeholder="Enter your First Name" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Last Name</CLabel>

                                                    <CInput id="company" placeholder="Enter your Last Name" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Gender</CLabel>

                                                    <CSelect id="select"  >

                                                        <option value="0" >Please select Gender </option>

                                                        <option value="1">Male</option>

                                                        <option value="2">Female</option>
													</CSelect>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Marital Status</CLabel>

                                                    <CSelect id="select"  >

                                                        <option value="0" >Please select Marital Status </option>

                                                        <option value="1">Married</option>

                                                        <option value="2">Unmarried</option>
														<option value="3">Divorced</option>
														<option value="4">widowed</option>
														
													</CSelect>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Nationality</CLabel>
                                                    <CInput id="company" placeholder="Enter your Nationality" value="" />
                                                    
                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Residental Status</CLabel>

                                                    <CInput id="company" placeholder="Enter your Residental Status" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">PAN Number</CLabel>

                                                    <CInput id="company" placeholder="Enter your PAN Number" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Aadhar Number</CLabel>

                                                    <CInput id="company" placeholder="Enter your Aadhar Number" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            
                                        </CFormGroup>
										
                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Occupation</CLabel>

                                                    <CInput id="company" placeholder="Enter your Occupation" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Annual Income</CLabel>

                                                    <CInput id="company" placeholder="Enter your Annual Income" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Education</CLabel>

                                                     <CSelect id="select"  >

                                                        <option value="0" >Please select Education </option>

                                                        <option value="1">BE</option>
														<option value="2">BTech</option>
                                                        <option value="3">MBBS</option>
														<option value="4">BCOM</option>
														<option value="5">MCOM</option>
														<option value="6">MTech</option>
													</CSelect>

                                                </CFormGroup>

                                            </CCol>

                                            
                                        </CFormGroup>
                                    </CCardBody>

									<br/>
									 <CCardHeader id="headingOne">

                                        <h5 className="m-0 p-0">Contact Details</h5>

                                    </CCardHeader>



                                    <CCardBody>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company"> Address Line 1</CLabel>

                                                    <CInput id="company" placeholder="Enter your Address Line 1" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Address Line 2</CLabel>

                                                    <CInput id="company" placeholder="Enter your Address Line 2" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Country</CLabel>

                                                    <CSelect id="select"  >

                                                        <option value="0" >Please select Country </option>

                                                        <option value="1">India</option>
														<option value="2">US</option>
                                                        <option value="3">China</option>
														<option value="4">Japan</option>
														<option value="5">Nepal</option>
														<option value="6">Shrilanka</option>
													</CSelect>

                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>

										
                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company"> State</CLabel>

                                                     <CSelect id="select"  >

                                                        <option value="0" >Please select State </option>

                                                        <option value="1">Maharashtra</option>
														<option value="2">Delhi</option>
                                                        <option value="3">Rajsthan</option>
														<option value="4">Goa</option>
														<option value="5">Keral</option>
														<option value="6">Gujrat</option>
													</CSelect>

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">City</CLabel>

                                                     <CSelect id="select"  >

                                                        <option value="0" >Please select City </option>

                                                        <option value="1">Mumbai</option>
														<option value="2">Pune</option>
                                                        <option value="3">Nashik</option>
														<option value="4">Nagpur</option>
														
													</CSelect>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Pincode</CLabel>

                                                    <CInput id="company" placeholder="Enter your Pincode" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>
										
										
                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company"> Mobile Number</CLabel>

                                                    <CInput id="company" placeholder="Enter your Mobile Number" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Landline Number</CLabel>

                                                    <CInput id="company" placeholder="Enter your Landline Number" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Email Address</CLabel>

                                                    <CInput id="company" placeholder="Enter your Email Address" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>
										
										
                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company"> Alternate Mobile Number</CLabel>

                                                    <CInput id="company" placeholder="Enter your Alternate Mobile Number" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Alternate Email Address</CLabel>

                                                    <CInput id="company" placeholder="Enter your Alternate Email Address" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            
                                        </CFormGroup>

                                    </CCardBody>
									<br/>
									
									<CCardHeader id="headingOne">
                                    <h5 className="m-0 p-0">Bank Account Details</h5>
									</CCardHeader>
									<CCardBody>
									<CFormGroup row className="my-0">
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Payout Mode</CLabel>

                                                    <CSelect id="select"  >

                                                        <option value="0" >Please select Payout mode </option>

                                                        <option value="1">Mumbai</option>
														<option value="2">Pune</option>
                                                        <option value="3">Nashik</option>
														
														
													</CSelect>


                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Account Type</CLabel>

                                                    <CSelect id="select"  >

                                                        <option value="0" >Please select Account Type </option>

                                                        <option value="1">Mumbai</option>
														<option value="2">Pune</option>
                                                        <option value="3">Nashik</option>
														
														
													</CSelect>


                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Bank Name</CLabel>

                                                   <CSelect id="select"  >

                                                        <option value="0" >Please select Bank Name </option>

                                                        <option value="1">Mumbai</option>
														<option value="2">Pune</option>
                                                        <option value="3">Nashik</option>
														<option value="4">Nagpur</option>
														
													</CSelect>


                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Account Number</CLabel>
													<CInput id="company" placeholder="Enter your Nationality" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Bank Branch</CLabel>

                                                    <CSelect id="select"  >

                                                        <option value="0" >Please select Bank Branch </option>

                                                        <option value="1">Married</option>

                                                        <option value="2">Unmarried</option>
														<option value="3">Divorced</option>
														<option value="4">widowed</option>
														
													</CSelect>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">IFSC Code</CLabel>
                                                    <CInput id="company" placeholder="Enter your IFSC Code" value="" />
                                                    
                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

									</CCardBody>
									

                                </CTabPane>

                                <CTabPane data-tab="Claim">

                                    <br />

                                   							<CCardHeader id="headingOne">
                                    <h5 className="m-0 p-0">Details of Life Assured</h5>
                            </CCardHeader>
                            <CCardBody>
								<CFormGroup row className="my-0">
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Name of Life Assured</CLabel>

                                                    <CInput id="company" placeholder="Enter  Name of Life Assured" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Father's Name</CLabel>

                                                    <CInput id="company" placeholder="Enter your Father's Name" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">LA PAN</CLabel>

                                                    <CInput id="company" placeholder="Enter LA PAN" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">LA Aadhar</CLabel>

                                                    <CInput id="company" placeholder="Enter LA Aadhar" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Date of Death</CLabel>
												     <CInput type="date" id="date-input" name="date-input" placeholder="date" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Age of Death</CLabel>
                                                    <CInput id="company" placeholder="Enter Age of Death" value="" />
                                                    
                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Time of Death</CLabel>

                                                    <CInput id="company" placeholder="Enter time of Death" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Place of Death</CLabel>

                                                    <CInput id="company" placeholder="Enter Place of Death" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Place of Death Address</CLabel>

                                                    <CInput id="company" placeholder="Enter Place of Death Address" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            
                                        </CFormGroup>
										
                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Nature of Death</CLabel>

                                                    <CInput id="company" placeholder="Enter  Nature of Death" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Immediate Cause of Death</CLabel>

                                                    <CInput id="company" placeholder="Enter Immediate Cause of Death" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Circumstances Surrounding Death</CLabel>

                                                     <CInput id="company" placeholder="Enter Circumstances Surrounding Death" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            
                                        </CFormGroup>
                                    </CCardBody>

									<br/>
									 <CCardHeader id="headingOne">

                                        <h5 className="m-0 p-0">Employment Details OF Life Assured</h5>

                                    </CCardHeader>



                                    <CCardBody>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company"> Occupation Details</CLabel>

                                                    <CInput id="company" placeholder="Enter  Occupation Details" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Monthly Income</CLabel>

                                                    <CInput id="company" placeholder="Enter  Monthly Income" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Name of Employer</CLabel>

                                                    <CInput id="company" placeholder="Enter Name of Employer" value="" />
                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>

										
                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Workplace</CLabel>

                                                     <CInput id="company" placeholder="Enter Workplace" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Pincode</CLabel>
													<CInput id="company" placeholder="Enter Pincode" value="" />
                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Last working Location</CLabel>

                                                    <CInput id="company" placeholder="Enter  Last working Location" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>
										

                                    </CCardBody>
									<br/>
									
									<CCardHeader id="headingOne">
                                    <h5 className="m-0 p-0">Hospitalisation of LA</h5>
									</CCardHeader>
									<CCardBody>
									<CFormGroup row className="my-0">
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Was Life assured diagnosed/suffering from/treated for following illness</CLabel>
													 <CInput id="company" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Type of Admission</CLabel>

                                                    <CSelect id="select"  >

                                                        <option value="0" >Please select Type of Admission </option>

                                                        <option value="1">Mumbai</option>
														<option value="2">Pune</option>
                                                        <option value="3">Nashik</option>
														
														
													</CSelect>


                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Hospitalisation due to injury</CLabel>

                                                   <CInput id="company" value="" />


                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Status at the time of discharge</CLabel>
													<CInput id="company" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Medical cause on Death Certificate</CLabel>
													<CInput id="company" value="" />


                                                </CFormGroup>

                                            </CCol>

                                            

                                        </CFormGroup>

									</CCardBody>
									<br/>
									
									<CCardHeader id="headingOne">
                                    <h5 className="m-0 p-0">Medical Consulation history of Life Assured</h5>
									</CCardHeader>
									<CCardBody>
									<CFormGroup row className="my-0">
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Name of Doctor</CLabel>
													 <CInput id="company" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Address</CLabel>
													<CInput id="company" value="" />
                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Doctor who attended last illness</CLabel>

                                                   <CInput id="company" value="" />


                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Doctor who declated Death</CLabel>
													<CInput id="company" value="" />

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

									</CCardBody>
									

                                </CTabPane>

                                <CTabPane data-tab="Claimant">

                                    <br />
																<CCardHeader id="headingOne">
                                    <h5 className="m-0 p-0">Claimant Details</h5>
                            </CCardHeader>
                            <CCardBody>
								<CFormGroup row className="my-0">
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Claimant Name</CLabel>

                                                    <CInput id="company" placeholder="Enter Claimant name" value="" />
                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Date of Birth</CLabel>

                                                     <CInput type="date" id="date-input" name="date-input" placeholder="date" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Address</CLabel>

                                                    <CInput id="company" placeholder="Enter Address" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Pin Code</CLabel>

                                                   <CInput id="company" placeholder="Enter Pincode" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Contact No 1</CLabel>
													 <CInput id="company" placeholder="Enter Contact No 1" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Contact No 2</CLabel>
                                                    <CInput id="company" placeholder="Enter Contact No 2" value="" />
                                                    
                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Email ID</CLabel>

                                                    <CInput id="company" placeholder="Enter Email ID" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Monthly Income</CLabel>

                                                    <CInput id="company" placeholder="Enter Monthly Income" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Relation with Life Assured</CLabel>

                                                    <CInput id="company" placeholder="Enter Relation with Life Assured" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            
                                        </CFormGroup>
										
                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Claimant Title</CLabel>

                                                    <CInput id="company" placeholder="Enter Claimant Title" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Claimant PAN</CLabel>

                                                    <CInput id="company" placeholder="Enter Claimant PAN" value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Claimant Aadhar</CLabel>

                                                     <CInput id="company" placeholder="Enter Claimant Aadhar" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            
                                        </CFormGroup>
										
										<CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Is Claimant Politically Exposed Person (PEP)?</CLabel>

                                                    <CInput id="company"  value="" />

                                                </CFormGroup>

                                            </CCol>
											
											<CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Preferred Language of Communication</CLabel>

                                                    <CInput id="company"  value="" />

                                                </CFormGroup>

                                            </CCol>
											
                                        </CFormGroup>
										
										
										
                                    </CCardBody>

									<br/>
									 <CCardHeader id="headingOne">

                                        <h5 className="m-0 p-0">Claimant NEFT Mandate/Bank Account Details</h5>

                                    </CCardHeader>



                                    <CCardBody>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company"> Bank Account Number</CLabel>

                                                    <CInput id="company" placeholder="Enter Bank Account Number" value="" />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Account Holder Name</CLabel>

                                                    <CInput id="company" placeholder="Enter Account Holder Name" value="" />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Bank Name and Branch</CLabel>
													 <CInput id="company" placeholder="Enter Bank Name and Branch" value="" />


                                                </CFormGroup>

                                            </CCol>
                                            
                                        </CFormGroup>

										
                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company"> Account Type</CLabel>

                                                     <CSelect id="select"  >

                                                        <option value="0" >Please select Account Type </option>

                                                        <option value="1">Maharashtra</option>
														<option value="2">Delhi</option>
                                                        <option value="3">Rajsthan</option>
														
													</CSelect>

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">IFSC Code</CLabel>

													 <CInput id="company" placeholder="Enter IFSC Code" value="" />

                                                </CFormGroup>

                                            </CCol>


                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Account Status</CLabel>

													 <CInput id="company" placeholder="Enter IFSC Code" value="Not Verified" disabled />

                                                </CFormGroup>

                                            </CCol>
                                         
                                        </CFormGroup>
										
									</CCardBody>
									
                                    
                                </CTabPane>
                            </CTabContent>

                        </CTabs>

                    </CCardBody>

                </CCard>

            </CCol>



            
            <br />



            <CRow>

                <CCol xs="12">

                    <Link to="/dashboard">

                    <CButton color="info" className="px-4"><CIcon name="cil-save" />&nbsp;Save</CButton> &nbsp;
                        <CButton color="danger" className="px-4"><CIcon name="cil-x" />&nbsp;Close</CButton>&nbsp;
                        <CButton color="dark" className="px-4"><CIcon name="cilPencil" />&nbsp;Register Claim</CButton>&nbsp;
                        <CButton color="primary" className="px-4" disabled><CIcon name="cilPaperclip" />&nbsp;Attach Nominee </CButton>&nbsp;
                        <CButton color="warning" className="px-4" disabled><CIcon name="cilPaperclip" />&nbsp;Attach Bank DOCS/EC </CButton>&nbsp;
                        <CButton color="dark" className="px-4" ><CIcon name="cil-Check" />&nbsp;Initiate Penny Checking </CButton>&nbsp;
                        <CButton color="success" className="px-4"><CIcon name="cil-cursor" />&nbsp;Submit</CButton>

                    </Link>

                </CCol>



            </CRow>

            <div>
            <CModal show={modal2} >
                                                            <CModalBody>Your LC limit is $ 80000, which is less than Txn amount, please check
                                                            </CModalBody>
                                                            <CModalFooter>
                                                               
                                                                    <CButton color="primary" onClick ={handleChange3}>OK</CButton>
                                                               
                                                               

                                                            </CModalFooter>

                                                        </CModal>

            </div>




        </>

    )

}



export default Collapses