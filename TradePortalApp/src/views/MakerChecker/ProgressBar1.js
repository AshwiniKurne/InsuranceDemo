import React from 'react';
import { Fragment } from 'react';

import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

const step1Content = <h1>Claims Processor</h1>;
const step2Content = <h1>Claims Accesor</h1>;
const step3Content = <h1>Claims Approver</h1>;

function step2Validator() {
  return true;
}

function step3Validator() {
  return true;
}

function ProgressApp1() {
  const onSubmit = () => {
    alert('submit data');
  };

  return (
    <Fragment>
    <div class="progressbar">
      <StepProgressBar
        startingStep={1}
        wrapperClass="progress-wrapper-custom"
       
       
        steps={[
          {
            label: 'Claims Processor',
            name: 'CLAIMS PROCESSOR',
           
          },
          {
            label: 'Claims Accesor',
            name: 'CLAIMS ACCESOR',
            
           
          },
          {
            label: 'Claims Approver',
            name: 'CLAIMS APPROVER',
           
            validator: step3Validator
          },
        
        ]}
      />
    </div>
    </Fragment>
  );
}

export default ProgressApp1;