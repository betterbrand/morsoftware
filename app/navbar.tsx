'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

import DarkLogo from './public/images/dark-logo.png';

const navigation = [
  { name: 'Leaderboard', href: '/code-providers/leaderboard' },
  { name: 'Calculator', href: '/code-providers/calculator' }
];

const not_logged_in_navigation = [
  { name: 'Github Docs', href: 'https://github.com/MorpheusAIs/Docs' }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ user }: { user: any }) {
  const pathname = usePathname();

  // if user is not logged in, do not show the navbar
  if (!user) {
    return (
      <Disclosure as="nav" className="fixed top-0 w-full shadow-sm flex">
        {({ open }) => (
          <>
            <div className="px-4 sm:px-6 lg:px-8 w-full">
              <div className="flex h-16">
                <div className="flex justify-between w-full">
                  <div className="flex flex-shrink-0 items-center">
                    <Image src={DarkLogo} alt="Logo" width={32} height={32} />
                  </div>
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    {not_logged_in_navigation.map((item) => {
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            pathname === item.href
                              ? 'border-slate-500 text-white'
                              : 'border-transparent text-gray-500 hover:text-white hover:border-gray-300',
                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                          )}
                          aria-current={
                            pathname === item.href ? 'page' : undefined
                          }
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pt-2 pb-3">
                {not_logged_in_navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? 'bg-slate-50 border-slate-500 text-slate-700'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    );
  }

  return (
    <Disclosure as="nav" className=" shadow-sm flex justify-center">
      {({ open }) => (
        <>
          <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Image src={DarkLogo} alt="Logo" width={32} height={32} />
                </div>
                {/* <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => {
                    if (item.name === 'Code Providers') {
                      return (
                        <Menu
                          key={item.name}
                          as="div"
                          className="relative ml-3 "
                        >
                          <Menu.Button
                            className={classNames(
                              pathname.includes(item.href)
                                ? 'border-slate-500 text-white'
                                : 'border-transparent text-white hover:text-gray-200 hover:border-gray-300',
                              'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full'
                            )}
                          >
                            <span className="sr-only">
                              Open code providers menu
                            </span>
                            {item.name}
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/code-providers/leaderboard">
                                    <button
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'flex w-full px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      Leaderboard
                                    </button>
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/code-providers/calculator">
                                    <button
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'flex w-full px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      Calculator
                                    </button>
                                  </Link>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      );
                    }
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          pathname === item.href
                            ? 'border-slate-500 text-white'
                            : 'border-transparent text-gray-500 hover:text-white hover:border-gray-300',
                          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        )}
                        aria-current={
                          pathname === item.href ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div> */}
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <Menu as="div" className="relative ml-3 z-20">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={user?.picture || 'https://avatar.vercel.sh/leerob'}
                        height={32}
                        width={32}
                        alt={`${user?.name || 'placeholder'} avatar`}
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {user ? (
                        <Menu>
                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/settings">
                                <button
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'flex w-full px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Settings
                                </button>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={classNames(
                                  active ? 'bg-gray-100' : '',
                                  'flex w-full px-4 py-2 text-sm text-gray-700'
                                )}
                                onClick={() => signOut({ callbackUrl: '/' })}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex w-full px-4 py-2 text-sm text-gray-700'
                              )}
                              onClick={() => signIn('github')}
                            >
                              Sign in
                            </button>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {/* <div className="space-y-1 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? 'bg-slate-50 border-slate-500 text-slate-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                    'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div> */}
            <div className="border-t border-gray-200 pt-4 pb-3">
              {user ? (
                <>
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={user.picture}
                        height={32}
                        width={32}
                        alt={`${user.name} avatar`}
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <button
                      onClick={() => signOut({ callbackUrl: '/' })}
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <div className="mt-3 space-y-1">
                  <button
                    onClick={() => signIn('github')}
                    className="flex w-full px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  >
                    Sign in
                  </button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
