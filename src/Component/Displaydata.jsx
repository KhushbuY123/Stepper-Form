import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import { multiStepContext } from './StepContext';
export default function Displaydata(){
    const{finaldata}=useContext(multiStepContext)
    return(
        <>
        <div>
        <TableContainer component={Paper} sx={{ minWidth: 650 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Dob&nbsp;</TableCell>
            <TableCell align="right">Sex&nbsp;</TableCell>
            <TableCell align="right">IDType&nbsp;</TableCell>
            <TableCell align="right">GovtID&nbsp;</TableCell>
            <TableCell align="right">Address&nbsp;</TableCell>
            <TableCell align="right">Sate&nbsp;</TableCell>
            <TableCell align="right">City&nbsp;</TableCell>
            <TableCell align="right">Country&nbsp;</TableCell>
            <TableCell align="right">Pincode&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finaldata.map((data) => (
            <TableRow
              key={data.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.Name}
              </TableCell>
              <TableCell align="right">{data.Mobile}</TableCell>
              <TableCell align="right">{data.Dob}</TableCell>
              <TableCell align="right">{data.Sex}</TableCell>
              <TableCell align="right">{data.IDType}</TableCell>
              <TableCell align="right">{data.GovtID}</TableCell>
              <TableCell align="right">{data.Address}</TableCell>
              <TableCell align="right">{data.Sate}</TableCell>
              <TableCell align="right">{data.City}</TableCell>
              <TableCell align="right">{data.Country}</TableCell>
              <TableCell align="right">{data.Pincode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
    )
}