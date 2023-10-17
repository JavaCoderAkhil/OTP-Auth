import { IconButton, InputAdornment, TextField } from '@mui/material';
import React from 'react'

interface InputComponentProps {
    name: string;
    placeholder: string;
    value: string | number | null;
    forChange: React.ChangeEventHandler<HTMLInputElement>;
    icon: any
    type: string
    togglePasswordVisibility: any
}

const InputComponent: React.FC<InputComponentProps> = ({ name, placeholder, value, forChange, icon, type, togglePasswordVisibility }) => {
    return (
        <TextField name={name} type={type}
            placeholder={placeholder}
            fullWidth
            value={value || ''}
            onChange={forChange}
            autoComplete="off" InputProps={{
                sx: {
                    height: "56px",
                },
                endAdornment: (
                    <InputAdornment position="end">
                        {name === 'password' ? <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePasswordVisibility}
                            edge="end"
                        >{icon}
                        </IconButton> : icon}
                    </InputAdornment>
                ),
            }}
        />

    )
}

export default InputComponent