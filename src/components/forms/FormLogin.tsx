import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { PassWord } from '../inputs/PassWord';
import { TextField } from '../inputs/TextField';
import {
  CreateUserFormData,
  createUserFormSchema,
} from '@/validation/formLogin';
import { JetBrains_Mono } from 'next/font/google';
const jet = JetBrains_Mono({ subsets: ['latin'] });

/**
 * To-do
 *
 * [x] Validação / transformação
 * [ ] Field Arrays
 * [ ] Upload de arquivos
 * [ ] Composition Pattern
 */

const FormLogin = () => {
  const [output, setOutput] = useState('');

  const form = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  });

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <>
      <form
        onSubmit={form.handleSubmit(createUser)}
        className='flex flex-col gap-8 px-16 w-full max-w-xl rounded-3xl text-1xl'
      >
        <h1 className='text-white flex justify-center text-3xl font-extrabold'>
          Register
        </h1>
        <TextField
          id='name'
          label='Name'
          type='text'
          placeholder='João Paulo'
          form={form}
        />

        <TextField
          id='email'
          label='E-mail'
          type='email'
          placeholder='joão@gmail.com'
          form={form}
        />

        <PassWord id='password' form={form} />

        <button
          type='submit'
          className='bg-green-600 px-3 py-1 rounded flex justify-center transition duration-300
                     hover:bg-green-500 text-lg text-white '
        >
          Save data
        </button>
      </form>

      <pre className={`text-white ${jet.className}`}>{output}</pre>
    </>
  );
};

export default FormLogin;
