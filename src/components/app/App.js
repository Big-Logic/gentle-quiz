import React, { useEffect } from 'react';

import Signup from '../signups/Signup';
import Login from '../logins/Login';
import Dashboard from '../dashboard/Dashboard';
import { getQuizQuestions } from '../../models/Models';
import './App.css';

function App() {

  // useEffect(() => {
  //     getQuizQuestions('history',15,'LR','easy')
  // },[])
  return (
    // <Signup />
    // <Login />
    <Dashboard />
  );
}

export default App;
