import React from 'react';
// import { Route,Routes } from 'react-router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => <h1>Welocme to home</h1>
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} >  </Route>

      </Routes>
    </Router>
    // <div className="">
    //   <h1>Hi There</h1>
    // </div>
  );
}

export default App;
