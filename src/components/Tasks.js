const tasks = [
  {
    id: 1,
    text: 'Doctor\'s Appointment',
    day: '5th July at 2:00 PM',
    reminder: true
  },
  {
    id: 2,
    text: 'Cleaning House',
    day: '6th July at 9:00 AM',
    reminder: false
  },
  {
    id: 3,
    text: 'Attend Final Thesis viva',
    day: '7th July at 5:00 PM',
    reminder: true
  }
]

const Tasks = () =>  {
  return (
    <>
      {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks;
