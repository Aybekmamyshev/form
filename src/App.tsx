import './App.css';
import React from "react";
import SignRegister from "./components/SignRegister";
import SignIn from "./components/SignIn";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";



function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={''} element={<SignIn/>}/>
                <Route path={'/register'} element={<SignRegister/>}/>
            </>
        )
    )

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App;
