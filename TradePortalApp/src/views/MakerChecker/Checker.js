import React, { useState } from 'react'
import FileUpload from './FileUpload';
import { Link } from 'react-router-dom'
import { Button, Card, Collapse, Form, message, Modal, Tabs } from "antd";
import "antd/dist/antd.css";
import CIcon from '@coreui/icons-react';
import Casehistory from './CaseHistory';
import {
    CAlert,
    CButton,

    CCard,

    CCardBody,

    CCardHeader,

    CCol,

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

    CTabs

} from '@coreui/react';



const Collapses = () => {



    const [collapse, setCollapse] = useState(false)

    const [collapseMulti, setCollapseMulti] = useState([false, false])

    const [accordion, setAccordion] = useState(0)

    const [fade, setFade] = useState(true)

    const [ visible,setVisible] =useState(false);

    const toggle = (e) => {

        setCollapse(!collapse)

        e.preventDefault()

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

    const showModalcase_history = () => {
        console.log("vis1 "+visible);
        setVisible(!visible);
    }
    const handleOkcasehistory = (e) => {
        console.log("vis2 "+visible);
        setVisible(!visible);
    }
    const handlecancelcasehistory = (e) => {
        console.log("vis3 "+visible);
        setVisible(!visible);
    }


    return (

        <>

            <CCol xs="12" md="12" className="mb-4">

                <CCard>

                    <a className='fixed-widgets' onClick={showModalcase_history}><i className='ant-avatar fixed-widgets-avatar ant-dropdown-trigger ant-avatar-circle ant-avatar-icon fa fa-history'><CIcon id ="audit"name ="cil-av-timer"/></i><span>Case History</span></a>
                    <Modal
                        title='Case History'
                        visible={visible}
                        onOk={handleOkcasehistory}
                        onCancel={handlecancelcasehistory}>
                            
                        <Card >
                          <Casehistory></Casehistory> 
                        </Card>

                    </Modal>

                    <CCardBody>

                        <CAlert color="primary">
                            <CRow>
                                <CCol sm="3"><b>Product</b> : LC</CCol>
                                <CCol sm="3"><b>Sub Product</b> : Lodgement</CCol>
                                <CCol sm="3"><b>Operation</b> : Issuance</CCol>
                                <CCol sm="3"><b>Ref No.</b> : 78773170</CCol>
                            </CRow>
                        </CAlert>


                        <CTabs activeTab="general">

                            <CNav variant="tabs">

                                <CNavItem>

                                    <CNavLink data-tab="general">

                                        General Details

                                     </CNavLink>

                                </CNavItem>

                                <CNavItem>

                                    <CNavLink data-tab="benef">
                                        Party Details
                                    </CNavLink>

                                </CNavItem>
                                <CNavItem>

                                    <CNavLink data-tab="ref">

                                        Reference Details

                                </CNavLink>

                                </CNavItem>
                                <CNavItem>

                                    <CNavLink data-tab="document">

                                        Document Details

                  </CNavLink>

                                </CNavItem>

                            </CNav>

                            <CTabContent>

                                <CTabPane data-tab="general">
                                    <br />


                                    <CCardHeader id="headingOne">

                                        <h5 className="m-0 p-0">General Details</h5>

                                    </CCardHeader>



                                    <CCardBody>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Branch ID</CLabel>

                                                    <CInput id="company" placeholder="Enter your Branch ID" value="BK010" disabled />

                                                </CFormGroup>

                                            </CCol>
                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Cust ID</CLabel>

                                                    <CInput id="company" placeholder="Enter your Cust ID" value="978324" disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Customer Name</CLabel>

                                                    <CInput id="company" placeholder="Enter your Customer Name" value="Hinduja Corp International" disabled />

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>



                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">IE Code</CLabel>

                                                    <CInput id="company" placeholder="Enter your IE Code" value="3432323534" disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">PAN No.</CLabel>

                                                    <CInput id="company" placeholder="Enter your PAN Code" value="BANGD8362F" disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Account No</CLabel>

                                                    <CSelect id="select" value="2" disabled >

                                                        <option value="0" >Please select Account Number</option>

                                                        <option value="1">6757658699969</option>

                                                        <option value="2">6757658621630</option>

                                                        <option value="3">6757658658279</option>

                                                    </CSelect>


                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">GST No</CLabel>

                                                    <CInput id="company" placeholder="Enter your GST No" value='27AABCU9603R1ZN' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Currency </CLabel>

                                                    <CSelect id="select" disabled  >
                                                        <option value="0" >Please select Currency</option>
                                                        <option value="1" selected>USD</option>
                                                        <option value="2">EUR</option>
                                                        <option value="3" >INR</option>
                                                        <option value="4">AED</option>
                                                        <option value="5">BHD</option>
                                                    </CSelect>

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Amount</CLabel>

                                                    <CInput id="company" placeholder="Enter your Amount" value='44323' disabled />

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                    </CCardBody>



                                </CTabPane>

                                <CTabPane data-tab="ref">

                                    <br />



                                    <CCardHeader id="headingTwo">



                                        <h5 className="m-0 p-0">Reference Details</h5>



                                    </CCardHeader>



                                    <CCardBody>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Bank Ref No.</CLabel>

                                                    <CInput id="company" placeholder="Enter your Bank Ref No." disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Bill Status</CLabel>

                                                    <CInput id="company" placeholder="Enter your Bill Status" value="Checker" disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Limit ID</CLabel>

                                                    <CInput id="company" placeholder="Enter your Limit ID" value='22425' disabled />

                                                </CFormGroup>

                                            </CCol>
                                        </CFormGroup>

                                        <CFormGroup row className="my-0">



                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Charges</CLabel>

                                                    <CInput id="company" placeholder="Enter your Charges" value='234' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Margin %</CLabel>

                                                    <CInput id="company" placeholder="Enter your Margin %" value='9.2%' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Other Bank Ref No</CLabel>

                                                    <CInput id="company" placeholder="Enter your Other Bank Ref No" value='454656' disabled />

                                                </CFormGroup>

                                            </CCol>
                                        </CFormGroup>

                                    </CCardBody>



                                </CTabPane>

                                <CTabPane data-tab="benef">

                                    <br />

                                    <CCardHeader id="headingThree">

                                        <h5 className="m-0 p-0">Party Details</h5>

                                    </CCardHeader>



                                    <CCardBody>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Name</CLabel>

                                                    <CInput id="company" placeholder="Enter your Party Name" value='Ken Dcosta' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Address</CLabel>

                                                    <CInput id="company" placeholder="Enter your Party Address" value='C107-108 C-Bridge,Nariman Point,Mumbai' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="select">Country</CLabel>

                                                    <CSelect id="select" disabled >

                                                        <option value="0" >Please select Party Country</option>

                                                        <option value="1">Afghanistan</option>

                                                        <option value="2">Belgium</option>

                                                        <option value="3">Brazil</option>

                                                        <option value="4">Canada</option>

                                                        <option value="5">China</option>

                                                        <option value="6">Malaysia</option>

                                                        <option value="7">Mexico</option>

                                                        <option value="8">New Zealand</option>

                                                        <option value="9">Norway</option>

                                                        <option value="10">Peru</option>

                                                        <option value="11">Russia</option>

                                                        <option value="12" selected>India</option>

                                                        <option value="13">Japan</option>

                                                        <option value="14">United States of America</option>

                                                        <option value="15">Thailand</option>

                                                    </CSelect>



                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Place of Expiry</CLabel>

                                                    <CInput id="company" placeholder="Enter Place of Expiry" value='Navi Mumbai' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Date of Expiry</CLabel>

                                                    <CInput type="date" id="date-input" name="date-input" placeholder="date" value='Ken Dcosta' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Description of Goods</CLabel>

                                                    <CInput id="company" placeholder="Enter Description of Goods" value='Steel,Metal' disabled />

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Party Account No./IBAN</CLabel>

                                                    <CInput id="company" placeholder="Enter Party Account No./IBAN" value='5431354632635' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol xs="4">

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">BIC/BSB Code</CLabel>

                                                    <CInput id="company" placeholder="Enter BIC/BSB Code" value='AB65575' disabled />

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>

                                        <CFormGroup row className="my-0">

                                            <CCol>

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Advising Bank Name & Address</CLabel>

                                                    <CTextarea id="company" placeholder="Enter Advising Bank Name & Address" value='Shop No 1 To 7, Kalash Sankalp Chs, Plot No C3, 4,27 30, Sector 20, Nerul West, Navi Mumbai, Maharashtra 400706' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol>

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Reimbursing Bank Name & Address</CLabel>

                                                    <CTextarea id="company" placeholder="Enter Reimbursing Bank Name & Address" value='Shop No 1 To 7, Parvati Sankalp Chs, Plot No C3, 4,27 30, Sector 48, Seawoods West, Navi Mumbai, Maharashtra 400706' disabled />

                                                </CFormGroup>

                                            </CCol>

                                            <CCol>

                                                <CFormGroup>

                                                    <CLabel htmlFor="company">Advise Through Bank Name & Address</CLabel>

                                                    <CTextarea id="company" placeholder="Enter Advise Through Bank Name & Address" value='Shop No 1 To 7, Shankar Sankalp Chs, Plot No C3, 4,27 30, Sector 6, Juinagar West, Navi Mumbai, Maharashtra 400706' disabled />

                                                </CFormGroup>

                                            </CCol>

                                        </CFormGroup>


                                    </CCardBody>



                                </CTabPane>

                                <CTabPane data-tab="document">

                                    <br />

                                    <CCardHeader id="headingOne">

                                        <h5 className="m-0 p-0">Document Details</h5>

                                    </CCardHeader>
                                    <CCardBody>

                                        <CFormGroup row className="my-0">

                                            <div className='container mt-4'>
                                                <FileUpload />
                                            </div>

                                        </CFormGroup>

                                    </CCardBody>

                                </CTabPane>
                            </CTabContent>

                        </CTabs>

                    </CCardBody>

                </CCard>

            </CCol>



            <br />

            <CCard className="mb-0">

                <CCardHeader id="headingThree">



                    <h5 className="m-0 p-0">Remarks</h5>

                </CCardHeader>

                <CCardBody>

                    <CFormGroup row className="my-0">

                        <CCol xs="12">

                            <CFormGroup>



                                <CTextarea id="company" placeholder="Enter Remarks" />

                            </CFormGroup>

                        </CCol>



                    </CFormGroup>

                </CCardBody>



            </CCard>

            <br />



            <CRow>

                <CCol xs="8">

                    <Link to="/dashboard">
                        <CButton color="warning" className="px-4"><CIcon name="cil-chevron-left" />&nbsp;Return to Maker</CButton> &nbsp;
                        <CButton color="info" className="px-4"><CIcon name="cil-save" />&nbsp;Save</CButton> &nbsp;
                        <CButton color="dark" className="px-4"><CIcon name="cil-x" />&nbsp;Close</CButton>&nbsp;
                        <CButton color="danger" className="px-4"><CIcon name="cil-trash" />&nbsp;Trash</CButton>&nbsp;
                        <CButton color="success" className="px-4"><CIcon name="cil-cursor" />&nbsp;Submit</CButton>

                    </Link>

                </CCol>



            </CRow>





        </>

    )

}



export default Collapses