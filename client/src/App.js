import {BrowserRouter as Router,  Route , Link, } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from './actions/users';
import User from './pages/Users/User';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])


  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AllRoutes />

      </Router>
    </div>
  );
}

export default App;
