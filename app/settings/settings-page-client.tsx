'use client';

import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Card } from '@tremor/react';
import PasswordPanel from './components/PasswordPanel';
import { PANELS } from './constants';
import EmailPanel from './components/EmailPanel';
import SectionHeader from './components/SectionHeader';
import SubsectionHeader from './components/SubsectionHeader';
import AddButton from './components/AddButton';

type MainPanelProps = {
  userData: {
    developerId: string;
    email: string | null;
    // Add other user data fields as needed
  };
};

const MainPanel = ({ userData }: MainPanelProps) => {
  const { developerId, email } = userData;

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
          onClick={() => {}}
        />
      </div>
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
    </div>
  );
};

const SettingsPageClient = ({ userData }: { userData: any }) => {
  const [selectedPanel, setSelectedPanel] = useState(PANELS.MAIN);

  return (
    <Card className="py-3 px-8 max-w-[880px] h-screen max-h-[600px] overflow-y-scroll bg-slate-900">
      <MainPanel userData={userData} />
      {selectedPanel === PANELS.EMAIL && (
        <EmailPanel setSelectedPanel={setSelectedPanel} />
      )}
    </Card>
  );
};

export default SettingsPageClient;