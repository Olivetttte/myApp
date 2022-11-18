import React from 'react'
import './Sendrequests.css'
import {useState} from 'react'



function Tasks() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [task, setTask] = useState({
        taskName: '',
        taskDescription: '',
        taskStartDate: '',
        taskEndDate: '',
        taskStatus: '',
        taskPriority: '',
        taskAssignedTo: '',
        taskAssignedBy: '',
        taskCreatedOn: '',
        taskUpdatedOn: ''
    })

    const [taskList, setTaskList] = useState([])
    const [taskList1, setTaskList1] = useState([])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setTask({
            ...task,
            [name]: value,
            taskCreatedOn: date,
            taskUpdatedOn: time
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setTaskList([...taskList, task])
        setTask({
            taskName: '',
            taskDescription: '',
            taskStartDate: '',
            taskEndDate: '',
            taskStatus: '',
            taskPriority: '',
            taskAssignedTo: '',
            taskAssignedBy: '',
            taskCreatedOn: '',
            taskUpdatedOn: ''
        })
    }

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

    const handleFormSubmit1 = (e) => {
        e.preventDefault();
        setTaskList1([...taskList1, task])
        setTask({
            taskName: '',
            taskDescription: '',
            taskStartDate: '',
            taskEndDate: '',
            taskStatus: '',
            taskPriority: '',
            taskAssignedTo: '',
            taskAssignedBy: '',
            taskCreatedOn: '',
            taskUpdatedOn: ''
        })
    }

    const handleDelete1 = (index) => {
        const newTaskList1 = [...taskList1]
        newTaskList1.splice(index, 1)
        setTaskList1(newTaskList1)
    }

    const handleEdit1 = (index) => {
        const newTaskList1 = [...taskList1]
        setTask(newTaskList1[index])
        newTaskList1.splice(index, 1)
        setTaskList1(newTaskList1)
    }


    return (
        <div className="container">
            <div className="row">
                {/* <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Send Requests</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group">
                                    <label>Task Name</label>
                                    <input type="text" className="form-control" name="taskName" value={task.taskName} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Task Description</label>
                                    <input type="text" className="form-control" name="taskDescription" value={task.taskDescription} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Task Start Date</label>
                                    <input type="date" className="form-control" name="taskStartDate" value={task.taskStartDate} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Task End Date</label>
                                    <input type="date" className="form-control" name="taskEndDate" value={task.taskEndDate} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Task Status</label>
                                    <input type="text" className="form-control" name="taskStatus" value={task.taskStatus} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Task Priority</label>
                                    <input type="text" className="form-control" name="taskPriority" value={task.taskPriority} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Task Assigned To</label>
                                    <input type="text" className="form-control" name="taskAssignedTo" value={task.taskAssignedTo} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Task Assigned By</label>
                                    <input type="text" className="form-control" name="taskAssignedBy" value={task.taskAssignedBy} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Task Created On</label >  
                                    <input type="text" className="form-control" name="taskCreatedOn" value={task.taskCreatedOn} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label>Task Updated On</label>
                                    <input type="text" className="form-control" name="taskUpdatedOn" value={task.taskUpdatedOn} onChange={handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div> */}
                  <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Requests</h3>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Task Name</th>
                                        <th>Task Description</th>
                                        <th>Task Start Date</th>
                                        <th>Task End Date</th>
                                        <th>Task Status</th>
                                        <th>Task Priority</th>
                                        <th>Task Assigned To</th>
                                        <th>Task Assigned By</th>
                                        <th>Task Created On</th>
                                        <th>Task Updated On</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        taskList.map((task, index) => (
                                            <tr key={index}>
                                                <td>{task.taskName}</td>
                                                <td>{task.taskDescription}</td>
                                                <td>{task.taskStartDate}</td>
                                                <td>{task.taskEndDate}</td>
                                                <td>{task.taskStatus}</td>
                                                <td>{task.taskPriority}</td>
                                                <td>{task.taskAssignedTo}</td>
                                                <td>{task.taskAssignedBy}</td>
                                                <td>{task.taskCreatedOn}</td>
                                                <td>{task.taskUpdatedOn}</td>
                                                <td>
                                                    <button className="btn btn-primary" onClick={() => handleEdit(index)}>Edit</button>
                                                    <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Tasks


    


{/* 
  return (
    
    <div className='container'  id='containers'>
      <div className='row'>
        <div className='col-2' id='col1'>
          <form>
          <h4>Task Subject</h4>
            <textarea name='' id='' cols='20' rows='3' placeholder='What is your request'></textarea>
          </form>
        </div>
        <div className='col-5' id='col2'>
          <h4>Task Description</h4>
            <form>
                 <textarea name='' id='' cols='20' rows='5' placeholder='Please input task details/requirements'></textarea>
            </form>
        </div>
        <div className='col-5' id='col3'>
          <h4>Request Details</h4>
          <div>
            <p>Request Date: {date}</p>
            <p>Estimated Amount: </p>
            <p>Expected completion date : </p>
            <p>Location/Address: </p>
          
            <form className=''>
              <textarea name='' id='' cols='20' rows='3' placeholder='Other required info'></textarea>
            </form>
           
          </div>
      
        </div>
        <div>
        <div className='' id='col4'>
          <button className='btn btn-primary'>Send </button>
          <button className='btn btn-primary'>Cancel</button>
        </div>

        </div>

      </div>


    </div>
  )
}

export default Tasks */}