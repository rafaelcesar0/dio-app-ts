'use client';

import FormLogin from '@/components/forms/FormLogin';
import { PassWord } from '@/components/inputs/PassWord';
import { TextField } from '@/components/inputs/TextField';

const Home = () => {
  return (
    <main className='h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 gap-10 flex flex-col items-center justify-center'>
      <FormLogin />
    </main>
  );
};

export default Home;
