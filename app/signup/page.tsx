'use client';

import { useState } from 'react';

import { classNames } from '../helpers';
import { Card } from '@tremor/react';
import { PANELS } from './constants';
import SectionHeader from './components/SectionHeader';
import SubsectionHeader from './components/SubsectionHeader';
import SignupForm from './components/SignupForm';
import GithubPanel from './components/GithubPanel';

export default function SettingsPage() {
  const [selectedPanel, setSelectedPanel] = useState(PANELS.MAIN);

  return (
    <main className="p-4 md:p-10 flex justify-center">
      {/* <div className="max-w-[880px] max-h-[660px] mx-auto"> */}
      <Card className="py-3 px-8 max-w-[880px] h-screen max-h-[600px] overflow-y-scroll">
        {selectedPanel === PANELS.MAIN && (
          <SignupForm setSelectedPanel={setSelectedPanel} />
        )}
        {selectedPanel === PANELS.GITHUB && (
          <GithubPanel setSelectedPanel={setSelectedPanel} />
        )}
      </Card>
      {/* </div> */}
    </main>
  );
}
