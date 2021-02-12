import React, { Fragment, useState } from 'react';
import Message from './Message';
import Progress from './Progress';
import axios from 'axios';
import { Link } from 'react-router-dom';


const FileUpload = () => {
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

      var data2 = [];
      data2.push({ fileName }.fileName);
      data2.push({ fileType }.fileType);
      data2.push({ fileSize }.fileSize);
      data2.push('');
      console.log("ash1", data2.length);
      console.log("ash111", data2[0]);
      console.log("ash1", data2[1]);
      // console.log("data "+data);
      var tableD = document.getElementById("docTable");
      var row = document.createElement('tr');
      console.log("ash2");
      for (var i = 0; i < data2.length; i++) {
        console.log("ash3 ", i);
        var td = document.createElement('td'); // create a td node
        //console.log("data "+data.length);
        // fill the td now with a piece of the data array
        // document.getElementById("table-row").appendChild(td); //
        //td.innerHTML = 'abcd';

        if (i == data2.length - 1) {

          var td = document.createElement('td');
          var path = { filePath }.filePath;

          console.log("file path ", path);
          td.innerHTML = '<a href= "' + path + '" target="_blank">View Document</a>'
          //td.innerHTML =<Link to={`/public/`+path}>View Document</Link>
          row.appendChild(td);

        } else {
          td.innerHTML = data2[i];
          row.appendChild(td);
        }

      }
      var td = document.createElement('td');
      td.innerHTML = '<button onclick='+deleteRow(this)+'>Delete</button>';

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
  function deleteRow(btn) {
    if(check =='false'){
      alert('check');
    }else{
      alert('Delete Row Called!!!');
    }
    
//     console.log('inside delete');
//   var row = btn.parentNode.parentNode;
//   row.parentNode.removeChild(row);
  }

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
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

        <Progress percentage={uploadPercentage} />

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      <br />
      <br />
      <table id="docTable" style={{ width: '80%', border: '1px solid black', padding: '15px' }}>
        <thead>
          <tr style={{ color: 'white', backgroundColor: 'black' }}>
            <th className='table-header'>File Name</th>
            <th className='table-header'>File Type</th>
            <th className='table-header'>File Size</th>
            <th className='table-header'>View Document</th>
            <th className='table-header'>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr className='table-row' id='table-row'></tr>
        </tbody>
      </table>
      

    </Fragment>
  );

};
function deleteRow(btn) {
  console.log('inside delete');
var row = btn.parentNode.parentNode;
row.parentNode.removeChild(row);
}

export default FileUpload;
