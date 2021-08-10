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
                name: "ClaimID",
                label: "Claim ID"
            },
			{
                name: "ClaimDate",
                label: "Claim Date"
            },
            {
                name: "PolicyNumber",
                label: "Policy Number"
            },
            {
                name: "PolicyIssueDate",
                label: "Policy Issue Date"
            },
            {
                name: "LAName",
                label: "LA Name"
            },
			{
                name: "SumAssured",
                label: "Sum Assured"
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
                    name: "ClaimID",
                    label: "Claim ID"
                },
                {
                    name: "Claim Date",
                    label: "ClaimDate"
                },
                {
                    name: "PolicyNumber",
                    label: "Policy Number"
                },
                {
                    name: "PolicyIssueDate",
                    label: "Policy Issue Date"
                },
                {
                    name: "LAName",
                    label: "LA Name"
                },
                {
                    name: "SumAssured",
                    label: "Sum Assured"
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
                              <Link to='/MakerChecker/ClaimAccesor' ><PlayArrowIcon /></Link>
                            );
                        }
                    }
                },
    
            ]
        )}
        
        let rejColumns =[];
        {this.state.userN =='Maker'?( rejColumns = [
            
				{
                    name: "ClaimID",
                    label: "Claim ID"
                },
                {
                    name: "Claim Date",
                    label: "ClaimDate"
                },
                {
                    name: "PolicyNumber",
                    label: "Policy Number"
                },
                {
                    name: "PolicyIssueDate",
                    label: "Policy Issue Date"
                },
                {
                    name: "LAName",
                    label: "LA Name"
                },
                {
                    name: "SumAssured",
                    label: "Sum Assured"
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
                    name: "ClaimID",
                    label: "Claim ID"
                },
                {
                    name: "Claim Date",
                    label: "ClaimDate"
                },
                {
                    name: "PolicyNumber",
                    label: "Policy Number"
                },
                {
                    name: "PolicyIssueDate",
                    label: "Policy Issue Date"
                },
                {
                    name: "LAName",
                    label: "LA Name"
                },
                {
                    name: "SumAssured",
                    label: "Sum Assured"
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
                          <Link to='/MakerChecker/ClaimAccesor'><PlayArrowIcon  /></Link>
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
    [ "92991265","03-02-2021","23123","12-02-2021","Abhishek Deshmukh","53992"],
    ["21551965","07-04-2021","88872","02-11-2021","Ravi Singh","19103"],
    ["25355519","11-02-2021","67676","13-09-2021","Avinash Kumar","48544"],
    ["91921721","16-03-2021","20832","18-05-2021","Sumit Bugade","21525"],
    ["29430238","21-02-2021","90232","24-09-2021","Swara Surve","12047"]
    
 ]):( inboxData = [
    ["78773170","12-09-2020","12832","16-12-2020","Ritika Nile","68007"],
    ["52838775","19-10-2020","23712","27-11-2020","Dhawni Bhat","15852"],
    ["49442826","12-11-2020","75637","12-02-2021","Anvita ghosal","78694"],
    ["96064947","12-02-2021","83672","26-05-2021","Arun Kale ","29989"]
    
 ])}

 let rejData =[];
 {this.state.userN =='Maker'?( rejData = [ 
    ["28963122","05-01-2021","32812","16-02-2021","Shrikant Tiwari","52562"],
    ["29051965","29-03-2021","89326","17-05-2021","Akshay Lokhande","54686"],
    ["29155519","15-01-2021","45628","23-06-2021","Mayur Jadhav","34678"],
    ["59612625","23-08-2021","89712","10-09-2021","Nikita Hande","45689"],
    ["54085560","14-01-2021","78963","17-04-2021","Simran Balodi","95623"]
    
    ]):(rejData = [ 
    ["20873170","24-01-2021","34892","19-03-2021","Karan Jha","90001"],
    ["78838775","22-04-2021","67021","28-06-2021","Hanu Singh","48932"],
    ["46742826","21-02-2021","83578","27-04-2021","Suraj Bohra","89673"],
    ["93104947","03-01-2021","38917","10-03-2021", "Amit Singh","58964"]
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

