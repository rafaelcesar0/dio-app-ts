'use client';

import FormLogin from '@/components/forms/FormLogin';
import { PassWord } from '@/components/inputs/PassWord';
import { TextField } from '@/components/inputs/TextField';

const Home = () => {
    return (
        <main className="font-bold h-screen bg-gradient-to-b from-blue-400 to-blue-700 flex justify-center">
            <FormLogin />
        </main>
    );
};

export default Home;
