import { PassWord } from '../inputs/PassWord';
import { TextField } from '../inputs/TextField';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const FormLogin = () => {
    const [output, setOutput] = useState('');
    const { register, handleSubmit } = useForm();

    function createUser(data: any) {
        setOutput(JSON.stringify(data, null, 2));
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(createUser)}
                className="flex flex-col gap-8 px-16 w-full max-w-xl rounded-3xl text-1xl"
            >
                <h1 className="text-white flex justify-center text-3xl font-extrabold">
                    Faça o login
                </h1>
                <TextField
                    id="email"
                    label="E-mail"
                    type="email"
                    placeholder="joão@gmail.com"
                    register={register}
                />

                <PassWord id="senha" register={register} />

                <button
                    type="submit"
                    className="bg-green-600 px-3 py-1 rounded flex justify-center transition duration-300 hover:bg-green-500 text-lg text-white "
                >
                    Salvar
                </button>
            </form>

            <pre className='text-white'>{output}</pre>
        </>
    );
};

export default FormLogin;
