import { useState } from 'react'

const Tasks = () => {
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
    return (
        <>
          {
              tasks.map((task) =>(<h3 key={task.id} >{task.text}</h3>))
          }  
        </>
    )
}

export default Tasks
