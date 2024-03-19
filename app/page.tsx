import { MouseEvent } from 'react';

import Image from 'next/image';
import BackgroundVideo from '../public/videos/background-video.mp4';
// import MorLogo from '../public/images/mor-logo.svg';

import { signIn } from 'next-auth/react';

import GithubLoginButton from './components/githubLoginButton';
import { auth } from './auth';
import { redirect } from 'next/navigation';
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  // if user is already logged in, redirect to /settings
  const session = await auth();

  if (session?.user) {
    redirect('/settings');
  }

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl h-[60vh] flex flex-col items-center justify-center">
      <video
        autoPlay
        muted
        loop
        className="absolute z-[-1] w-full h-full object-cover"
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      {/* <Image src={MorLogo} alt="MOR logo" height={150} className="mb-8" /> */}
      {/* <div className="text-5xl font-bold mb-14 uppercase bg-gradient-to-r from-emerald-400 via-emerald-700 to-teal-600 text-transparent bg-clip-text bg-300% animate-gradient">
        MOR Software
      </div> */}
      <div className="text-5xl font-bold mb-14 uppercase text-white">
        MOR Software
      </div>
      <div className="text-base text-gray-400">
        Become a contributor to the future of open source something something
      </div>
      <div className="text-base mb-12 text-gray-400">
        Sign into github to register as a DEVELOPER for the Morpheus AI project
      </div>
      <GithubLoginButton />
    </main>
  );
}
