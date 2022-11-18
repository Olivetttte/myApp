import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../Styles/Dashboardproxi.css'
import profilephoto from '../../Media/proxiphoto.jpeg';
import { Button } from 'react-bootstrap';
 import Ticket from '../../Dashboard_Items/Ticket'; 
import History from '../../Dashboard_Items/History';
import Tasks from '../../Dashboard_Items/Tasks';
import Sendrequests from './Sendrequests';
import Tasksprincipal from './Taskprincipal';




function Dashboardprincipal() {
  const [showSendrequests, setShowSendrequests] = React.useState(false);
  const [showTicket, setTicket] = React.useState(false);
  const [showHistory, setHistory] = React.useState(false);
  const [showTasksprincipal, setTasksprincipal] = React.useState(false);

  const showSendrequestsModal = () => setShowSendrequests((prevState) => !showTicket && !prevState);
  const showTicketModal = () => setTicket((prevState) => !showSendrequests && !prevState);
  const showHistoryModal = () => setHistory((prevState) => !showTasksprincipal && !prevState);
  const showTasksprincipalModal = () => setTasksprincipal((prevState) => !showHistory && !prevState);

  
  return (
    <div className='row'>
      <div className='col-4'>
    <Card style={{ width: '18rem', height:'42em' }} id='cards'>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Principal Profile</Card.Title>
        <Card.Text>
        <img src={profilephoto} width="250" height="300"  alt='logo' />
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
    <Button onClick={showSendrequestsModal}>Send Request</Button> <br/>
    <Button onClick={ showTicketModal}>Ticket</Button> <br/>
    <Button onClick={showHistoryModal }>History</Button> <br/>
 
  
      </ListGroup>
      <Card.Body>
        <Card.Link href="./Profile" >Edit Profile </Card.Link>
        <Card.Link href="#">Sign Out</Card.Link>
      </Card.Body>
    </Card>d
{/* Div for dashboard showing onClick items */}
    </div>
    <div className='col-8'>
        {
          showSendrequests ?<div> <Sendrequests/>  </div> : null
        }
        {
          showTicket ? <div> <Ticket/> </div> : null
        }
        {
          showHistory ? <div> <History/> </div> : null
        }
     
      </div>
    </div>
  );
}

export default Dashboardprincipal;