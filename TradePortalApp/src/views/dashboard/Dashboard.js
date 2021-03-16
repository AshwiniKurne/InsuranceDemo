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
    CButton,
    CNav,
    CNavItem,
    CNavLink,
    CTabContent,
    CTabPane,
    CTabs
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
        {this.state.userN =='Maker'?( columns = [

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

        ]):(
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
                              <Link to='/MakerChecker/Checker' ><PlayArrowIcon /></Link>
                            );
                        }
                    }
                },
    
            ]
        )}
        
        let rejColumns =[];
        {this.state.userN =='Maker'?( rejColumns = [
            
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
                name: "BenefName",
                label: "Beneficiary Name"
            },
			{
                name: "BDTxnNo",
                label: "Txn No"

            },
            {
                name: "BankRefRefNo",
                label: "Bank Ref No"
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

        ]):( rejColumns = [
            
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
                name: "BenefName",
                label: "Beneficiary Name"
            },
			{
                name: "BDTxnNo",
                label: "Txn No"

            },
            {
                name: "BankRefRefNo",
                label: "Bank Ref No"
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
                          <Link to='/MakerChecker/Checker' ><PlayArrowIcon /></Link>
                        );
                    }
                }
            },

        ])}
        
        const { data, isLoading } = this.state;
        const options = {

            filterType: 'dropdown',
            responsive: 'stacked',
            selectableRows: false,
        
           
        };

        let inboxData =[];
 {this.state.userN =='Maker'?( inboxData = [
    [ "92991265","LC","Lodgement","Issuance","USD","53992","39014177160","Sam Mathews","07-03-2021 10:30 AM"],
    ["21551965","LC","Lodgement","Issuance","USD","19103","15494862853","John Almaida","11-03-2021 10:04 AM"],
    ["25355519","LC","Lodgement","Issuance","USD","48544","61991875450","Dwyane Rushhill","09-03-2021 2:30 PM"],
    ["91921721","LC","Lodgement","Issuance","USD","21525","37934808227","Jaffery Dsouza","11-03-2021 2:12 PM"],
    ["29430238","LC","Lodgement","Issuance","USD","12047","28033677916","Jaffin Mahen","02-03-2021 11:54 AM"],
    
 ]):( inboxData = [
    ["78773170","LC","Lodgement","Issuance","USD","68007","88923439809","Ken Dcosta","10-03-2021 4:21 PM"],
    ["52838775","LC","Lodgement","Issuance","USD","15852","26346547852","Ashwini Kurne","06-03-2021 6:10 PM"],
    ["49442826","Collection","Import","Issuance","USD","78694","70936878051","Aparna Pandey","05-03-2021 1:45 PM"],
    ["96064947","Collection","Export","Issuance","USD","29989","51514445397","Sanchay Gupta","02-03-2021 5:17 PM"]
    
 ])}

 let rejData =[];
 {this.state.userN =='Maker'?( rejData = [ 
    ["28963122","LC","Lodgement","Issuance","USD","52562","69014177160","Chintan Kumar","89807","92991265","12-03-2021 1:30 AM"],
    ["29051965","LC","Lodgement","Issuance","USD","54686","1433442853","Abhijit Rai","54210","79774987", "13-03-2021 11:12 AM"],
    ["29155519","LC","Lodgement","Issuance","USD","34678","56741875450","Ravish Chahal","46541","36991879","05-03-2021 2:40 PM"],
    ["59612625","LC","Lodgement","Issuance","USD","45689","12674808227","Erica Dsouza","85085","91921721","03-03-2021 7:12 PM"],
    ["54085560","LC","Lodgement","Issuance","USD","95623","98323677916","Swati Sharma","84606","29430238","09-03-2021 12:54 AM"],
    
    ]):(rejData = [ 
    ["20873170","LC","Lodgement","Issuance","USD","90001","58973439809","Ken hyun","59620","41044359","14-03-2021 8:21 PM"],
    ["78838775","LC","Lodgement","Issuance","USD","48932","45986547852","Sharad Balodi","33282","55159543","10-03-2021 3:10 PM"],
    ["46742826","Collection","Import","Issuance","USD","89673","33446878051","Karan Rathod","23962","43147308","07-03-2021 6:45 PM"],
    ["93104947","Collection","Export","Issuance", "USD","58964","76874445397","Shiv Shinde","65139","23901250","03-03-2021 2:17 PM"]
    ]
    )}



        return (
            <div>
                <CRow>
                    <CCol>
                        <CCard>



                        
                            <CCardHeader>
                                Inbox
                            </CCardHeader>
                            <div class="tabCheck">
                            <CTabs activeTab="new">
                            <CNav variant="tabs">
                                <CNavItem>
                                    <CNavLink data-tab="new">
                                        New Cases
                                     </CNavLink>
                                </CNavItem>

                                <CNavItem>
                                    <CNavLink data-tab="rej">
                                    Rejected Cases
									</CNavLink>
                                </CNavItem>

                            </CNav>

                            <CTabContent>
                                <CTabPane data-tab="new">
                                    <br />
                                    <CCardBody>
                                    {this.state.userN == 'Maker'?(
                                        <MUIDataTable data={inboxData} columns={columns} options={options} />):(
                                            <MUIDataTable data={inboxData} columns={columns} options={options} />      
                                        )}
                                    </CCardBody>
                               </CTabPane>

                                <CTabPane data-tab="rej">

                                    <br />
                                    
                                    <CCardBody>
                                    {this.state.userN == 'Maker'?(  
                                        <MUIDataTable data={rejData} columns={rejColumns} options={options} />):(
                                            <MUIDataTable data={rejData} columns={rejColumns} options={options} />  
                                        )}
                                    </CCardBody>
                                </CTabPane>

                                

                            </CTabContent>

                        </CTabs>
                        </div>
                        
                            {/* <CCardBody>
                                <MUIDataTable data={inboxData} columns={columns} options={options} />
                            </CCardBody> */}
                        </CCard>
                    </CCol>
                </CRow>
            </div>
        )
    }


}

