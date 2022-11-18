import React, {useEffect}from 'react'
import Button from 'react-bootstrap/Button';
function History() {

  const [histories, setHistories] = React.useState([]);
  useEffect(() => {
    fetch("/fecthtaskhistory").then((response) =>
      response.json().then((data) => {
        setHistories(data.tasks);
      })
    );
  }, []);
  console.log(histories);

  return (
    // {histories.map(task => {
    //   return (
  
      <div className='row' style={{marginTop:'60px'}}>
        
        <div>
         <h4 style={{marginBottom:'40px'}}>Account History</h4>
        {/* account history  */}
        <div className='row' style={{marginBottom:'30px'}}>
          <div className='col-3'>
          <div>Filter By Date </div>
          </div>
          <div className='col-6'>
          <div>Filter By Location  <input type='text' placeholder='Location' /></div>
          
          </div>
          <div className='col-3'>
          <Button variant="primary">Filter</Button>{' '}
          </div>

        </div>
       
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
                <th scope='col'> Location</th>
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
                <td>{task.taskLocation}</td>
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

export default History