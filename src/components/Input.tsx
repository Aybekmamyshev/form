import React from 'react';
import {TextField} from "@mui/material";


interface PropsInput {
    type?: string,
    placeholder: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    label?: string,
    description?: string,
    nickname?: string
    error?: boolean
    errorValue?: string
    variant?: 'filled' | 'standard' | 'outlined'
    radius?: number
    size?: "small" | "medium" | undefined,
    disabled?: boolean
    asterisk?: boolean
    icon?: React.ReactNode
    className?: string,
    colorValue?: 'primary'
        | 'secondary'
        | 'error'
        | 'info'
        | 'success'
        | 'warning'
}

const Input = (
    {
        type,
        placeholder,
        value,
        onChange,
        label,
        description,
        error,
        size,
        disabled,
        nickname,
        asterisk,
        variant,
        radius,
        icon,
        className,
        colorValue,
        errorValue
    }: PropsInput) => {
    return (
        <>
            <p>{description}</p>
            <label style={{
                display: 'flex',
                flexDirection: 'column'

            }} className={className}>
                {label}
                {asterisk && <span style={{color: "red"}}>*</span>}
                <TextField
                    style={{color:`${errorValue && 'red'}`}}
                    className={className}
                    value={value}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    variant={variant}
                    disabled={disabled}
                    error={error}
                    size={size}
                    color={colorValue}
                />
                <span>{icon}</span>
                <span style={{color: 'red'}}>{errorValue}</span>
            </label>
        </>
    );
};

export default Input;