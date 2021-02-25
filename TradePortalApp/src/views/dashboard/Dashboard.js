import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MUIDataTable from "mui-datatables";
import React, { Component } from 'react';
import inboxData from '../users/inboxData'
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
  } from '@coreui/react'

export default class test2 extends Component {
    state = {
        page: 0,
        count: 1,
        data: [["Loading your Tasks..."]],
        isLoading: false
    };

    render() {


        const columns = [
            {
                name: "BDTxnNo",
                label: "Txn No"

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
                name: "CustID",
                label: "Cust ID"
            },
            {
                name: "BDAccountNo",
                label: "Account No"
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
                name: "PartyName",
                label: "Party Name"
            },
            {
                name: "BillRefNo",
                label: "Bill Ref No"
            },
            {
                name: "CustomerPortalRefNo",
                label: "Customer Portal Ref No"
            },
            {
                name: "EntryTime",
                label: "Entry Time"
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

        ];

        const rejColumns = [
            {
                name: "BDTxnNo",
                label: "Txn No"

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
                name: "CustID",
                label: "Cust ID"
            },
            {
                name: "BDAccountNo",
                label: "Account No"
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
                name: "PartyName",
                label: "Party Name"
            },
            {
                name: "BillRefNo",
                label: "Bill Ref No"
            },
            {
                name: "CustomerPortalRefNo",
                label: "Customer Portal Ref No"
            },
            {
                name: "EntryTime",
                label: "Entry Time"
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

        ];
        const { data, isLoading } = this.state;
        const options = {

            filterType: 'dropdown',
            responsive: 'stacked',
            selectableRows: false
        };

        return (
            <div>
                <CRow>
                    <CCol>
                        <CCard>



                        
                            <CCardHeader>
                                Inbox
                            </CCardHeader>
                            <div class="column">
                                <CButton color="primary" className="px-4">Create New</CButton>
                            </div>
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
                                        <MUIDataTable data={inboxData} columns={columns} options={options} />
                                    </CCardBody>
                               </CTabPane>

                                <CTabPane data-tab="rej">

                                    <br />
                                    <CCardHeader id="headingTwo">
                                        <h5 className="m-0 p-0">Rejected Cases</h5>
                                    </CCardHeader>
                                    <CCardBody>
                                        <MUIDataTable data={inboxData} columns={rejColumns} options={options} />
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

