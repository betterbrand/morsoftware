import { PANELS } from '../constants';
import GithubCatLogoWhite from '../../public/images/github-cat-logo-white.svg';
import Image from 'next/image';
import { FormValues } from '../types';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import { signIn, getSession } from 'next-auth/react';

type GithubPanelProps = { setSelectedPanel: (panel: string) => void, signupFormFields: FormValues };

const GithubPanel = ({ setSelectedPanel, signupFormFields }: GithubPanelProps) => {
  const router = useRouter();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const githubSignInResponse = await signIn('github', { redirect: false });

      if (githubSignInResponse?.ok) {
        const session = await getSession();

        if (session) {
          const githubId = session.user?.name;

          const registrationResponse = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...signupFormFields,
              githubId: githubId,
            }),
          });

          if (registrationResponse.ok) {
            // User registration successful
            router.push('/dashboard');
          } else {
            // Handle registration error
            console.error('Registration failed');
          }
        } else {
          // Handle session error
          console.error('Failed to retrieve session');
        }
      } else {
        // Handle GitHub authentication error
        console.error('GitHub authentication failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  return (
    <div className="flex flex-col  w-full h-full">
      <div className="text-xl font-semibold">Connect your Github account</div>
      <div className="grow flex justify-center items-center">
        <button
          onClick={handleSubmit}
          type="submit"
          className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Image
            src={GithubCatLogoWhite}
            alt="Github logo"
            height={32}
            style={{ marginRight: 8 }}
          />
          Connect your Github account
        </button>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setSelectedPanel(PANELS.MAIN)}
          type="button"
          className="mr-2 mb-2 inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default GithubPanel;
