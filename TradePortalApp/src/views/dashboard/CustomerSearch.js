import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MUIDataTable from "mui-datatables";
import CustomToolbar from "./customToolbar";
import React, { Component } from 'react';
import inboxData from '../users/inboxData';
import rejData from '../users/rejData';
import { Link } from 'react-router-dom';
import CIcon from '@coreui/icons-react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CFormGroup,
    CInput,
    CLabel,
    CButton,CSelect
  } from '@coreui/react';
  import UserContext from '../../UserContext';

export default class test2 extends Component {
    static contextType = UserContext;


  constructor(props){
    super(props);
    this.state={
      userN:'',
      page: 0,
      count: 1,
      data: [["Loading your Tasks..."]],
      isLoading: false
  
    }
    
    console.log("value of user state "+this.state.userN); 
  }

  componentDidMount() {
    const user = this.context;

    console.log(JSON.stringify(user)) ;
    console.log(user);
    console.log(user.user.name);
    this.setData(user.user.name);

    document.getElementById("CustSearch").style.display="none";
  }
  
  setData = (e) =>{

    this.setState({
      userN : e,
    })
    console.log("value of user inboxpage "+this.state.userN); 
  }
  
  
   search(){
    console.log("inside search"); 
    document.getElementById("CustSearch").style.display="";
	}

    render() {
        let columns=[];
        columns = [

           
			{
                name: "BDProduct",
                label: "Product"
            },
            {
                name: "BDSubProduct",
                label: "Sub Product"
            },
            {
                name: "BDOperation",
                label: "Operation"
            },
            {
                name: "BDCurrency",
                label: "Currency"
            },
			{
                name: "BDAmount",
                label: "Amount"
            },
			{
                name: "BenfName",
                label: "Beneficiary Name"
            },
			{
                name: "BankRefNo",
                label: "Bank Ref No"
            },
			{
                name: "CustomerPortalRefNo",
                label: "Ref No"
            },
            {
                name: "TxnNo",
                label: "Txn No"
            },
            
            {
                name: "CurrentStatus",
                label: "Current Status"
            },
           
            {
                name: "EntryTime",
                label: "Entry Date Time"
            },

        ]

        
        const { data, isLoading } = this.state;
        const options = {

            filterType: 'dropdown',
            responsive: 'stacked',
            selectableRows: false,
        
           
        };

        let inboxData =[];
 inboxData = [
    [ "Guarantees","Inward Guarantee","Issuance","USD","53992","Andrew Kumar","4623857","92991265","39014177160","Active","7-03-2021 10:30 AM"],
	[ "LC","Import-LC","Crystalisation","USD","19103","Chris Dale","1278965","21551965","15494862853","Active","11-03-2021 7:04 AM"],
	[ "LC","Import-LC","Amendment","USD","48544","Joe Emison","6785436","25355519","61991875450","Active","9-03-2021 2:30 PM"],
   [ "Guarantees","Inward Guarantee","Amendment","USD","21525","Susan James","9453621","91921721","37934808227","Active","11-03-2021 2:12 PM"],
   [ "LC","Import-LC","Issuance","USD","21525","David Smyth","9075445","29430238","28033677916","Active","2-03-2021 11:54 AM"],
  
 ]  
 



        return (
            <div>
                <CRow>
                    <CCol>
                        <CCard>
                           
                        <CCardHeader id="headingOne">
                            <h5 className="m-0 p-0">Search Criteria</h5>
                        </CCardHeader>



<CCardBody>

<CFormGroup row className="my-0">
<CCol xs="3">

<CFormGroup>

    <CLabel htmlFor="company">From Date</CLabel>

    <CInput type="date" id="date-input" name="date-input" placeholder="date" />

</CFormGroup>

</CCol>
<CCol xs="3">

<CFormGroup>

    <CLabel htmlFor="company">To Date</CLabel>

    <CInput type="date" id="date-input" name="date-input" placeholder="date" />

</CFormGroup>

</CCol>


    <CCol xs="3">

        <CFormGroup>

            <CLabel htmlFor="company">Bank Reference No</CLabel>

            <CInput id="company" placeholder=""/>

        </CFormGroup>

    </CCol>
        <CCol xs="3">

        <CFormGroup>

            <CLabel htmlFor="company">Customer Portal Reference No</CLabel>

            <CInput id="company" placeholder="" />

        </CFormGroup>

    </CCol>

    
</CFormGroup>



<CFormGroup row className="my-0">
<CCol xs="3">

<CFormGroup>

    <CLabel htmlFor="company">Transaction No</CLabel>

    <CInput id="company" placeholder="" />

</CFormGroup>

</CCol>



    <CCol xs="3">

        <CFormGroup>

            <CLabel htmlFor="company">Beneficiary Name</CLabel>

            <CInput id="company" placeholder="" />

        </CFormGroup>

    </CCol>
    <CCol xs="3">

        <CFormGroup>

            <CLabel htmlFor="company">Currency </CLabel>
            <CRow>
            <CSelect id ='selectcurrency'>
             <option value="0">Please Select Currency</option>
             <option value="1">USD</option>
             <option value="2">EUR</option>
             <option value="3">INR</option>
             <option value="3">AED</option>
             <option value="3">BHD</option>
            </CSelect>
            
           
            </CRow>
            
            
        </CFormGroup>

    </CCol>


    <CCol xs="3">

        <CFormGroup>
        <CLabel htmlFor="company">Amount </CLabel>
            <CRow>
            <CSelect id="selectCriteriaAmt">
             <option value="0">Amount Criteria</option>
             <option value="1">Greater than</option>
             <option value="2">Less than</option>
             <option value="3">Equal to </option>
            </CSelect>&nbsp;
            
            <CInput id="selectCriteriaAmt" placeholder="" />
            </CRow>
            

                    

        </CFormGroup>

    </CCol>
    
    

</CFormGroup>
<CFormGroup row className="my-0">
<CCol xs="3">

<CFormGroup>

    <CLabel htmlFor="company">Product</CLabel>

    <CSelect id="select">
    <option value="0">Please Select Product Name</option>
    <option value="1">Import LC</option>
    <option value="2">Import Collection</option>
   
    </CSelect>

</CFormGroup>

</CCol> 
<CCol xs="3" style={{marginTop:'22px'}}>
        
        <CFormGroup>
            <CButton color="warning" className="px-4" onClick={this.search.bind(this)} >
            <CIcon name="cilSearch" />&nbsp;Search</CButton>
            
        </CFormGroup>
    
</CCol>
</CFormGroup>
</CCardBody>


                            <div id="CustSearch">
                            &nbsp;&nbsp; &nbsp;&nbsp;<CLabel >
                           <h5 className="m-0 p-0"> Transaction Search Result</h5>
                               
                            </CLabel>
                            
                                <MUIDataTable data={inboxData} columns={columns} options={options} />
                            
                            </div>
                        </CCard>
                    </CCol>
                </CRow>
            </div>
        )
    }


}

