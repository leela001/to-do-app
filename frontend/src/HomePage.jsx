import React, {useState, useEffect} from "react";
import './HomePage.css'
import axios from 'axios';
import { Trash, Pencil } from 'react-bootstrap-icons'; // Import Bootstrap icons


const API_URL_GET = 'http://localhost:3000/api/tasks'

const HomePage = () => {


    const[formData, setFormData] = useState({
        id: '',
        title: '',
        description: '',
        status: ''
    })

    const [errorMessage, setErrorMessage] = useState({
        message: ""
    })
    const [task, setTask] = useState([{}]);
    const [deleteMsg, setDeleteMsg] = useState("")

    useEffect(() => {
        getTasks(API_URL_GET)
    }, [])

    const handleInputChnage = (e, field_name) => {
        if (field_name === "title") {
            setFormData({...formData, title: e.target.value})
        } else if (field_name === "description") {
            setFormData({...formData, description: e.target.value})
        } else if(field_name === "status") {
            setFormData({...formData, status: e.target.value})
        }
    }

   

    const handleSubmit = async(e) => {
        e.preventDefault()
        setErrorMessage(errorMessage => ({
            ...errorMessage, status: "", message: ""
        }))
        try {
            await axios.post('http://localhost:3000/api/tasks/create_task', formData)
            getTasks(API_URL_GET)
            setFormData({title: '', description: '', status: ''})
        } catch(ex) {
            setErrorMessage(errorMessage => ({
                ...errorMessage, status: ex.response.status, message: ex.response.data.message
            }))
        }
    }


    const getTasks = async(API_URL_GET) => {
        const response = await axios.get(API_URL_GET)
        if(response.status === 200) {
            setTask(response?.data);
        }
    }

    const[editingItem, setEditingItem] = useState({
        id: "",
        isEditing: false
    })

    const handleEdit = (item) => {
        setEditingItem({
            id: item.id,
            isEditing: true
        });
        setFormData(item)
    }

    const handleEditableChanges = async(e) => {
        e.preventDefault();
        await axios.put("http://localhost:3000/api/tasks/" + editingItem.id + "/update_task", formData)
        setFormData({title: '', description: '', status: ''})
        setEditingItem({
            id: '',
            isEditing: false
        });
        getTasks(API_URL_GET);
    }

    const handleDelete = async(item) => {
        const resp = await axios.delete("http://localhost:3000/api/tasks/" + item.id + "/destroy_task", item)
        setDeleteMsg(resp.data.message + "-" + resp.data.task_id)
        setTimeout(() => {
            getTasks(API_URL_GET)
            setDeleteMsg(deleteMsg => "")
        }, 1000);
    }

    const renderTaskRows = () => {
        return (
            task.map((item, index) => {
                const {id, title, description, status} = item;
                return (
                    <tr key={index}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{description}</td>
                        <td>{status}</td>
                        <td>
                            <button className="btn btn-sm btn-primary" onClick={() => handleEdit(item)}><Pencil /></button>
                        </td>
                        <td>
                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(item)}><Trash /></button>
                        </td>
                    </tr>
                );
            })
        )
    }

    return (
        <div>
            <h2>TO DO Management</h2>
            {errorMessage.message !== '' && <h3 style={{color: "red"}}>{errorMessage.message}</h3>}
            <div className="container">
                <div className="form-container">
                    <form className='form' onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input id="title" type="text" placeholder="Enter title" value={formData.title} onChange={(e) => {handleInputChnage(e, "title")}} disabled={editingItem.isEditing} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <textarea id="description" type="text" placeholder="Enter description" value={formData.description} onChange={(e) => {handleInputChnage(e, "description")}} disabled={editingItem.isEditing}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status:</label>
                            <select id="status" value={formData.status} onChange={(e) => {handleInputChnage(e, "status")}}>
                                <option value="">Select...</option>
                                <option value="All">All</option>
                                <option value="To Do">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Done">Done</option>
                            </select>
                        </div>
                        {
                            editingItem.isEditing ? <button className="btn btn-primary" type="submit" onClick={handleEditableChanges}>edit</button> : <button className="btn btn-primary" type="submit">create</button>
                        }   
                    </form>
                </div>

                <div className="table-container">
                    {deleteMsg !== '' && <h3 style={{color: "red"}}>{deleteMsg}</h3>}
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        
                        <tbody>{renderTaskRows()}</tbody>
                    </table>
                </div>
            </div>

        </div>


    );
}
export default HomePage;