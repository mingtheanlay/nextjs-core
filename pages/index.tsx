import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen items-center justify-center">
        <div className="text-8xl font-bold">
          <h1>
            Welcome to <span className="text-blue-500">Next.js!</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
