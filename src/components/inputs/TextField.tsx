import { ReactNode } from 'react';

interface ITextField {
    id: string;
    name?: string;
    label?: string;
    type?: string;
    className?: string;
    placeholder?: string;
    children?: ReactNode;
}

export const TextField = ({
    id,
    name = id,
    label,
    type = 'text',
    placeholder,
    className = 'px-2 h-10 font-normal border-2 text-white bg-zinc-700 border-zinc-500 rounded-md focus:border-green-500 focus:outline-none autofill:focus',
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
                name={name}
                placeholder={placeholder}
                className={className}
            />
            {children}
        </div>
    );
};
