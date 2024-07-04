// src/App.js

import React from 'react';

import './App.css';
import FileUpload from './FileUpload';
import { Link, Route, Router } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div>
        <>

          <div className='h-screen w-full flex justify-center items-center'>
            <div className='place-content-center '>
              <button className="btn btn-outline btn-primary"> <Link to="/">Single Sentence</Link> </button>
              <button className="btn btn-outline btn-accent ml-5"><Link to="/excel">Bulk Sentence</Link></button>
            </div>
          </div>
        </>
        <switch>
          <Route path="/excel">
            <FileUpload />
          </Route>
        </switch>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <FileUpload />
    //   </header>
    // </div>
  );
}

export default App;
