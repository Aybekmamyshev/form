import React, {useState} from 'react';
import Input from "./Input";
import {Button} from "@mui/material";
import './register.css'
import {Link} from "react-router-dom";



const SignRegister = () => {
    


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
            <Input type={'text'} placeholder={'name'} value={name} onChange={(e) => setName(e.target.value)}/>
            <Input type={'text'} placeholder={'nickName'} value={nick} onChange={(e) => setNick(e.target.value)}/>
            <Input type={'email'} placeholder={'email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Input type={'text'} placeholder={'gender'} value={gender} onChange={(e) => setGender(e.target.value)}/>
            <Input type={'password'} placeholder={'password'} value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <Input type={'password'} placeholder={'confirmPassword'} value={confirmPassword}
                   onChange={(e) => setConfirmPassword(e.target.value)}/>
            <Button type={"submit"}>Зарегистрироваться</Button>
            <Button type={"reset"}>Сброс</Button>

            <p>Уже есть аккаунт ? <Link to={'/'}>перейти</Link></p>


        </form>

    );
};

export default SignRegister;