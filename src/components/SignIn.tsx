import React, {useState} from 'react';
import Input from "./input";
import {Button} from "@mui/material";
import './login.css'



const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Submitting:', { email, password });
        // Reset fields after submission (optional)
        setEmail('');
        setPassword('');
    };


    return (
        <form
            className={'form'}
            onSubmit={handleSubmit}
        >
            <Input value={email} type={'text'} placeHolder={'email'} onChange={(e) => setEmail(e.target.value)}/>
            <Input value={password} type={'password'} placeHolder={'password'} onChange={(e) => setPassword(e.target.value)}/>
            <Button type={'submit'}>Войти</Button>
            <Button type={"reset"}>Сброс</Button>
        </form>
    );
};
export default SignIn;


