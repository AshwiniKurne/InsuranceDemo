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
    CRow
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
                name: "BeneficiaryName",
                label: "Beneficiary Name"
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
                            <CCardBody>

                                <MUIDataTable data={inboxData} columns={columns} options={options} />

                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </div>
        )
    }


}

