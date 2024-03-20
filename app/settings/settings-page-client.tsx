'use client';

import { useState } from 'react';
import { UserCircleIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Card } from '@tremor/react';
import PasswordPanel from './components/PasswordPanel';
import { PANELS } from './constants';
import EmailPanel from './components/EmailPanel';
import SectionHeader from './components/SectionHeader';
import SubsectionHeader from './components/SubsectionHeader';
import AddButton from './components/AddButton';

type MainPanelProps = {
  setSelectedPanel: (panel: string) => void;
  userData: {
    developerId: string;
    email: string | null;
    // Add other user data fields as needed
  };
};

const MainPanel = ({ setSelectedPanel, userData }: MainPanelProps) => {
  const [developerId, setDeveloperId] = useState(userData.developerId);
  const [email, setEmail] = useState(userData.email || '');

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        header="Account"
        subheader="Manage your account information"
      />

      <div>
        <SubsectionHeader header="Developer ID" />
        <div className="flex items-center">
          <UserCircleIcon className="block h-10 w-10 mr-4" aria-hidden="true" />
          <div>{developerId}</div>
        </div>
      </div>
      <div>
        <SubsectionHeader header="Email Address" />
        <AddButton
          text="Set Email Address"
          onClick={() => setSelectedPanel(PANELS.EMAIL)}
        />
      </div>

      {/* <div>
        <SubsectionHeader header="Github" />
        <AddButton text="Connect Github" onClick={() => {}} />
      </div> */}

      <div>
        <SubsectionHeader header="Weight Count" />
        <div>
          <div>Coming Soon</div>
        </div>
      </div>
      <SectionHeader
        header="Security"
        subheader="Manage your security preferences"
      />

      {/* <div>
        <SubsectionHeader header="Password" />
        <AddButton
          text="Set Password"
          onClick={() => setSelectedPanel(PANELS.PASSWORD)}
        />
      </div> */}
    </div>
  );
};

export default function SettingsPageClient({ userData }: { userData: MainPanelProps['userData'] }) {
  const [selectedPanel, setSelectedPanel] = useState(PANELS.MAIN);

  if (!userData) {
    console.error('User data not found in settings page');
    return null;
  }

  return (
    <main className="p-4 md:p-10 flex justify-center">
      <Card className="py-3 px-8 max-w-[880px] h-screen max-h-[600px] overflow-y-scroll bg-slate-900">
        {selectedPanel === PANELS.MAIN && (
          <MainPanel setSelectedPanel={setSelectedPanel} userData={userData} />
        )}
        {selectedPanel === PANELS.PASSWORD && (
          <PasswordPanel setSelectedPanel={setSelectedPanel} />
        )}
        {selectedPanel === PANELS.EMAIL && (
          <EmailPanel setSelectedPanel={setSelectedPanel} />
        )}
      </Card>
    </main>
  );
}