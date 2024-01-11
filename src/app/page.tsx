'use client';

import Layout from '@/components/Layout';
import { useState } from 'react';

const Home = () => {
    const [showPassword, setShowPassword]: [boolean, Function] =
        useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword: boolean) => !prevShowPassword);
    };

    return (
        <main className="font-bold h-screen w-screen bg-gradient-to-b from-blue-400 to-blue-700 flex justify-center">
            <Layout>
                <h1 className="flex justify-center text-3xl font-extrabold mb-10">
                    Faça o login
                </h1>
                <div className="flex flex-col relative">
                    <label htmlFor="emailInput">
                        Email
                    </label>
                    <input
                        type="email"
                        id="emailInput"
                        placeholder="joão@gmail.com"
                        className="pl-2 pr-2 font-normal border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                    />
                </div>
                <br />
                <div className="flex flex-col relative">
                    <label htmlFor="passwordInput">
                        Senha
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="passwordInput"
                        placeholder={
                            showPassword ? 'Minha senha' : '•••••••••••'
                        }
                        className="pl-2 pr-10 font-normal border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 text-xl flex items-center px-2 text-gray-600 cursor-pointer mt-6"
                    >
                        {showPassword ? '🙉' : '🙈'}
                    </button>
                </div>
                <br />
                <button
                    type="submit"
                    className="bg-blue-400 px-3 py-1 mt-4 rounded flex transition duration-300 mx-auto hover:bg-blue-500 text-lg text-white "
                >
                    CONTINUAR
                </button>
            </Layout>
        </main>
    );
};

export default Home;
