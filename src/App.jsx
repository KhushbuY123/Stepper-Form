import * as React from 'react';
import { useContext } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Displaydata from './Component/Displaydata';
import '../src/App.css'
import PersonalDetails from './Component/PersonalDetails';
import AddressDetails from './Component/AddressDetails';
import { multiStepContext} from './Component/StepContext';
export default function App() {
    const {currentStep,finaldata} = useContext(multiStepContext);
    function showStep(step){
        switch(step){
        case 1 :
         return <PersonalDetails/>
        case 2 :
         return <AddressDetails/>
    }}
   return (
    
     <div className='App'>
        <header style={{margin:'normal', color:"Blue",font:"message-box",fontSize:"1.2rem"}}>Registration Form</header>
        <div className='center-stepper'>
            <Stepper style={{width:"80%"}} activeStep={currentStep-1} orientation='horizontal'>
                <Step>
                    <StepLabel>Personal Details</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Adddress Details</StepLabel>
                </Step>
            </Stepper>
        </div>
        {showStep(currentStep)}<br></br>
        {finaldata.length>0 ? <Displaydata/> :""}
     </div>
    
  )
}