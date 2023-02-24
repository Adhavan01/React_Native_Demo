import './App.css';
import React from 'react';
import LoginPage from './component/LoginPage';
import ImageUplode from './component/ImageUplode';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App flex flexJC-C">
   <Router>
    <Routes>
      <Route index element={<LoginPage/>}/>
      <Route path='uplode' element={ <ImageUplode/>}/>
    </Routes>
   </Router>
    </div>
  );
  
}

export default App;
