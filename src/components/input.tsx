import React from 'react';
import {TextField} from "@mui/material";

interface Props {
    type: string,
    className?: string,
    placeHolder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({className, placeHolder, value, onChange, type}: Props) => {

    return (
        <TextField
            type={type}
            className={className}
            value={value}
            placeholder={placeHolder}
            onChange={onChange}
        />
    );
};

export default Input;