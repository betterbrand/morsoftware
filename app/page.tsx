'use client';
import { sql } from '@vercel/postgres';
import { MouseEvent } from 'react';

import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';
import Image from 'next/image';
import GithubCatLogoWhite from './public/images/github-cat-logo-white.svg';
import MorLogo from './public/images/mor-logo.svg';

import { signIn, getSession } from 'next-auth/react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

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
    </main>
  );
}
