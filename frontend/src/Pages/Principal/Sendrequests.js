import React from 'react'
import './Sendrequests.css'
import {useState, useEffect} from 'react'
import Delete from '../../Media/delete.png'
import Edit from '../../Media/edit.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';


function Tasks() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [disable , setDisable] = useState(true);
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [taskList, setTaskList] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);

    const [task, setTask] = useState({
        taskName: '',
        taskDescription: '',
        taskStartDate: '',
        taskEndDate: '',
        // taskStatus: '',
        taskPrice: '',
        taskLocation: '',
        taskAssignedBy: '',
        taskCreatedOn: '',
        // taskUpdatedOn: ''
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setTask({
            ...task,
            [name]: value,
            taskCreatedOn: date,
            // taskUpdatedOn: time
        })
    }
     
    function handleEmptyInputField() {
        if (task.taskName === '' || task.taskDescription === '' || task.taskStartDate === '' || task.taskEndDate === '' || task.taskPrice === '' || task.taskLocation === '') {
            setError("Please fill all the fields");
            return false;
        }
        return true;
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (handleEmptyInputField()) {
    //         setTaskList([...taskList, task]);
    //         setTask({
    //             taskName: '',
    //             taskDescription: '',
    //             taskStartDate: '',
    //             taskEndDate: '',
    //             // taskStatus: '',
    //             taskPrice: '',
    //             taskLocation: '',
    //             // taskAssignedBy: '',
    //             taskCreatedOn: '',
    //             // taskUpdatedOn: ''
    //         })
    //         setError("");
    //     }
    // }

    // create function to handle all functions 

    const handleFormSubmit = async (e) => {
        const notify = () => toast("Task created successfully");
        e.preventDefault();
        setTaskErrors(validateForm(task));
        setIsSubmit(true);
        handleEmptyInputField();
        notify();
        setTaskList([...taskList, task])
        setTask({
            taskName: '',
            taskDescription: '',
            taskStartDate: '',
            taskEndDate: '',
            // taskStatus: '',
            taskPrice: '',
            taskLocation: '',
            taskAssignedBy: '',
            taskCreatedOn: '',
            // taskUpdatedOn: ''
        })
        if (task.taskName === '' || task.taskDescription === '' || task.taskStartDate === '' || task.taskEndDate === '' || task.taskStatus === '' || task.taskPrice === '' || task.taskLocation === '' || task.taskAssignedBy === '') {
            setDisable(true)
        }
        else {
            setDisable(false)
        }
        try {
            const response = await fetch("http://127.0.0.1:5000/requests", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    taskName: task.taskName,
                    taskDescription: task.taskDescription,
                    taskStartDate: task.taskStartDate,
                    taskEndDate: task.taskEndDate,
                    // taskStatus: task.taskStatus,
                    taskPrice: task.taskPrice,
                    taskLocation: task.taskLocation,
                    taskAssignedBy: task.taskAssignedBy,
                    taskCreatedOn: task.taskCreatedOn
                }),
            });
            const data = await response.json();
            if (data.error) {
                setError(data.error);
                setLoading(false);
                return;
            }
            setError("");
            setLoading(false);
            // window.location.href = "/dashboardprincipal";
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }

    }

    // const deleteTask = (index) => {
    //     const newTaskList = [...taskList];
    //     newTaskList.splice(index, 1);
    //     setTaskList(newTaskList);
    // }

    const handleDelete = (index) => {
        const newTaskList = [...taskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
    }

    const handleEdit = (index) => {
        const newTaskList = [...taskList]
        setTask(newTaskList[index])
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
    }


    const[address, setAddress] = useState(" ")
    //const [coordinates, setCoordinates] = useState({
      //lat: null,
      //lng: null
    //})

    const handleSelect = async value => {
      const results = await geocodeByAddress(value);
      //const latAndLong = await getLatLng(results[0])

      setAddress(value)
      //setCoordinates(latAndLong)
    };

    const [taskError, setTaskErrors] = useState({});

    const validateForm = (values) => {
      const errors = {};
      if (!values.taskLocation){
        errors.taskLocation = "A location is required!";
      }
      if (!values.taskName){
        errors.taskName = "Task Name is required!";
      }
      if (!values.taskDescription){
        errors.taskDescription = "Task Description is required!";
      }
      
      return errors;
    };

    useEffect(() => {
      console.log(taskError);
      if(Object.keys(taskError).length === 0 && isSubmit) {
        console.log(task);
      }
    }, [taskError])


    const [ item, setItem ] = useState("Input");

    const renderItem =() =>{
      switch (item) {
        case "Skilled Professional" : return<input type='number' min='1' step='any' />
        case "Unskilled Professional" : return<input type='number' min='1' step='any' />
        case "Verified Professional" : return<input type='number' min='1' step='any' />
        case "Unverified Professional": return<input type='number' min='1' step='any' />
      }
    }





    return (
      <div className="container">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="row" id="containers">
          <div className="col-md-6" id="taskfill">
            <div className="card">
              <div className="card-header">
                <h3>Send Requests</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label>Task Heading</label>
                    <input
                      type="text"
                      className="form-control"
                      name="taskName"
                      value={task.taskName}
                      onChange={handleInputChange}
                      placeholder="Put in Subject"
                    />
                  </div>
                  <p>{taskError.taskName}</p>
                  <div className="form-group">
                    <label>Task Description</label>
                    <textarea
                      placeholder="Enter task details"
                      className="form-control"
                      name="taskDescription"
                      value={task.taskDescription}
                      onChange={handleInputChange}
                    />
                  </div>
                  <p>{taskError.taskDescription}</p>
                  <div className="form-group">
                    <label>Task Start Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="taskStartDate"
                      value={task.taskStartDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Task End Date</label>
                    <input
                      type="date"
                      className="form-control"
                      name="taskEndDate"
                      value={task.taskEndDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* <div className="form-group">
                                    <label>Task Status</label>
                                    <input type="text" className="form-control" name="taskStatus" value={task.taskStatus} onChange={handleInputChange} />
                                </div> */}
                  <div className="form-group">
                    <label>Task Payment</label>
                    <input
                      type="number"
                      className="form-control"
                      name="taskPrice"
                      value={task.taskPrice}
                      onChange={handleInputChange}
                      append = { renderItem() } 
                    />
                    <select value={item} onChange ={ (e) => setItem(e.target.value)}>
                      <option>Skilled Professional</option>
                      <option>Unskilled Professional</option>
                      <option>Verified Professional</option>
                      <option>Unverified Professional</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Task Location</label>
                    <PlacesAutocomplete
                      value={address}
                      onSelect={handleSelect}
                      onChange={setAddress}
                    >
                      {({
                        getInputProps,
                        suggestions,
                        getSuggestionItemProps,
                        loading,
                      }) => (
                        <div key={suggestions.description}>
                          <input value= {task.taskLocation} name = "taskLocation"
                            {...getInputProps({
                              placeholder: "Search Location ...",
                              className: "form-control",
                              type: "text",
                              
                            })}
                          />
                          <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion) => {
                              const className = suggestion.active
                                ? "suggestion-item--active"
                                : "suggestion-item";
                              // inline style
                              const style = suggestion.active
                                ? {
                                    backgroundColor: "#fafafa",
                                    cursor: "pointer",
                                  }
                                : {
                                    backgroundColor: "#ffffff",
                                    cursor: "pointer",
                                  };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                  })}
                                >
                                  <span>{suggestion.description}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </div>
                  <p>{ taskError.taskLocation }</p>
                  <div className="form-group">
                    <label>Task Assigned By</label>
                    <input
                      type="text"
                      className="form-control"
                      name="taskAssignedBy"
                      value={task.taskAssignedBy}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Task Created On</label>
                    <input
                      type="text"
                      className="form-control"
                      name="taskCreatedOn"
                      value={task.taskCreatedOn}
                      onChange={handleInputChange}
                      placeholder="The date is automatically selected onclicking submit"
                    />
                  </div>
                  {/* <div className="form-group">
                                    <label>Task Updated On</label>
                                    <input type="text" className="form-control" name="taskUpdatedOn" value={task.taskUpdatedOn} onChange={handleInputChange} />
                                </div> */}
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" id="editrequests">
              <div className="card-header">
                <h3>Requests</h3>
              </div>
              <div className="card-body">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th> Heading</th>
                      <th> Description</th>
                      <th> Start Date</th>
                      <th> End Date</th>
                      {/* <th>Task Status</th> */}
                      <th> Payment</th>
                      <th> Location</th>
                      <th>Task Assigned By</th>
                      <th>Date</th>
                      {/* <th>Task Updated On</th> */}
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {taskList.map((task, index) => (
                      <tr key={index}>
                        <td>{task.taskName}</td>
                        <td>{task.taskDescription}</td>
                        <td>{task.taskStartDate}</td>
                        <td>{task.taskEndDate}</td>
                        {/* <td>{task.taskStatus}</td> */}
                        <td>{task.taskPrice}</td>
                        <td>{task.taskLocation}</td>
                        <td>{task.taskAssignedBy}</td>
                        <td>{task.taskCreatedOn}</td>
                        {/* <td>{task.taskUpdatedOn}</td> */}
                        <td>
                          <img
                            src={Edit}
                            alt="edit"
                            onClick={() => handleEdit(index)}
                            style={{
                              width: "30%",
                              marginLeft: "10px",
                              marginRight: "10px",
                            }}
                          />
                          <img
                            src={Delete}
                            alt="delete"
                            onClick={() => handleDelete(index)}
                            style={{ width: "30%" }}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Tasks


    