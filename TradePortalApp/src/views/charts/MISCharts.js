import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import MUIDataTable from "mui-datatables";
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

    const columns1 = [{name: "PRODUCT",label: "Product"},{name: "TRANSACTIONID",label: "Transaction Id"},{name: "OPERATION",label: "Operation"},{name: "BeneNAME",label: "Beneficiary Name"},{name: "ACCOUNTNO",label: "Account No."},{name: "CURRENCY",label: "Currency"},{name: "AMOUNT",label: "Amount"},{name: "CURRENTSTATUS",label: "Current Status"},   {name: "REFERENCENO",label: "Reference No"}]
 
 
    const columns2 = [{name: "UserID",label: "User ID"},{name: "Product",label: "Product"},{name: "Operation",label: "Operation"},{name: "Role",label: "Role"},{name: "NoofTxn",label: "No of Txn"}]
   
   
    const columns3 = [{name: "SrNo",label: "Sr. No"},{name: "WID",label: "WID"},{name: "Product",label: "Product"},{name: "Operation",label: "Operation"},{name: "Currency",label: "Currency"},{name: "Amount",label: " Amount "},{name: "RejectionDate",label: "Rejection Date"},{name: "RejectReason",label: "Reject Reason"}]
   
   
    const columns4 = [{name: "SrNo",label: "Sr. No."},{name: "PRODUCT",label: "Product"},{name: "OPERATION",label: "Operation"},{name: "TotalNoofTxn",label: "Total No of Txn"}]
   
   
    const columns5 = [{name: "Status",label: "Status"},{name: "No of Txns",label: "No of Txns"}]
   
    const options = {

        filterType: 'dropdown',
        responsive: 'stacked',
        selectableRows: false
    
    
    };

    const data1= [["Import LC","54678","Lodgment","Nil Co. Ltd","987654123456","USD","125678.08","Maker","LC123456098"],["Export LC","54679","Lodgment","Amaz INC","987654123445","EUR","9876.43","Authoriser","LC123456023"],["Guarantees","54680","Devolvement","Niom Co","987654123891","JPY","2348767","Authoriser","LC123454398"],["Remittance","54681","Inward","Power Co In","987654123345","GBP","124567.12","Maker","FOR123468954"],["Import Collection","54682","Lodgment","Ask De ","987654123098","USD","678.34","Maker","LC238754098"],["Export Collection","54683","Acceptance","Flipkar Org","987654123786","USD","954378.95","Authoriser","LC123456027"],["Import LC","54684","Payments","Nil Co. Ltd","987654123456","USD","1908079.56","Maker","LC81579568"],["Export LC","54685","Payments","Amaz INC","987654123445","EUR","2861780.17","Authoriser","LC107140115"],["Guarantees","54686","Revocation","Niome Co","987654123891","JPY","3815480.78","Authoriser","LC222438186"],["Remittance","54687","Outward","Power Co In","987654123345","GBP","4769181.39","Maker","FIR123468954"],["Import Collection","54688","Lodgment","Ask De ","987654123098","USD","5722882","Maker","LC453034328"],["Export Collection","54689","Acceptance","Flipkar Org","987654123786","USD","6676582.61","Authoriser","LC568332399"],["Import LC","54690","Payments","Nil Co. Ltd","987654123456","USD","7630283.22","Maker","LC683630470"],["Export LC","54691","Acceptance","Amaz INC","987654123445","EUR","8583983.83","Authoriser","LC798928541"],["Guarantees","54692","Lodgment","Niome Co","987654123891","JPY","9537684.44","Authoriser","LC914226612"],["Remittance","54693","Inward","Power Co In","987654123345","GBP","10491385.05","Maker","RIR123468954"],["Import Collection","54694","Payments","Ask De ","987654123098","USD","11445085.66","Maker","LC114482275"],["Export Collection","54695","Acceptance","Flipkar Org","987654123786","USD","12398786.27","Authoriser","LC126012082"],["Import LC","54696","Lodgment","Nil Co. Ltd","987654123456","USD","13352486.88","Maker","LC137541889"],["Export LC","54697","Lodgment","Amaz INC","987654123445","EUR","14306187.49","Authoriser","LC149071696"]
]


const data2 = [["234566","Import LC", "Lodgment","Maker", "2"],["987553","Export LC", "Lodgment","Authoriser", "4"],["1740540","Guarantees", "Devolvement","Maker", "1"],["2493527","Remittance", "Inward","Authoriser", "6"],["3246514","Import Collection", "Lodgment","Authoriser", "6"],["3999501","Export Collection", "Acceptance","Maker", "9"],["4752488","Import LC", "Payments","Maker", "14"],["5505475","Export LC", "Payments","Authoriser", "12"],["6258462","Guarantees", "Revocation","Maker", "12"],["7011449","Remittance", "Outward","Authoriser", "12"],["7764436","Import Collection", "Lodgment","Authoriser", "8"],["8517423","Export Collection", "Acceptance","Maker", "20"],["9270410","Import LC", "Payments","Maker", "23"],["1002339","Export LC", "Acceptance","Authoriser", "18"],["1077638","Guarantees", "Lodgment","Maker", "6"],["1152937","Remittance", "Inward","Authoriser", "24"],["1228235","Import Collection", "Payments","Authoriser", "34"],["1303534","Export Collection", "Acceptance","Maker", "21"],["1378833","Import LC", "Lodgment","Maker", "8"],["1454131","Export LC", "Lodgment","Authoriser", "7"],["1529430","Guarantees", "Acceptance","Maker", "14"],["1604729","Remittance", "Inward","Authoriser", "26"],["1680028","Import Collection", "Acceptance", "22"],["1755326","Export Collection", "Payments", "21"]
]


