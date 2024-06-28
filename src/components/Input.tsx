import React from 'react';
import {TextField} from "@mui/material";


interface PropsInput {
    type?: string,
    placeholder: string,
    value: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string
}

const Input = ({type,placeholder,value,onChange,label}: PropsInput) => {
    return (
        <TextField
            value={value}
            placeholder={placeholder}
            type={type}
            onChange={onChange}
        />
    );
};

export default Input;