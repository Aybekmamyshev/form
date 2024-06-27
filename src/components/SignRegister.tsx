import React, {useRef, useState} from 'react';
import Input from "./input";
import {Button} from "@mui/material";
import './register.css'

const SignRegister = () => {
    
    const formRef = useRef<HTMLFormElement>(null)

    const [name, setName] = useState('');
    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({
            name,
            nick,
            email,
            gender,
            password,
            confirmPassword
        })

    }

    const handleReset = () => {
        setName('')
        setNick('')
        setEmail('')
        setGender('')
        setPassword('')
        setConfirmPassword('')
    }

    return (

        <form
            className={'form'}
            onSubmit={handleRegister}
            onReset={handleReset}
        >
            <Input type={'text'} placeHolder={'name'} value={name} onChange={(e) => setName(e.target.value)}/>
            <Input type={'text'} placeHolder={'nickName'} value={nick} onChange={(e) => setNick(e.target.value)}/>
            <Input type={'email'} placeHolder={'email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type={'text'} placeHolder={'gender'} value={gender} onChange={(e) => setGender(e.target.value)}/>
            <Input type={'password'} placeHolder={'password'} value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <Input type={'password'} placeHolder={'confirmPassword'} value={confirmPassword}
                   onChange={(e) => setConfirmPassword(e.target.value)}/>
            <Button type={"submit"}>Зарегистрироваться</Button>
            <Button type={"reset"}>Сброс</Button>
        </form>

    );
};

export default SignRegister;