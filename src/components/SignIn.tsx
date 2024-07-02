import React, {useState} from 'react';
import Input from "./Input";
import {Button, Switch} from "@mui/material";
import './login.css'
import {Link} from "react-router-dom";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [asterisk, setAsterisk,] = useState(false);
    const [description, setDescription] = useState('');
    const [errorValue, setErrorValue] = useState('');
    const [variant, setVariant] = useState<'filled' | 'standard' | 'outlined' | undefined>(undefined)


    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log('Submitting:', {email, password});
    };

    const handleReset = () => {
        setEmail('');
        setPassword('');
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
                onReset={handleReset}
                className={'form'}
                onSubmit={handleSubmit}
            >
                <Input variant={variant} asterisk={asterisk} disabled={disabled} value={email} type={'text'} placeholder={'email'}
                       onChange={(e) => setEmail(e.target.value)}/>
                <Input variant={variant} asterisk={asterisk} disabled={disabled} value={password} type={'password'}
                       placeholder={'password'} onChange={(e) => setPassword(e.target.value)}/>
                <Input variant={variant} value={description} disabled={disabled} placeholder={'description'} description={description}
                       onChange={(e) => setDescription(e.target.value)}/>
                <Input variant={variant} asterisk={asterisk} disabled={disabled} errorValue={errorValue}
                       colorValue={'warning'}
                       placeholder={'error'}
                       value={errorValue} onChange={(e) => setErrorValue(e.target.value)}
                       error={Boolean(errorValue) && true}/>
                <Switch
                    onChange={handleChangedSwitched}
                />
                <Switch
                    onChange={handleChangedAsterisk}
                />
                <Button type={'submit'}>Войти</Button>
                <Button type={"reset"}>Сброс</Button>
                <p>Нет регистрации ? <Link to={'/register'}>перейти</Link></p>


            </form>
        </div>
    );
};
export default SignIn;


