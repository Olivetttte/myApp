import React, {useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
// import {Button} from "@mui/material"

function Tasksreport() {
    //task fecth
 const [histories, setHistories] = React.useState([]);
  useEffect(() => {
    fetch("/fecthtaskhistory").then((response) =>
      response.json().then((data) => {
        setHistories(data.tasks);
      })
    );
  }, []);
  console.log(histories);

//button text
  const [buttonText, setButtonText] = useState('Request Payment');
  function handleClick() {
    setButtonText('Payment Requested');
  }

  return (
    // {histories.map(task => {
    //   return (
  
      <div className='row' style={{marginTop:'60px'}}>
        
        <div>
         <h4 style={{marginBottom:'40px'}}>My Tasks</h4>
        {/* account history  */}
       
        <div className='col-10'>
       
        <div  >

          <table className='table table-striped' >
            <thead>
              <tr style={{color:'white', backgroundColor:'blue'}} >
              <th scope='col'>S/N </th> 
                <th scope='col'>Start Date </th> 
                <th scope='col'>Description</th>
                <th scope='col'>Customer Name</th>
                <th scope='col'>Amount</th>
                <th scope='col'> Task Status</th>
           
              </tr>
            </thead>
            <>
            {histories.map(task => {
          return (


            <tbody key={task.id} >
              <tr>
                <td>{task.id}</td>
                <td >{task.taskStartDate}</td>
                <td>{task.taskName}</td>
                <td>{task.taskAssignedBy}</td>
                <td>{task.taskPrice}</td>
                <td> <Button  >Request Payment</Button>  <Button>Cancel</Button></td>
              </tr>
            </tbody>
             )
            })}
            </>
          </table>
      </div>
       
      </div>

      </div>
    
    </div>
  )
}

export default Tasksreport