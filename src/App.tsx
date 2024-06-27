import React, {useState} from 'react';
import './App.css';
import SignIn from "./components/SignIn";
import SignRegister from "./components/SignRegister";

function App() {

    return (
        <div className="App">
            <SignIn/>
            <SignRegister/>
        </div>
    );
}

export default App;
