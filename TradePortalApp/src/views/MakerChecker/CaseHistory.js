import React, { Component } from 'react';
import { Timeline } from 'antd';
import CIcon from '@coreui/icons-react';


export default class Casehistory extends Component {
    render() {
        return (
            <Timeline>
            <Timeline.Item color="green">Lead generated 15-APR-2020</Timeline.Item>
            <Timeline.Item color="green">Home loan process initiated 15-APR-2020</Timeline.Item>
            <Timeline.Item dot={<CIcon type="mail" name ='cil-inbox' style={{ fontSize: '16px' }} />} color="green">
              Mail sent to applicant for supporting document 15-APR-2020
            </Timeline.Item>
            <Timeline.Item dot={<CIcon type="file-pdf" name ='cil-inbox' style={{ fontSize: '16px' }} />} color="green">
            Received documents from applicant 15-APR-2020</Timeline.Item>
            <Timeline.Item color="green">Case moved to data entry 15-APR-2020</Timeline.Item>
            <Timeline.Item color="green"> Data entry started  15-APR-2020</Timeline.Item>
            <Timeline.Item dot={<CIcon type="mail" name ='cil-inbox' style={{ fontSize: '16px' }} />} color="green">
            Mail sent to applicant for missing bank statement 15-APR-2020</Timeline.Item>
            <Timeline.Item dot={<CIcon type="file-pdf" name ='cil-inbox' style={{ fontSize: '16px' }} />} color="green">Received bank statement 15-APR-2020</Timeline.Item>
            {/* <Timeline.Item color="green">Data entry completed and case moved to underwriter 22-Jan-2020</Timeline.Item>
            <Timeline.Item color='red'>
            <p>Underwriter moved case back to data entry 22-Jan-2020</p>
            <p>Comments : Applicant's name is different in high school certificate</p>
            </Timeline.Item>
            <Timeline.Item dot={<MailOutlined style={{ fontSize: '16px' }} />} color="green">Mail sent to applicant for discrepancy in name 23-Jan-2020</Timeline.Item>
            <Timeline.Item dot={<FilePdfOutlined style={{ fontSize: '16px' }} />} color="green">Applicant submitted supporting documents for name change 23-Jan-2020</Timeline.Item>
            <Timeline.Item color='green'>Case moved to underwriter for further processing 23-Jan-2020</Timeline.Item>
            <Timeline.Item dot={<CIcon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Background verification in process </Timeline.Item> */}
          </Timeline>
        )
    }
}
