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

    const columns1 = [{name: "PRODUCT",label: "Product"},{name: "SUBPRODUCT",label: "Sub Product"},{name: "OPERATION",label: "Operation"},{name: "TRANSACTIONID",label: "Transaction Id"},{name: "BeneNAME",label: "Beneficiary Name"},{name: "ACCOUNTNO",label: "Account No."},{name: "CURRENCY",label: "Currency"},{name: "AMOUNT",label: "Amount"},{name: "CURRENTSTATUS",label: "Current Status"},  {name: "REFERENCENO",label: "Reference No"}]
 
 
    const columns2 = [{name: "UserID",label: "User ID"},{name: "Product",label: "Product"},{name: "SUBPRODUCT",label: "Sub Product"},{name: "Operation",label: "Operation"},{name: "Role",label: "Role"},{name: "NoofTxn",label: "No of Txn"}]
   
   
    const columns3 = [{name: "SrNo",label: "Sr. No"},{name: "WID",label: "WID"},{name: "Product",label: "Product"},{name: "SUBPRODUCT",label: "Sub Product"},{name: "Operation",label: "Operation"},{name: "Currency",label: "Currency"},{name: "Amount",label: " Amount "},{name: "RejectionDate",label: "Rejection Date"},{name: "RejectReason",label: "Reject Reason"}]
   
   
   
   
	const columns6 =[{name:"Product",label:"Product"},{name: "SUBPRODUCT",label: "Sub Product"},{name:"OPERATION",label:"Operation"},{name:"TRANSACTION ID",label:"Transaction Id"},{name:"BENE NAME",label:"Bene Name "},{name:"DUE DATE",label:"Due Date"},{name:"CURRENCY",label:"Currency"},{name:"AMOUNT",label:"Amount"},{name:"REFERENCE NO",label:"Reference No"}]
   
    const options = {

        filterType: 'dropdown',
        responsive: 'stacked',
        selectableRows: false
    
    
    };

    const data1 = [
    ["LC", "Import-LC", "Issuance", "54678", "Nil Co. Ltd", "987654123456", "USD", "125678.08", "Maker", "LC123456098"],
    ["LC", "Import-LC", "Amendment", "54679", "Amaz INC", "987654123445", "EUR", "9876.43", "Authoriser", "LC123456023"],
    ["Bills Under LC", "Import-LC", "Realisation", "54680", "Niom Co", "987654123891", "JPY", "2348767", "Authoriser", "LC123454398"],
    ["Bill under collection", "Open Account", "Advance payment", "54681", "Power Co In", "987654123345", "GBP", "124567.12", "Maker", "FOR123468954"],
    ["Bill under collection", "Import Bill", "Lodgement", "54682", "Ask De ", "987654123098", "USD", "678.34", "Maker", "LC238754098"],
    ["LC", "Import-LC", "Devolvement", "54683", "Flipkar Org", "987654123786", "USD", "954378.95", "Authoriser", "LC123456027"],
    ["Bill under collection", "Export Bill", "Acceptance", "54684", "Nil Co. Ltd", "987654123456", "USD", "1908079.56", "Maker", "LC81579568"],
    ["Guarantees", "Inward Guarantee", "Issuance", "54685", "Amaz INC", "987654123445", "EUR", "2861780.17", "Authoriser", "LC107140115"],
    ["Guarantees", "Outward Guarantee", "Advising", "54686", "Niome Co", "987654123891", "JPY", "3815480.78", "Authoriser", "LC222438186"],
    ["Guarantees", "Inward Guarantee", "Closure", "54687", "Power Co In", "987654123345", "GBP", "4769181.39", "Maker", "FIR123468954"],
    ["Guarantees", "Outward Guarantee", "Amendment", "54688", "Ask De ", "987654123098", "USD", "5722882", "Maker", "LC453034328"],
    ["LC", "Import-LC", "Issuance", "54689", "Flipkar Org", "987654123786", "USD", "6676582.61", "Authoriser", "LC568332399"],
    ["LC", "Import-LC", "Issuance", "54690", "Nil Co. Ltd", "987654123456", "USD", "7630283.22", "Maker", "LC683630470"],
    ["Bills Under LC", "Import-LC", "Acceptance", "54691", "Amaz INC", "987654123445", "EUR", "8583983.83", "Authoriser", "LC798928541"],
    ["LC", "Export-LC", "Advising", "54692", "Niome Co", "987654123891", "JPY", "9537684.44", "Authoriser", "LC914226612"],
    ["LC", "Import-LC", "Issuance", "54693", "Power Co In", "987654123345", "GBP", "10491385.05", "Maker", "RIR123468954"],
    ["LC", "Import-LC", "Issuance", "54694", "Ask De ", "987654123098", "USD", "11445085.66", "Maker", "LC114482275"],
    ["Bills Under LC", "Export-LC", "Amedment", "54695", "Flipkar Org", "987654123786", "USD", "12398786.27", "Authoriser", "LC126012082"],
    ["LC", "Export-LC", "Advising", "54696", "Nil Co. Ltd", "987654123456", "USD", "13352486.88", "Maker", "LC137541889"],
    ["Bill under collection", "Export Bill", "Free of Payment", "54697", "Amaz INC", "987654123445", "EUR", "14306187.49", "Authoriser", "LC149071696"]
]


