import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
       
      </Routes>

     
    </div>
  );
}

export default App;
