import React from 'react'
import { useState, useEffect } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

//function based :
const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState ([])

  useEffect(()=> {
  const getTasks = async () => {
    const taskFromServer = await fetchTasks()
    setTasks(taskFromServer)
  }
    getTasks()
  }, [])

//Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:8000/tasks')
  const data = await res.json()
  return data

}


//add task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+11
  console.log(task)
  console.log(id)
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder}:task) )
}

  return (
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>      
      { showAddTask && <AddTask onAdd={addTask} /> }     
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks !'}
    </div>
  );
}

//class based:
//------------------
// class App extends React.Component{
//   render(){
//     return <h1>Hello from React Class!</h1>
//   }
// }
export default App;
