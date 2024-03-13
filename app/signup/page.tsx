'use client';

import { useState } from 'react';
import { Card } from '@tremor/react';
import { PANELS } from './constants';

import SignupForm from './components/SignupForm';
import GithubPanel from './components/GithubPanel';
import { FormValues } from './types';

type BreadcrumbProps = {
  selectedPanel: string;
};

const Breadcrumb = ({ selectedPanel }: BreadcrumbProps) => {
  return (
    <div className="flex items-center justify-center text-gray-500 text-sm">
      <div>1. Create Account</div>
      {selectedPanel === PANELS.GITHUB && (
        <>
          <svg
            className="fill-current w-3 h-3 mx-3 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7.03 14.91a.75.75 0 001.06 0l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06L11.44 9l-4.41 4.44a.75.75 0 000 1.06z" />
          </svg>
          <div className="text-sm">2. Attach Github</div>
        </>
      )}
    </div>
  );
};

export default function SignUpPage() {
  const [selectedPanel, setSelectedPanel] = useState(PANELS.MAIN);
  const [signupFormFields, setSignupFormFields] = useState<FormValues>({
    username: '',
    email: '',
    walletAddress: '',
    tosAccepted: false
  });

  return (
    <main className="p-4 md:p-10 flex justify-center">
      <Card className="py-3 px-8 max-w-[880px] h-screen max-h-[600px] overflow-y-scroll flex flex-col">
        {selectedPanel === PANELS.MAIN && (
          <SignupForm
            setSelectedPanel={setSelectedPanel}
            signupFormFields={signupFormFields}
            setSignupFormFields={setSignupFormFields}
          />
        )}
        {selectedPanel === PANELS.GITHUB && (
          <GithubPanel setSelectedPanel={setSelectedPanel} signupFormFields={signupFormFields} />
        )}
        <Breadcrumb selectedPanel={selectedPanel} />
      </Card>
    </main>
  );
}
