import { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface ITextField {
    id: string;
    label?: string;
    type?: string;
    className?: string;
    placeholder?: string;
    register: UseFormRegister<any>;
    children?: ReactNode;
}

export const TextField = ({
    id,
    label,
    type = 'text',
    placeholder,
    className = 'px-2 h-10 font-normal border-2 text-white bg-zinc-700 border-zinc-500 rounded-md focus:border-green-500 focus:outline-none autofill:focus',
    register,
    children
}: ITextField) => {
    return (
        <div className="flex flex-col gap-1 relative">
            <label htmlFor={id} className="ml-1 text-white">
                {label}
            </label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={className}
                autoComplete='off'
                {...register(id)}
            />
            {children}
        </div>
    );
};
