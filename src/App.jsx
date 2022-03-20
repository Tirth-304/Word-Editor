import Navbar  from './components/Navbar'
import Footer from './components/footer'
import TextForm from './components/TextForm';
import Alert from './components/alert';
import About from './components/About';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import { useState } from 'react';

const App = () => {

    const [mode , setMode] = useState('light');
    const [alert , setAlert] = useState(null);

    const showAlert = (message , type) => {
        setAlert({
            msg: message,
            type: type
        })

        setTimeout(() => {
            setAlert(null)
        } , 1000);
    }

    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            showAlert("Dark Mode has been enabled." , "success");
        }

        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light Mode has been enabled." , "success");
        }
    }
    return(
        <>
            <Router>
                <Navbar mode = {mode} toggleMode={toggleMode} />
                <Alert alert = {alert}/>
                <div className='container my-2'> 
                    <Routes>
                        <Route exact path='/about' element={<About mode = {mode}/>}/>
                        <Route exact path='/' element={<TextForm heading='Enter the Text to convert' showAlert={showAlert} mode = {mode}/>}/>
                    </Routes>
                </div>
                <Footer mode = {mode} />
            </Router>
        </>
    );
};

export default App;