const data3 = [["1","54678","Import LC","Lodgment","USD", " 125,678.08 ","8/18/20","Checklist not filled"],["2","54679","Export LC","Lodgment","EUR", " 9,876.43 ","8/18/20","Compliance Miss"],["3","54680","Guarantees","Devolvement","JPY", " 2,348,767.00 ","8/18/20","Docs Missing"],["4","54681","Remittance","Inward","GBP", " 124,567.12 ","8/18/20","Amount wrongly captured"],["5","54682","Import Collection","Lodgment","USD", " 678.34 ","8/18/20","Bene Name not matching"],["6","54683","Export Collection","Acceptance","USD", " 954,378.95 ","8/18/20","Sign not verified"],["7","54684","Import LC","Payments","USD", " 1,908,079.56 ","8/18/20","Checklist not filled"],["8","54685","Export LC","Payments","EUR", " 2,861,780.17 ","8/18/20","Compliance Miss"],["9","54686","Guarantees","Revocation","JPY", " 3,815,480.78 ","8/18/20","Docs Missing"],["10","54687","Remittance","Outward","GBP", " 4,769,181.39 ","8/18/20","Amount wrongly captured"],["11","54688","Import Collection","Lodgment","USD", " 5,722,882.00 ","8/18/20","Bene Name not matching"],["12","54689","Export Collection","Acceptance","USD", " 6,676,582.61 ","8/18/20","Sign not verified"],["13","54690","Import LC","Payments","USD", " 7,630,283.22 ","8/18/20","Checklist not filled"],["14","54691","Export LC","Acceptance","EUR", " 8,583,983.83 ","8/18/20","Compliance Miss"],["15","54692","Guarantees","Lodgment","JPY", " 9,537,684.44 ","8/18/20","Docs Missing"],["16","54693","Remittance","Inward","GBP", " 1,049,385.05 ","8/18/20","Amount wrongly captured"],["17","54694","Import Collection","Payments","USD", " 11,445,085.66 ","8/18/20","Bene Name not matching"],["18","54695","Export Collection","Acceptance","USD", " 1,298,786.27 ","8/17/20","Sign not verified"],["19","54696","Import LC","Lodgment","USD", " 1,335,286.88 ","8/17/20","Checklist not filled"],["20","54697","Export LC","Lodgment","EUR", " 1,430,187.49 ","8/17/20","Compliance Miss"],["21","54698","Guarantees","Acceptance","EUR", " 15,259,888.10 ","8/17/20","Docs Missing"],["22","54699","Remittance","Inward","JPY", " 1,621,358.00 ","8/17/20","Amount wrongly captured"],["23","54700","Import Collection","Acceptance","GBP", " 177,289.32 ","8/17/20","Bene Name not matching"],["24","54701","Export Collection","Payments","USD", " 10,989.93 ","8/17/20","Sign not verified"]
]


const data4 = [
    ["1","Import LC","Lodgment","50"],
	["2","Export LC","Lodgment","30"],
	["3","Guarantees","Devolvement","22"],
	["4","Remittance","Inward","21"],
	["5","Import Collection","Lodgment","23"],
	["6","Export Collection","Acceptance","39"],
]

const data5 = [
    ["Pending at Maker","5"],
	["Pending at Checker","8"],
	["Pending with Bank","15"],
]



    return (

        <>

            <CCol xs="12" md="12" className="mb-4">

                <CCard>

                    <CCardBody>

                        <CTabs activeTab="TF_TXN">

                            <CNav variant="tabs">

                                <CNavItem>

                                    <CNavLink data-tab="TF_TXN">

                                        Transactional Report

                                     </CNavLink>

                                </CNavItem>

                                <CNavItem>

                                    <CNavLink data-tab="Productivity">
                                        Productivity Report
                                    </CNavLink>

                                </CNavItem>
                                <CNavItem>

                                    <CNavLink data-tab="Rejection">

                                      Rejection Report

                                     </CNavLink>

                                </CNavItem>
 

                            </CNav>

                            <CTabContent>

                                <CTabPane data-tab="TF_TXN">

                                    <CCardBody>

                                    <MUIDataTable data={data1} columns={columns1} options={options} />
                                        
                                    </CCardBody>

                                </CTabPane>

                                <CTabPane data-tab="Productivity">
                                    
                                    <CCardBody>

                                         <MUIDataTable data={data2} columns={columns2} options={options} />
                                    </CCardBody>

                                </CTabPane>

                                <CTabPane data-tab="Rejection">

                                    <CCardBody>

                                        <MUIDataTable data={data3} columns={columns3} options={options} />
                                    </CCardBody>

                                </CTabPane>

                            </CTabContent>

                        </CTabs>

                    </CCardBody>

                </CCard>

            </CCol>

        </>

    )

}

export default Collapses