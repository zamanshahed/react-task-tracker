import React from 'react'
import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

//function based :
function App() {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Doctor appointment',
        day: 'Feb 5th at 2:45pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting appointment',
        day: 'Feb 8th at 4:15pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Home Shopping',
        day: 'Feb 15th at 12:05pm',
        reminder: true,
    },
])

//add task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000)+11
  console.log(task)
  console.log(id)
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
      <Header />      
      <AddTask onAdd={addTask} />      
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