const data2 = [
    ["234566", "Bill under collection", "Import Bill", "Import Payment", "Maker", "2"],
    ["987553", "Bill under collection", "Export Bill", "Lodgement", "Authoriser", "4"],
    ["1740540", "Bill under collection", "Import-LC", "Issuance", "Maker", "1"],
    ["2493527", "LC", "Import-LC", "Issuance", "Authoriser", "6"],
    ["3246514", "Bill under collection", "Import-LC", "Issuance", "Authoriser", "6"],
    ["3999501", "Guarantees", "Inward Guarantee", "Issuance", "Maker", "9"],
    ["4752488", "Guarantees", "Outward Guarantee", "Amendment", "Maker", "14"],
    ["5505475", "LC", "Import-LC", "Issuance", "Authoriser", "12"],
    ["6258462", "Guarantees", "Inward Guarantee", "Issuance", "Maker", "12"],
    ["7011449", "Bill under collection", "Export Bill", "Acceptance", "Authoriser", "12"],
    ["7764436", "LC", "Import-LC", "Issuance", "Authoriser", "8"],
    ["8517423", "LC", "Import-LC", "Realisation", "Maker", "20"],
    ["9270410", "LC", "Import-LC", "Crystalisation", "Maker", "23"],
    ["1002339", "Bill under collection", "Export Bill", "Lodgement", "Authoriser", "18"],
    ["1077638", "LC", "Import-LC", "Issuance","Maker", "6"],
    ["1152937", "LC", "Import-LC", "Issuance", "Authoriser", "24"],
    ["1228235", "LC", "Import-LC", "Issuance", "Authoriser", "34"],
    ["1303534", "LC", "Import-LC", "Issuance", "Maker", "21"],
    ["1378833", "LC", "Import-LC", "Issuance", "Maker", "8"],
    ["1454131", "Remittance", "Inward Remittance", "Inward", "Authoriser", "7"],
    ["1529430", "LC", "Import-LC", "Issuance", "Maker", "14"],
    ["1604729", "LC", "Import-LC", "Issuance", "Authoriser", "26"],
    ["1680028", "Remittance", "Outward Remittance", "Outward","Authoriser", "22"],
    ["1755326", "LC", "Import-LC", "Issuance","Maker", "21"]
]


