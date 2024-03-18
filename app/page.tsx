import { MouseEvent } from 'react';

import Image from 'next/image';
import GithubCatLogoWhite from './public/images/github-cat-logo-white.svg';
import MorLogo from './public/images/mor-logo.svg';

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
    <main className="p-4 md:p-10 mx-auto max-w-7xl flex flex-col items-center">
      <Image src={MorLogo} alt="MOR logo" height={200} className="mb-8" />
      <div className="text-3xl font-bold mb-14">MOR Software</div>
      <div className="text-base">
        Become a contributor to the future of open source something something
      </div>
      <div className="text-base mb-12">
        Sign into github to register as a DEVELOPER for the Morpheus AI project
      </div>
      <GithubLoginButton />
    </main>
  );
}
