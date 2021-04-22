/* eslint-disable no-template-curly-in-string */
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Preferences from './components/Preferences';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import useToken from './components/useToken';
import RoadmapsListComponent from './components/Roadmap/components/RoadmapsList';
import SearchBarComponent from './components/SearchBar/SearchBar';
import AddRoadmapComponent from "./components/Roadmap/components/addRoadmap";
import Roadmap from "./components/Roadmap/components/Roadmap";

const App = () => {
  const { token, setToken } = useToken();
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([

    {
      id: 1,
      text: 'Project Meeting',
      day: '03 31 14:00:00',
      reminder: true,
    },
  ]);
  const [roadmapsList, setRoadmapsList] = useState([
    { id: 1, name: 'Roadmap1', date: 'data', creator: 'creator', type_of_access: 'redact'},
    { id: 2, name: 'Roadmap2', date: 'data', creator: 'creator', type_of_access: 'redact'},
    { id: 3, name: 'Roadmap3', date: 'data', creator: 'creator', type_of_access: 'redact'},
    { id: 4, name: 'Roadmap4', date: 'data', creator: 'creator', type_of_access: 'redact'},
    { id: 5, name: 'Roadmap5', date: 'data', creator: 'creator', type_of_access: 'redact'},
  ]);
  const [roadmap, setRoadmap] = useState(null)

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? {
        ...task,
        reminder:
       !task.reminder,
      } : task)),
    );
  };

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="main">
      <h1 className="wrapper">Application</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <AddRoadmapComponent roadmapsList={roadmapsList} setRoadmapsList={setRoadmapsList}/>
            {/* <Redirect to="/task-tracker" /> */}
            <RoadmapsListComponent roadmapsList={roadmapsList} setRoadmapsList={setRoadmapsList} setRoadmap={setRoadmap}/>
            <div>
              <SearchBarComponent />
              {/* <ul> */}
              {/*  {RoadmapsListComponent.map((map) => ( */}
              {/*      <li key={map.id}>(map.name)</li> */}
              {/*  ))} */}
              {/* </ul> */}
            </div>
          </Route>
          <Route path={"/currentRoadmap/:id?"}>
            <Roadmap roadmap={roadmap}/>
          </Route>
          <div className="container">
            <Route path="/task-tracker">
              <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
              />
              {showAddTask && (
                <AddTask onAdd={addTask} />
              )}

              {tasks.length > 0
                ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                )
                : 'No Tasks To Show'}
            </Route>
          </div>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
