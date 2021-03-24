import React,{ Component ,useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
import UserContext from '../../../UserContext';


export default class Login extends Component {

  
constructor(){
  super();
  this.state={
    userName:'',

  }
 
  
}
static contextType = UserContext;
handleChange(event) {
  console.log("username ash",event.target.value);
  console.log("username ash2",this.state.userName);
  this.setState({
    userName : event.target.value
  })
    
console.log("username "+this.state.userName);
}


onSubmit = () => {
  console.log("context "+JSON.stringify(this.context));
  const { user, setUser } = this.context;
  
  const newUser = { name: this.state.userName, loggedIn: true };
  setUser(newUser);
  this.props.history.push("/"); 
}

  render() {
   
  return (

    
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>

      

        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" onChange={ this.handleChange.bind(this)} name="userValue" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                      <Link to="/newDashboard">
                          <CButton color="primary" className="px-4" onClick={this.onSubmit}>Login</CButton>
                        </Link>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Datamatics Trade Portal</h2>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}
}


