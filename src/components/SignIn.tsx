import React, {useState} from 'react';
import Input from "./Input";
import {Button} from "@mui/material";
import './login.css'
import {Link} from "react-router-dom";




const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Submitting:', { email, password });
    };

    const handleReset = () => {
        setEmail('');
        setPassword('');
    }


    return (
        <form
            onReset={handleReset}
            className={'form'}
            onSubmit={handleSubmit}
        >
            <Input value={email} type={'text'} placeholder={'email'} onChange={(e) => setEmail(e.target.value)}/>
            <Input value={password} type={'password'} placeholder={'password'} onChange={(e) => setPassword(e.target.value)}/>
            <Button type={'submit'}>Войти</Button>
            <Button type={"reset"}>Сброс</Button>
            <p>Нет регистрации ? <Link to={'/register'}>перейти</Link></p>

        </form>
    );
};
export default SignIn;


