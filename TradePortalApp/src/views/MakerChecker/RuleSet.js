import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MUIDataTable from "mui-datatables";

import React, { Component,Fragment } from 'react';


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
    CTabs,CModal,CModalBody,CModalFooter
    
  } from '@coreui/react';
  import UserContext from '../../UserContext';
  import CIcon from '@coreui/icons-react'
import { cilDisabled } from '@coreui/icons';


export default class Ruleset extends Component {
    static contextType = UserContext;


  constructor(props){
    super(props);
    this.state={
      userN:'',
      page: 0,
      count: 1,
      data: [["Loading your Tasks..."]],
      isLoading: false,
      modal : false
  
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
  
   toggle = () => {
    this.setState({
        modal : true,
      })
    
    console.log("modal val qqq "+this.state.modal);
}
toggle2 = () => {
    this.setState({
        modal : false,
      })
    
    console.log("modal val qqq2 "+this.state.modal);
}

    render() {
        let columns=[];
         columns = [

            {
                name: "SrNo",
                label: "Sr. No"
            },
			{
                name: "Description",
                label: "Description"
            },
            {
                name: "Pass",
                label: "Pass",
				options: {
                    filter: false,
                    sort: false,

                    customBodyRender: (value, tableMeta, updateValue) => {
                        

                        return (
							<CIcon name="cil-Check"  id ="Pass" />
                        //  <Link to='/MakerChecker/Maker' ><PlayArrowIcon /></Link>
                        );
                    }
                }
            },
            {
                name: "Fail",
                label: "Fail",
				options: {
                    filter: false,
                    sort: false,

                    customBodyRender: (value, tableMeta, updateValue) => {
                       

                        return (
							<CIcon name="cil-x"  id ="Fail"  />
                        //  <Link to='/MakerChecker/Maker' ><PlayArrowIcon /></Link>
                        );
                    }
                }
            },
           
			
            {
                name: "Details",
                options: {
                    filter: false,
                    sort: false,

                    customBodyRender: (value, tableMeta, updateValue) => {
                       
                        return (
							<CButton color="dark" className="px-4" onClick={this.toggle}>More Info</CButton>
                        //  <Link to='/MakerChecker/Maker' ><PlayArrowIcon /></Link>
                        );
                    }
                }
            },

        ]
       

        let data =[];
  data = [
    [ "1","The documentary credit has not expired"],
    ["2","Currency should be consistent across the documents"],
    ["3","Place of expiry must be either the place of issuing bank or the place of negotiating bank"],
    ["4","The gross value of invoice should not exceed the credit amount"],
    ["5","Whether LC needs confiramtion?"]
    
 ]
        
        
      
        const options = {

           download : false,
            responsive: 'stacked',
            selectableRows: false,
            filter :false,
            search :false,
            print:false,
            sort :true,
            viewColumns :false
            
           
           
        };

        return (
            <Fragment>
            <div>
              
                 <MUIDataTable data={data} columns={columns} options={options} />
                
            </div>
            <div>
            <CModal show={this.state.modal} onClose={this.toggle}>
                                                <CModalBody>Case created successfully with Ref no. 1234567
					                            </CModalBody>
                                                <CModalFooter>
                                                   
                                                        <CButton color="primary" onClick ={this.toggle2}>OK</CButton>
                                                    
                                                    {' '}

                                                </CModalFooter>

                                            </CModal>
            </div>
            </Fragment>
        )
    }


}

