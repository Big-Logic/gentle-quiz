import React, { useEffect } from 'react';

import Signup from '../signups/Signup';
import Login from '../logins/Login';
import Dashboard from '../dashboard/Dashboard';
import { HandleQuizContext } from '../../quiz-context/quiz-context';
import { getQuizQuestions } from '../../models/Models';
import './App.css';

function App() {
  return (
    // <Signup />
    // <Login />
    <HandleQuizContext>
      <Dashboard />
    </HandleQuizContext>
  );
}

export default App;
