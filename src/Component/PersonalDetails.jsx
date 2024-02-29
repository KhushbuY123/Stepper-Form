import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { multiStepContext } from './StepContext';
import { useContext } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import '../App.css'
import { Box,FormControl, FormLabel, InputLabel, Select } from '@mui/material';
export default function PersonalDetails() {
  const {setStep,userdata,setuserdata}=useContext(multiStepContext)
  return (
    <>
      <div className='Form-container'>
      <Box sx={{marginTop:8,display:"flex",flexdirection:"column",alignItems:"center",flexWrap:"wrap",justifyContent:"center"}}>
      <FormLabel style={{color:"black"}}>Name : </FormLabel>
      <TextField 
        value={userdata["Name"]}
        onChange={(e)=>setuserdata({...userdata,"Name":e.target.value})}
        label="Name"
        margin='normal'
        variant="outlined"
        color='secondary'
        size='small'
        required
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormLabel style={{color:"black"}}>Date of Birth : </FormLabel>
      <TextField
        value={userdata["Dob"]}
        onChange={(e)=>setuserdata({...userdata,"Dob":e.target.value})}
        margin='normal'
        variant="outlined"
        color='secondary'
        size='small'
        type="date"
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{color:"black"}}>Gender</FormLabel>
      <RadioGroup
         value={userdata["Sex"]}
         onChange={(e)=>setuserdata({...userdata,"Sex":e.target.value})}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      </FormControl><br></br>
      </Box>
      <Box sx={{marginTop:8,display:"flex",flexdirection:"column",alignItems:"center",flexWrap:"wrap",justifyContent:"center"}}>
      <FormLabel style={{color:"black"}}>Mobile No : </FormLabel>
      <TextField
          value={userdata["Mobile"]}
          onChange={(e)=>setuserdata({...userdata,"Mobile":e.target.value})}
          label="Mobile"
          margin='normal'
          variant="outlined"
          color='secondary'
          size='small'
          type='number'
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormLabel style={{color:"black"}}>Govt Issued Id : </FormLabel>
        <TextField
          value={userdata["IDType"]}
          onChange={(e)=>setuserdata({...userdata,"IDType":e.target.value})}
          label="ID Type"
          margin='normal'
          variant="outlined"
          color='secondary'
          size='small'
        />&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        value={userdata["GovtID"]}
        onChange={(e)=>setuserdata({...userdata,"GovtID":e.target.value})}
        label="Govt ID"
        margin='normal'
        variant="outlined"
        color='secondary'
        size='small'
      /><br></br>
      </Box>
    </div>
    <div style={{display:"flex",gap:"140px",justifyContent:"center",marginTop:"2rem"}}>
        <Button type='submit' variant='contained' onClick={()=>setStep(2)}>Next</Button>
    </div>
  </>
  );
}