import * as React from 'react';
import TextField from '@mui/material/TextField';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import '../App.css'
import { Button, FormLabel } from '@mui/material';
export default function AddressDetails() {
  const {setStep,userdata,setuserdata,submitdata}=useContext(multiStepContext)
  return (
    <div div className='Form-container'>
      <div style={{lineHeight:"4.5"}}>
        <FormLabel style={{color:"black"}}>Address : </FormLabel>
      <TextField
        value={userdata["Address"]}
        onChange={(e)=>setuserdata({...userdata,"Address":e.target.value})}
        label="Address"
        margin='normal'
        variant="outlined"
        color='secondary'
        size='small'
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <FormLabel style={{color:"black"}}>State : </FormLabel>
       <TextField
        value={userdata["State"]}
        onChange={(e)=>setuserdata({...userdata,"State":e.target.value})}
        label="State"
        margin='normal'
        variant="outlined"
        color='secondary'
        size='small'
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <FormLabel style={{color:"black"}}>City : </FormLabel>
       <TextField
        value={userdata["City"]}
        onChange={(e)=>setuserdata({...userdata,"City":e.target.value})}
        label="City"
        margin='normal'
        variant="outlined"
        color='secondary'
        size='small'
      /></div>
      <div style={{lineHeight:"4.5",marginRight:"17rem"}} >
      <FormLabel style={{color:"black"}}>Country : </FormLabel>
      <TextField
        value={userdata["Country"]}
        onChange={(e)=>setuserdata({...userdata,"Country":e.target.value})}
        label="Country"
        margin='normal'
        variant="outlined"
        color='secondary'
        size='small'
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormLabel style={{color:"black"}}>Pincode : </FormLabel>
      <TextField
        value={userdata["Pincode"]}
        onChange={(e)=>setuserdata({...userdata,"Pincode":e.target.value})}
        label="Pincode"
        margin='normal'
        variant="outlined"
        color='secondary'
        size='small'
      /><br></br></div>
      <div style={{display:"flex",gap:"250px",justifyContent:"center",marginTop:"2rem"}}>
      <Button variant='contained'color='secondary' onClick={()=>setStep(1)}>Back</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button type='submit' variant='contained' onClick={submitdata}>Submit</Button>
      </div>
      </div>
      
  );
}