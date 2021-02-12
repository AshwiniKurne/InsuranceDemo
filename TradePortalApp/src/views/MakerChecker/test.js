import React from "react";

import { Typography } from "@material-ui/core";

import UploadFiles from "./UploadFileComponent";

function App() {
  return (
    <div className="container">
      <div className="mg20">
        <Typography variant="h5">bezkoder.com</Typography>
        <Typography variant="h6">Material UI File Upload</Typography>
      </div>

      <UploadFiles />
    </div>
  );
}

export default App;