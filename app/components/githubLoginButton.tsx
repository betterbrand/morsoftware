'use client';

import { MouseEvent } from 'react';
import Image from 'next/image';
import GithubCatLogoWhite from '../public/images/github-cat-logo-white.svg';
import { signIn } from 'next-auth/react';

const GithubLoginButton = () => {
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn('github');
  };

  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-900 hover:bg-emerald-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <Image
        src={GithubCatLogoWhite}
        alt="Github logo"
        height={32}
        style={{ marginRight: 8 }}
      />
      Connect your Github account
    </button>
  );
};

export default GithubLoginButton;
