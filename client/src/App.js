import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";

//import Navbar from "./components/Navbar";

function App() {
    return (
        <Router>
            {/*<Navbar />*/}
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/signin' element={<SignInPage/>} exact/>
                <Route path='/signup' element={<SignUpPage/>} exact/>
            </Routes>
        </Router>
    );
}

export default App;