import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg  : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1b2c3e'
      showAlert("Dark Mode enabled ", "success");
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode enabled ", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode}  toggleMode={toggleMode}/>
        <Alerts alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path='/' element={<TextForm heading="Enter Text Here..." mode={mode} showAlert={showAlert}/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
    
  );
}

export default App;