const data3 = [
    ["1", "54678", "LC", "Import-LC", "Issuance", "USD", " 125,678.08 ", "8/18/20", "Checklist not filled"],
    ["2", "54679", "LC", "Export-LC", "Amendment", "EUR", " 9,876.43 ", "8/18/20", "Compliance Miss"],
    ["3", "54680", "LC", "Import-LC", "Issuance", "JPY", " 2,348,767.00 ", "8/18/20", "Docs Missing"],
    ["4", "54681", "Bills Under LC", "Import-LC", "Acceptance", "GBP", " 124,567.12 ", "8/18/20", "Amount wrongly captured"],
    ["5", "54682", "Guarantees", "Inward Guarantee", "Issuance", "USD", " 678.34 ", "8/18/20", "Bene Name not matching"],
    ["6", "54683", "Guarantees", "Inward Guarantee", "Amendment", "USD", " 954,378.95 ", "8/18/20", "Sign not verified"],
    ["7", "54684", "LC", "Import-LC", "Issuance", "USD", " 1,908,079.56 ", "8/18/20", "Checklist not filled"],
    ["8", "54685", "Remittance", "Inward Remittance", "Inward", "EUR", " 2,861,780.17 ", "8/18/20", "Compliance Miss"],
    ["9", "54686", "Bills Under LC", "Import-LC", "Lodgement", "JPY", " 3,815,480.78 ", "8/18/20", "Docs Missing"],
    ["10", "54687", "LC", "Import-LC", "Issuance", "GBP", " 4,769,181.39 ", "8/18/20", "Amount wrongly captured"],
    ["11", "54688", "LC", "Import-LC", "Issuance", "USD", " 5,722,882.00 ", "8/18/20", "Bene Name not matching"],
    ["12", "54689", "Bills Under LC", "Import-LC", "Realisation", "USD", " 6,676,582.61 ", "8/18/20", "Sign not verified"],
    ["13", "54690", "LC", "Import-LC", "Issuance", "USD", " 7,630,283.22 ", "8/18/20", "Checklist not filled"],
    ["14", "54691", "LC", "Import-LC", "Issuance", "EUR", " 8,583,983.83 ", "8/18/20", "Compliance Miss"],
    ["15", "54692", "LC", "Import-LC", "Issuance", "JPY", " 9,537,684.44 ", "8/18/20", "Docs Missing"],
    ["16", "54693", "LC", "Import-LC", "Issuance", "GBP", " 1,049,385.05 ", "8/18/20", "Amount wrongly captured"],
    ["17", "54694", "LC", "Import-LC", "Issuance", "USD", " 11,445,085.66 ", "8/18/20", "Bene Name not matching"],
    ["18", "54695", "LC", "Import-LC", "Issuance", "USD", " 1,298,786.27 ", "8/17/20", "Sign not verified"],
    ["19", "54696", "LC", "Import-LC", "Issuance", "USD", " 1,335,286.88 ", "8/17/20", "Checklist not filled"],
    ["20", "54697", "LC", "Import-LC", "Issuance", "EUR", " 1,430,187.49 ", "8/17/20", "Compliance Miss"],
    ["21", "54698", "LC", "Import-LC", "Issuance", "EUR", " 15,259,888.10 ", "8/17/20", "Docs Missing"],
    ["22", "54699", "LC", "Import-LC", "Issuance", "JPY", " 1,621,358.00 ", "8/17/20", "Amount wrongly captured"],
    ["23", "54700", "LC", "Import-LC", "Issuance", "GBP", " 177,289.32 ", "8/17/20", "Bene Name not matching"],
    ["24", "54701", "LC", "Import-LC", "Issuance", "USD", " 10,989.93 ", "8/17/20", "Sign not verified"]
]



const data6 = [
    ["LC", "Export-LC", "Advising", "54678", "Nil Co. Ltd", "20-04-2021", "USD", "125678.08", "LC123456098"],
    ["LC", "Import-LC", "Realisation", "54682", "Ask De ", "20-04-2021", "EUR", "678.34", "LC238754098"],
    ["Bill under collection", "Import Bill", "Acceptance", "54684", "Nil Co. Ltd", "22-04-2021", "GBP", "1908079.56", "LC81579568"],
    ["Bill under collection", "Export Bill", "Lodgement", "54690", "Pepsi Co Ltd", "23-04-2021", "GBP", "7630283.22", "LC683630470"],
    ["Guarantees", "Inward Guarantee", "Closure", "54694", "3M world Ltd", "27-04-2021", "USD", "11445085.66", "LC114482275"],
    ["Guarantees", "Outward Guarantee", "Invocation", "54696", "Nil Co. Ltd", "03-05-2021", "EUR", "13352486.88", "LC137541889"],
    ["LC", "Import-LC", "Crystalisation", "54699", "BCE Co UK", "04-05-2021", "USD", "13352486.88", "LC137541889"]
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
								<CNavItem>

                                    <CNavLink data-tab="DueDate">

                                      Due Date Report

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
								
								 <CTabPane data-tab="DueDate">

                                    <CCardBody>

                                        <MUIDataTable data={data6} columns={columns6} options={options} />
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