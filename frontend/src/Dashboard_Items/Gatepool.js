import { fontSize, height } from "@mui/system";
import React, { Component, useState, useEffect } from "react";
import Profilepics from "../Media/profilepics.jpeg";
import Pending from "../Media/wall-clock.png";
import profileCert from "../Media/check.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import Tasksreport from "./Tasks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { List } from "semantic-ui-react";


function Gatepool({}) {
  // modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showTasks, setTasks] = React.useState(false);
  const notify = () => toast("You have accepted the job, please update task when done!");
  const notify2= () => toast("You have declined the job");
  const initialText = 'Accept';
  const [taskStatus, settaskStatus] = useState('Unassigned');
  // const rejectText = 'Reject';
  const [buttonText, setButtonText] = useState(initialText);


   //tasks requests

const [taskss, setTaskss] = React.useState([]);
  useEffect(() => {
    fetch("/fecthtasks").then((response) =>
      response.json().then((data) => {
        setTaskss(data.tasks);
      })
    );
  }, []);

  // const [sectask, setSectask] = React.useState([]);
  // useEffect(() => {
  //   fetch("/fecthtasks").then((response) =>
  //     response.json().then((data) => {
  //       setTaskss(data.tasks);
  //     })
  //   );
  // }, []);


  //Job status
  function jobStatus() {
    if (taskStatus === 'Unassigned') {
      settaskStatus('Assigned');
      setButtonText('Reject?');
      notify('You have accepted the job, please update task when done!');
    } else {
      settaskStatus('Unassigned');
      setButtonText(initialText);
      notify2();
    }
  }

  // Disable newClick button
  function wrapperFunction() {
    // setTasks(!showTasks);
    handleClose();
    // notify();
    handleClick()
    // newClick();
    jobStatus()
  }

  function secondWrapperFunction(){
    handleClose();
    // notify2();

  }

  //Task light changing

  const [isActive, setActive] = useState("true");
  const handleClick = () => {
    setActive(current => !current);
  };
 
 
  return (
    <>
    <div className="container">
  
      <ToastContainer />
      {/* container for gatepool */}
      <div
        className="row"
        style={{
          border: "1px solid black",
          backgroundColor: "#283645",
          height: "35em",
          width: "55em",
          borderRadius: "30px",
          marginTop: "30px",
        }}
      >
        {/* container for each post */}
        <div className="col-4">
        {taskss.map(task => {
          return (
          <div key={task.id}
            style={{
              backgroundColor: "#36495C",
              color: "white",
              height: "5em",
              width: "15em",
              borderRadius: "15px",
              marginTop: "30px",
              marginLeft: "10px",
            }}
            className="row"
          >
            {/* alert light red */}
            <div
              className="col-1"
              style={{ backgroundColor: isActive ? 'red' : 'Yellow', borderRadius: "10px", marginRight:'10px' }}
            >
              <div></div>
            </div>
            {/* profilepic and profile badge */}
            <div className="col-2">
              <img
                src={profileCert}
                alt="profiles"
                style={{
                  height: "0.5em",
                  width: "0.5em",
                  marginLeft: "-0.8em",
                  marginTop: "-1em",
                }}
              />
              <img
                src={Profilepics}
                alt="profiles"
                style={{
                  height: "2em",
                  width: "2em",
                  marginTop: "1em",
                  marginLeft: "-0.8em",
                  borderRadius: "15px",
                }}
              />
            </div>

            {/* name and time */}
            <div className="col-8">
              <span
                style={{
                  marginTop: "1.9em",
                  marginLeft: "0.3em",
                  fontSize: "14px",
                }}
              > 
              
              {task.taskName}
              </span>{" "}
              <br />
              <span
                style={{
                  marginTop: "1.9em",
                  marginLeft: "0.9em",
                  fontSize: "9px",
                }}
              >
                {task.taskAssignedBy}{" "} 
                <span
                  style={{
                    marginTop: "1.9em",
                    marginLeft: "0.9em",
                    fontSize: "7px",
                  }}
                >
                  Posted {task.taskCreatedOn}
                </span>{" "}
                <br />
              </span>
              <button onClick={handleShow} style={{
                  marginTop: "-1em",
                  marginLeft: "0.3em",
                  border:'none',
                  color: "blue",
                  fontSize: "9px",
                  color: "white",
                  backgroundColor: "#283645",
                }}>View</button>
              <img
                src={Pending}
                alt="profiles"
                style={{
                  height: "1em",
                  width: "1em",
                  borderRadius: "15px",
                  marginLeft: "1em",
                }}
              />
              <span
                style={{
                  marginTop: "1.3em",
                  marginLeft: "1em",
                  color: "red",
                  fontSize: "9px",
                  color: "white",
                }}
              >
                {taskStatus}
              </span>
            </div>

          </div>
          );
           })}
        </div>

        {/*test container */}

        {/* <div className="col-4">
          {taskss.map(task => {
            return (
              <div key={task.id}> 
                <h2>{task.taskName}</h2>
                <p>{task.taskDescription}</p>
                <p>{task.taskEndDate}</p>
                <p>{task.taskLocation}</p>
                <p>{task.taskStartDate}</p>
                <p>{task.taskCreatedOn}</p>
                <p>{task.taskPrice}</p>
                <p>{task.taskStatus}</p>
                <p>{task.taskAssignedBy}</p>
              </div>)
          })}
        </div> */}
        {/* Modal */}
       
      </div> 
      <div>
      {taskss.map(task => {
            return (
              <div key={task.id}> 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title> {task.taskAssignedBy} </Modal.Title>
         
        </Modal.Header>
        <Modal.Body>  </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={secondWrapperFunction}>
            Close
          </Button>
          <Button variant="primary" onClick={wrapperFunction} >
            {buttonText}
          </Button>
        </Modal.Footer>
     </Modal>
     </div>)
          })}
     </div>
    </div>
   
    </>
   
  );
}

export default Gatepool;
