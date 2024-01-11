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
    className = 'px-2 h-8 font-normal border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none',
    children
}: ITextField) => {
    return (
        <div className="flex flex-col gap-1 relative">
            <label htmlFor={id} className="ml-1">
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
