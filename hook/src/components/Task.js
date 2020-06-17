import React,{useContext} from 'react'
import {TaskListContext} from '../context/TaskListContext'

function Task({task}) {
    const {removeTask,findItem} = useContext(TaskListContext);
    return (
        <li className = "list-item">
        <span>{task.title}</span>
        <div>
        <button onClick = {() => removeTask(task.id)} className = "btn-delete task-btn">
        <i class="fa fa-remove"></i>
        </button>
        <button onClick = {() => findItem(task.id)} className = "btn-edit task-btn">
        <i className="fa fa-edit"></i>
        </button>
        </div>
        </li>
    )
}

export default Task
