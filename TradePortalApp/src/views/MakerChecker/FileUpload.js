import React, { Fragment, useState, useEffect,useContext  } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CIcon from '@coreui/icons-react'
import {CButton,CCardFooter} from '@coreui/react';
import e from 'cors';
import UserContext from '../../UserContext';
const FileUpload = () => {
  const user = useContext(UserContext);
  console.log("user1 value "+user.user.name);
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [fileType, setFileType] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [data, setData] = useState({});
  var check ='false';


  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setFileType(e.target.files[0].type);
    setFileSize(e.target.files[0].size);
  };

  useEffect(() => {
    
    
    var tableD = document.getElementById("docTable");
      console.log("Row Len:: "+ tableD.rows.length);
      if(tableD.rows.length >2) {
          // alert("Greater than 2");
          document.getElementById("noDocs").style.display="none";
          document.getElementById("docsAvail").style.display="";
      }else {
        // alert("Less than 2");
          document.getElementById("noDocs").style.display="";
          document.getElementById("docsAvail").style.display="none";
      }
  });
 
  

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
        }
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage('File Uploaded');
      console.log("after upload");

      setData({ fileName, fileType, fileSize, filePath });
      console.log("user name upload "+user.user.name);
      var data2 = [];
      data2.push({ fileName }.fileName);
      data2.push({ fileType }.fileType);
      data2.push({ fileSize }.fileSize);
      data2.push(user.user.name);
      data2.push('');
      // console.log("data "+data);
      var tableD = document.getElementById("docTable");
      // alert("Row Len:: "+ tableD.rows.length);



      var rowLen = tableD.rows.length;
      var row = document.createElement('tr');
      console.log("ash2");
      for (var i = 0; i < data2.length; i++) {
        console.log("SG_ash3 ", data2.length);
        var td = document.createElement('td'); // create a td node
        
        if (i == data2.length - 1) {

          var td = document.createElement('td');
          var path = { filePath }.filePath;

          console.log("file path ", path);
          
          var button = document.createElement("button");
          //button.innerHTML = '<FontAwesomeIcon icon={faHome} />';
          button.innerHTML = "&#128065; "
          button.className ='btn';
          button.onclick = function(){
            document.getElementById('viewDoc').src = path;
          };
          var button1 = document.createElement('button');
      // set the attributes.
      var newRowLen =rowLen+1;
      var btnName = "button"+newRowLen;
      alert("butttton "+btnName);
      //button.setAttribute('type', 'button');
      button1.innerHTML = "&#10060;";
      button1.className ='btn';
      button1.onclick = function(){
        //alert('Delete Called' +btnName);
        
         removeRow(btnName); 

        };
      button1.name =btnName;
          td.appendChild(button); 
          td.appendChild(button1); 
          row.appendChild(td);

        } else {
          td.innerHTML = data2[i];
          row.appendChild(td);
        }

      }

      row.appendChild(td);
       console.log("ash4");
       tableD.appendChild(row);
       console.log("after append");
       

    } catch (err) {
      /*  if (err.response.status === 500) {
           setMessage('There was a problem with the server');
        }
         else {
           setMessage(err.response.data.msg);*/
      console.log("error ", err);

    }
  };
  const removeRow= btnName =>{
    //alert("value of btnname "+btnName);
    var check =window.confirm("Are you sure you want to delete this item?");
    console.log("value  of check "+check);
    if(check ==true){
      var table2 = document.getElementById("docTable");
     console.log(table2);
     var rowCount = table2.rows.length;  
      console.log("ash1 "+rowCount);
     for (var i = 2; i < rowCount; i++) {  
               var row = table2.rows[i];  
                console.log(row);
                 var rowObj = row.cells[4].childNodes[1].name; 
                 console.log("rowObj");
                 console.log(rowObj);
                if (rowObj == btnName) { 
                 // alert("insode obj"+btnName) ;
                    table2.deleteRow(i);  
                    rowCount--;  
                }  
      }  
    }
    
          
         
  }
  
  
  // function removeRow(btnName){
  //   alert("value of btnname "+btnName);
  //   try {  
  //     var table2 = document.getElementById("docTable");
  //     console.dir(table2);
  //     var rowCount = table2.rows.length;  
  //     alert("ash1 "+rowCount);
  //     for (var i = 0; i < rowCount; i++) {  
  //         var row = table2.rows[i];  
  //         console.dir(row);
  //         var rowObj = row.cells[0].childNodes[0];  
  //         if (rowObj.name == btnName) { 
  //           alert("insode obj") ;
  //             table2.deleteRow(i);  
  //             rowCount--;  
  //         }  
  //     }  
  // } catch (e) {  
  //     alert(e);  
  // }  
  // }



  return (
    <Fragment>
      
      
      <br />
      <div id="noDocs">
          
          <form onSubmit={onSubmit} style={{display:'flex', verticalAlign:'basline'}}>
                    
                    <div className='custom-file mb-4' style={{width:'31%'}}>
                      <input
                        type='file'
                        className='custom-file-input'
                        id='customFile'
                        onChange={onChange}
                      />
                      <label className='custom-file-label' htmlFor='customFile'>
                        {filename}
                      </label>
                      
                    </div>
                    &nbsp;&nbsp;
                    {/* <Progress percentage={uploadPercentage} /> */}
                    <div className='custom-file-a mb-4' style={{width:'55%'}}>
                    {/* <input
                      type='submit'
                      value="&#128206;&nbsp;Upload"
                      className='btn btn-primary btn-block mt-2'
                      
                    /> */}
                     <CButton type="submit" color="warning" className="px-4"><CIcon name="cilCloudUpload" />&nbsp;Upload</CButton> &nbsp;
                    
                    </div>
                </form>
      </div>

      <div id="docsAvail">
          
          <table id="docTable1" style={{width:'100%'}}>
          <tr>
                <td style={{width:'50%',height:'500px'}} id="viewerId">
                  <iframe id="viewDoc" style={{width:'100%',height:'500px'}}></iframe>
                </td>
                <td class="valign" style={{width:'50%'}}>
                {/* {message ? <Message msg={message} /> : null} */}
                  <br/>
                  <form onSubmit={onSubmit} style={{display:'flex', verticalAlign:'basline'}}>
                    
                    <div className='custom-file mb-4'>
                      <input
                        type='file'
                        className='custom-file-input'
                        id='customFile'
                        onChange={onChange}
                      />
                      <label className='custom-file-label' htmlFor='customFile'>
                        {filename}
                      </label>
                      
                    </div>
                    &nbsp;
                    
                    {/* <input
                      type='submit'
                      value="&#x21eb;&nbsp;Upload "
                      className='btn btn-primary btn-block mt-2'
                    /> */}
                     
                     <CButton id ="uploadbutton"type="submit" color="warning" className="px-4"><CIcon name="cilCloudUpload" />&nbsp;Upload</CButton> 
                     
                    
                    
                </form>
                <br/>
                  <table id="docTable" style={{ width: '100%', border: '1px solid black', padding: '15px' }}>
                    <thead>
                      <tr style={{ color: 'white', backgroundColor: 'black' }}>
                        <th className='table-header'>File Name</th>
                        <th className='table-header'>File Type</th>
                        <th className='table-header'>File Size(kb)</th>
                        <th className='table-header'>Attached By</th>
                        <th className='table-header'>Action</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='table-row' id='table-row'></tr>
					  <tr id ='Nominee'>
						<td className='table-header'>Nominee Bank Details.pdf</td>
                        <td className='table-header'>application/pdf</td>
                        <td className='table-header'>67895</td>
                        <td className='table-header'>Sale1</td>
                        <td className='table-header'><button id ='tableButton' onClick ={() =>{document.getElementById('viewDoc').src = '/uploads/collateral2.png';console.log("ss");}} > &#128065; </button>&nbsp;&nbsp;<button id ='tableButton' onClick ={()=>{window.confirm("Are you sure you want to delete this item?");document.getElementById('Nominee').parentNode.removeChild(document.getElementById('Nominee'));}}> &#10060; </button></td>
					  </tr>
					  <tr id ='Claim'>
						<td className='table-header'>Claim Form.pdf</td>
                        <td className='table-header'>application/pdf</td>
                        <td className='table-header'>45673</td>
                        <td className='table-header'>Sale1</td>
                        <td className='table-header'><button id ='tableButton' onClick ={() =>{document.getElementById('viewDoc').src = '/uploads/collateral2.png';console.log("ss");}}> &#128065; </button>&nbsp;&nbsp;<button id ='tableButton' onClick ={()=>{window.confirm("Are you sure you want to delete this item?");document.getElementById('Claim').parentNode.removeChild(document.getElementById('Claim'));}}> &#10060; </button></td>
					  </tr>
					  <tr id ='Other'>
						<td className='table-header'>Other Documents.pdf</td>
                        <td className='table-header'>application/pdf</td>
                        <td className='table-header'>32657</td>
                        <td className='table-header'>Sale1</td>
                        <td className='table-header'><button id ='tableButton' onClick ={() =>{document.getElementById('viewDoc').src = '/uploads/collateral2.png';console.log("ss");}}> &#128065; </button>&nbsp;&nbsp;<button id ='tableButton' onClick ={()=>{window.confirm("Are you sure you want to delete this item?");document.getElementById('Other').parentNode.removeChild(document.getElementById('Other'));}}> &#10060; </button></td>
					  </tr>
					  <tr id ='Aadhar'>
						<td className='table-header'>Claimant Aadhar Card.pdf</td>
                        <td className='table-header'>application/pdf</td>
                        <td className='table-header'>54678</td>
                        <td className='table-header'>Sale1</td>
                        <td className='table-header'><button id ='tableButton' onClick ={() =>{document.getElementById('viewDoc').src = '/uploads/collateral2.png';console.log("ss");}}> &#128065; </button>&nbsp;&nbsp;<button id ='tableButton' onClick ={()=>{window.confirm("Are you sure you want to delete this item?");document.getElementById('Aadhar').parentNode.removeChild(document.getElementById('Aadhar'));}}> &#10060; </button></td>
					  </tr>
					  <tr id ='Pan'>
						<td className='table-header'>Claimant PAN Card.pdf</td>
                        <td className='table-header'>application/pdf</td>
                        <td className='table-header'>34322</td>
                        <td className='table-header'>Sale1</td>
                        <td className='table-header'><button id ='tableButton' onClick ={() =>{document.getElementById('viewDoc').src = '/uploads/collateral2.png';console.log("ss");}}> &#128065; </button>&nbsp;&nbsp;<button id ='tableButton' onClick ={()=>{window.confirm("Are you sure you want to delete this item?");document.getElementById('Pan').parentNode.removeChild(document.getElementById('Pan'));}}> &#10060; </button></td>
					  </tr>
					   <tr id ='Death'>
						<td className='table-header'>Death Certificate.pdf</td>
                        <td className='table-header'>application/pdf</td>
                        <td className='table-header'>87532</td>
                        <td className='table-header'>Sale1</td>
                        <td className='table-header'><button id ='tableButton' onClick ={() =>{document.getElementById('viewDoc').src = '/uploads/collateral2.png';console.log("ss");}}> &#128065; </button>&nbsp;&nbsp;<button id ='tableButton' onClick ={()=>{window.confirm("Are you sure you want to delete this item?");document.getElementById('Death').parentNode.removeChild(document.getElementById('Death'));}}> &#10060; </button></td>
					  </tr>
					   <tr id ='Policy'>
						<td className='table-header'>Policy Document.pdf</td>
                        <td className='table-header'>application/pdf</td>
                        <td className='table-header'>76845</td>
                        <td className='table-header'>Sale1</td>
                        <td className='table-header'><button id ='tableButton' onClick ={() =>{document.getElementById('viewDoc').src = '/uploads/collateral2.png';console.log("ss");}}> &#128065; </button>&nbsp;&nbsp;<button id ='tableButton' onClick ={()=>{window.confirm("Are you sure you want to delete this item?");document.getElementById('Policy').parentNode.removeChild(document.getElementById('Policy'));}}> &#10060; </button></td>
					  </tr>
                    </tbody>
                  </table>
                </td>
            </tr>
        </table>
      </div>


      
      

      
    </Fragment>
    
  );
  
};


export default FileUpload;
