import React, {useState} from 'react';
import Input from "./Input";
import {Button, Switch} from "@mui/material";
import './register.css'
import {Link} from "react-router-dom";


const SignRegister = () => {


    const [name, setName] = useState('');
    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [asterisk, setAsterisk,] = useState(false);
    const [description, setDescription] = useState('')
    const [errorValue, setErrorValue] = useState('');
    const [variant, setVariant] = useState<'filled' | 'standard' | 'outlined' | undefined>(undefined)

    const handleRegister = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleReset = () => {
        setName('')
        setNick('')
        setEmail('')
        setGender('')
        setPassword('')
        setConfirmPassword('')
        setDescription('')
        setErrorValue('')
    }


    const handleChangedSwitched = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDisabled(e.target.checked)
    }

    const handleChangedAsterisk = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAsterisk(e.target.checked)
    }



    return (
        <div className={'wrapper'}>
            <div className={'buttons'}>
                <Button variant={'outlined'} onClick={() => setVariant('filled')}>filled</Button>
                <Button variant={'outlined'} onClick={() => setVariant('standard')}>standard</Button>
                <Button variant={'outlined'} onClick={() => setVariant('outlined')}>outlined</Button>
            </div>
            <form
                className={'form'}
                onSubmit={handleRegister}
                onReset={handleReset}
            >
                <Input variant={variant} asterisk={asterisk} disabled={disabled} type={'text'} placeholder={'name'}
                       value={name}
                       onChange={(e) => setName(e.target.value)}/>
                <Input variant={variant} asterisk={asterisk} disabled={disabled} type={'text'} placeholder={'nickName'} value={nick}
                       onChange={(e) => setNick(e.target.value)}/>
                <Input variant={variant} asterisk={asterisk} disabled={disabled} type={'email'} placeholder={'email'} value={email}
                       onChange={(e) => setEmail(e.target.value)}/>
                <Input variant={variant} asterisk={asterisk} disabled={disabled} type={'text'} placeholder={'gender'} value={gender}
                       onChange={(e) => setGender(e.target.value)}/>
                <Input variant={variant} asterisk={asterisk} disabled={disabled} type={'password'} placeholder={'password'}
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
                <Input variant={variant} asterisk={asterisk} disabled={disabled} type={'password'} placeholder={'confirmPassword'}
                       value={confirmPassword}
                       onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Input variant={variant} asterisk={asterisk} disabled={disabled} placeholder={'description'} description={description}
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}/>
                <Input variant={variant} asterisk={asterisk} disabled={disabled} errorValue={errorValue} color={'warning'}
                       placeholder={'error'}
                       value={errorValue} onChange={(e) => setErrorValue(e.target.value)}
                       error={Boolean(errorValue) && true}/>
                <Switch
                    onChange={handleChangedSwitched}
                />
                <Switch
                    onChange={handleChangedAsterisk}
                />
                <Button type={"submit"}>Зарегистрироваться</Button>
                <Button type={"reset"}>Сброс</Button>
            </form>
            <p className={'text'}>Уже есть аккаунт ? <Link to={'/'}>перейти</Link></p>
        </div>

    )
        ;
};

export default SignRegister;