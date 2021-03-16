import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MUIDataTable from "mui-datatables";
import CustomToolbar from "./customToolbar";
import React, { Component } from 'react';
import inboxData from '../users/inboxData';
import rejData from '../users/rejData';
import { Link } from 'react-router-dom';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CFormGroup,
    CInput,
    CLabel,
    CButton
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
  }
  
  setData = (e) =>{

    this.setState({
      userN : e,
    })
    console.log("value of user inboxpage "+this.state.userN); 
  }
  
  
  

    render() {
        let columns=[];
        columns = [

            {
                name: "CustomerPortalRefNo",
                label: "Ref No"
            },
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
                name: "BDAccountNo",
                label: "Account No"
            },
            
            
            {
                name: "BenfName",
                label: "Beneficiary Name"
            },
            
           
            {
                name: "EntryTime",
                label: "Entry Date Time"
            },
            {
                name: "Action",
                options: {
                    filter: false,
                    sort: false,

                    customBodyRender: (value, tableMeta, updateValue) => {
                        const { data } = this.state;
                        let rowData = data[tableMeta.rowIndex];

                        return (
                          <Link to='/MakerChecker/Maker' ><PlayArrowIcon /></Link>
                        );
                    }
                }
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
    [ "92991265","LC","Lodgement","Issuance","USD","53992","39014177160","Sam Mathews","07-03-2021 10:30 AM"],
    ["21551965","LC","Lodgement","Issuance","USD","19103","15494862853","John Almaida","11-03-2021 10:04 AM"],
    ["25355519","LC","Lodgement","Issuance","USD","48544","61991875450","Dwyane Rushhill","09-03-2021 2:30 PM"],
    ["91921721","LC","Lodgement","Issuance","USD","21525","37934808227","Jaffery Dsouza","11-03-2021 2:12 PM"],
    ["29430238","LC","Lodgement","Issuance","USD","12047","28033677916","Jaffin Mahen","02-03-2021 11:54 AM"]
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

    <CCol xs="4">

        <CFormGroup>

            <CLabel htmlFor="company">Bank Reference No</CLabel>

            <CInput id="company" placeholder=""/>

        </CFormGroup>

    </CCol>
    <CCol xs="4">

        <CFormGroup>

            <CLabel htmlFor="company">Customer Portal Reference No</CLabel>

            <CInput id="company" placeholder="" />

        </CFormGroup>

    </CCol>

    <CCol xs="4">

        <CFormGroup>

            <CLabel htmlFor="company">Transaction No</CLabel>

            <CInput id="company" placeholder="" />

        </CFormGroup>

    </CCol>
    
</CFormGroup>



<CFormGroup row className="my-0">

    <CCol xs="4">

        <CFormGroup>

            <CLabel htmlFor="company">Beneficiary Name</CLabel>

            <CInput id="company" placeholder="" />

        </CFormGroup>

    </CCol>

    <CCol xs="4">

        <CFormGroup>

            <CLabel htmlFor="company">Amount</CLabel>

            <CInput id="company" placeholder="" />

        </CFormGroup>

    </CCol>

    <CCol xs="4">

        <CFormGroup>
            <CButton color="primary" className="px-4">Search</CButton>
        </CFormGroup>

    </CCol>

</CFormGroup>

</CCardBody>



                            <CCardHeader>
                                Customer Search
                            </CCardHeader>
                            <div class="tabCheck">
                                <MUIDataTable data={inboxData} columns={columns} options={options} />
                            </div>
                        </CCard>
                    </CCol>
                </CRow>
            </div>
        )
    }


}

