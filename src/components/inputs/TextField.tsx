import { CreateUserFormData } from '@/validation/formLogin';
import { ReactNode } from 'react';
import { UseFormProps, UseFormReturn } from 'react-hook-form';

interface ITextField {
  id: string;
  label?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  form: UseFormReturn<CreateUserFormData>;
  children?: ReactNode;
}

export const TextField = ({
  id,
  label,
  type = 'text',
  placeholder,
  className = 'px-2 h-10 font-normal border-2 text-white bg-zinc-700 border-zinc-500 rounded-md focus:border-green-500 focus:outline-none autofill:focus',
  children,
  form,
}: ITextField) => {
  const {
    register,
    formState: { errors },
  }: any = form;

  return (
    <div className='flex flex-col gap-1'>
      <div className='flex flex-col gap-1 relative'>
        <label htmlFor={id} className='ml-1 text-white'>
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
      {errors?.[id] && (
        <span className='text-red-800'>{errors?.[id]?.message}</span>
      )}
    </div>
  );
};
