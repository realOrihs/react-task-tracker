/* eslint-disable no-template-curly-in-string */
import Header from './components/Header'
import Tasks from './components/Tasks'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react'
import AddTask from './components/AddTask'
import Preferences from './components/Preferences'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import useToken from './components/useToken'


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Project Meeting',
      day: 'March 31st at 2:00pm',
      reminder: true,
    }
  ])
  

  // Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()*10000) + 1
  const newTask= {id, ...task }
  setTasks([...tasks, newTask])
}

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
       task.id === id ? { ...task, reminder:
       !task.reminder} : task
       )
    )
  }

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  
  return (
    <div className='container'>
      <h1 className="wrapper">Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/task-tracker">
          <Header onAdd={() => setShowAddTask
        (!showAddTask)} showAdd={showAddTask}/>
          {showAddTask && <AddTask onAdd={addTask} 
          />}

          {tasks.length > 0 ?   
          <Tasks tasks = {tasks}
            onDelete = {deleteTask}
            onToggle = {toggleReminder} /> : 'No Tasks To Show'}
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
          
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>  
  )
}

export default App;
