import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

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
const addTask = async (task) => {
  const res = await fetch('http://localhost:8000/tasks', {method: 'POST', headers:{
    'Content-type':'application/json'
    },
    body: JSON.stringify(task)
})
  
  const data = await res.json()
  setTasks([...tasks, data])

  // const id = Math.floor(Math.random()*10000)+11
  // console.log(task)
  // console.log(id)
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])


}



//Fetch Task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:8000/tasks/${id}`)
  const data = await res.json()
  return data

}


//delete task
const deleteTask = async (id) => {
  await fetch(`http://localhost:8000/tasks/${id}`, {method:'DELETE'})

  setTasks(tasks.filter((task)=> task.id !== id))
}

//toggle reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

  const res = await fetch(`http://localhost:8000/tasks/${id}`, 
              { 
                method:  'PUT', 
                headers: {'Content-type':'application/json'},
                body: JSON.stringify(updatedTask)
              })
  const data = await res.json()

  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder}:task) )
}

  return (
    <Router>
    <div className="container">
      <Header onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>      
      
      <Route path="/" exact render={(props)=>(
        <>
          { showAddTask && <AddTask onAdd={addTask} /> }     
          { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks !'}      
        </>
      )} />
      
      <Route path="/about" component={About} />
      <Footer />

    </div>
    </Router>
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
