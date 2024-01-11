import { useState } from 'react';
import { TextField } from './TextField';

interface IPassWord {
    id: string;
    name?: string;
    label?: string;
    placeholder?: string;
}

export const PassWord = ({
    id,
    name = id,
    label = 'Senha',
    placeholder = 'Minha senha'
}: IPassWord) => {
    const [showPassword, setShowPassword]: [boolean, Function] =
        useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword: boolean) => !prevShowPassword);
    };

    return (
        <TextField
            id={id}
            name={name}
            label={label}
            type={showPassword ? 'text' : 'password'}
            placeholder={
                showPassword ? placeholder : '•'.repeat(placeholder.length)
            }
            className="pl-2 pr-10 font-normal border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
        >
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 text-xl flex items-center px-2 text-gray-600 cursor-pointer mt-6"
            >
                {showPassword ? '🙉' : '🙈'}
            </button>
        </TextField>
    );
};
