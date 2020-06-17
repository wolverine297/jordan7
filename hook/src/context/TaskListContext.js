import React,{createContext,useState} from 'react';
import uuid from 'react-uuid';


export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const id = uuid();
    const [tasks,setTask] = useState([
        {title: "Read the book",id:1},
        {title: "Wash the car",id:2},
        {title: "Write some code",id:3}
    ]);

    const [editItem,seteditItem] = useState(null)

    const addTask = title => {
        setTask([...tasks, { title, id:id }])
      }

      const removeTask = id => {
          setTask(tasks.filter(task => task.id !== id))
      }
      const clearList =() => {
          setTask([])
      }

      const findItem = id => {
          const item = tasks.find(task => task.id === id);
          seteditItem(item)
      }

      const editTask = (title,id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))
        setTask(newTasks)
      }
      
    return (
        <TaskListContext.Provider value = {{tasks,addTask,removeTask,clearList,findItem,editItem,editTask}}>{props.children}</TaskListContext.Provider>
    )
};

export default TaskListContextProvider