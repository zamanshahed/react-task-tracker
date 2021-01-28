import React from 'react'
import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

//function based :
function App() {
  const [tasks, setTask] = useState ([
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

//delete task
const deleteTask = (id) => {
  console.log('delete request for: ', id)
}

  return (
    <div className="container">
      {/* <h1>Hello {name}, from REACT {15.3+2} (APP.js)</h1> */}
      {/* <h2>{flag? "Green Light": "Red Light"}</h2> */}
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
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
