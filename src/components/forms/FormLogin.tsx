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
                className="flex flex-col gap-8 bg-white p-5 rounded-3xl min-w-96 mt-20 h-min text-1xl"
            >
                <h1 className="flex justify-center text-3xl font-extrabold">
                    Faça o login
                </h1>
                <TextField
                    id="inputEmail"
                    label="Email"
                    type="email"
                    placeholder="joão@gmail.com"
                />

                <PassWord id="inputSenha" />

                <button
                    type="submit"
                    className="bg-blue-400 px-3 py-1 mt-4 rounded flex transition duration-300 mx-auto hover:bg-blue-500 text-lg text-white "
                >
                    CONTINUAR
                </button>
            </form>

            <pre>output</pre>
        </>
    );
};

export default FormLogin;
