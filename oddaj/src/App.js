import './scss/App.scss';
import React, {createContext, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home"
import Login from './components/login';

export const AppContext = createContext(null);


const Register = () => <p>Register</p>

const App = () => {
    const [state, setState] = useState({})

    return (
        <BrowserRouter>
            <AppContext.Provider value={{ state, setState }}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Routes>
            </AppContext.Provider>
        </BrowserRouter>
    )
}

export default App;
