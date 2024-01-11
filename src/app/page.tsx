'use client';

import FormLogin from '@/components/FormLogin';
import { PassWord } from '@/components/inputs/PassWord';
import { TextField } from '@/components/inputs/TextField';


const Home = () => {
    return (
        <main className="font-bold h-screen w-screen bg-gradient-to-b from-blue-400 to-blue-700 flex justify-center">
            <FormLogin>
                <h1 className="flex justify-center text-3xl font-extrabold mb-10">
                    Faça o login
                </h1>
                <TextField id='inputEmail' label='Email' type='email' placeholder='joão@gmail.com'/>
                
                <PassWord id='inputSenha'/>

                <button
                    type="submit"
                    className="bg-blue-400 px-3 py-1 mt-4 rounded flex transition duration-300 mx-auto hover:bg-blue-500 text-lg text-white "
                >
                    CONTINUAR
                </button>
            </FormLogin>
        </main>
    );
};

export default Home;
