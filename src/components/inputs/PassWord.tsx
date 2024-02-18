import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { TextField } from './TextField';
import { CreateUserFormData } from '@/validation/formLogin';

interface IPassWord {
  id: string;
  label?: string;
  placeholder?: string;
  form: UseFormReturn<CreateUserFormData>;
}

export const PassWord = ({
  id,
  label = 'Password',
  placeholder = 'My password',
  form,
}: IPassWord) => {
  const [showPassword, setShowPassword]: [boolean, Function] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword: boolean) => !prevShowPassword);
  };

  return (
    <TextField
      id={id}
      label={label}
      type={showPassword ? 'text' : 'password'}
      placeholder={showPassword ? placeholder : '•'.repeat(placeholder.length)}
      className='pl-2 pr-10 h-10 font-normal border-2 text-white bg-zinc-700 border-zinc-500 rounded-md focus:border-green-500 focus:outline-none'
      form={form}
    >
      <button
        type='button'
        onClick={togglePasswordVisibility}
        className='text-2xl absolute inset-y-0 right-0 flex justify-center items-center px-2 mt-7'
      >
        {showPassword ? '🙉' : '🙈'}
      </button>
    </TextField>
  );
};
