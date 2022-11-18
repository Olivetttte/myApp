import React from 'react'

function Ticket() {
  return (
    <div className='container'>
      <div className='row' style={{marginTop:'50px'}}>
        <div className='col-4'>
          <h4>Ticket</h4>
          {/* <select className='form-control'>
            <option>Personal Account Issues</option>
            <option>Payment Issues</option>
            <option>Report an Incident</option>
          </select> */}
          <br />
          <input type='text' className='form-control' placeholder='Subject' />
          <br />
          <textarea
            className='form-control'
            placeholder='Description'
            rows='7'
          ></textarea>
          <br />

         <input type='file' />
          <br />
          <br />
          
          <button className='btn btn-primary'>Submit</button>


        </div>
        
        <div className='col-4'>
          <div className='container'>
            <div>
              {/* <h4>Recent Tickets</h4> */}
              {/* create inbox to recieve replies to Tickets   */}
              {/* <div className='row' style={{marginTop:'30px'}}>
                <div className='col-4'>
                  <div>Subject</div>
                </div>
                <div className='col-4'>
                  <div>Message</div>
                </div>
                <div className='col-4'>
                  <div>Reply</div>
                </div>

          </div> */}
        
        </div>
        <div className='col-4'>

        </div>
        </div>
        </div>
      </div>
      

    </div>
  )
}

export default Ticket