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
import { updateEmail } from './actions';

type MainPanelProps = {
  setSelectedPanel: (panel: string) => void;
  userData: {
    id: number;
    developerId: string;
    githubId: string;
    email: string | null;
  };
};

const MainPanel = ({ userData, setSelectedPanel }: MainPanelProps) => {
  const { developerId, githubId, email } = userData;

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader header="Account" subheader="Manage your account information" />
      <div>
        <SubsectionHeader header="Developer ID" />
        <div className="flex items-center break-all">
          <UserCircleIcon className="hidden sm:block h-10 w-10 mr-4" aria-hidden="true" />
          <div>{developerId}</div>
        </div>
      </div>
      <div>
        <SubsectionHeader header="Github ID" />
        <div className="flex items-center">
          <div>{githubId}</div>
        </div>
      </div>
      <div>
        <SubsectionHeader header="Email Address" />
        {email ? <div>{email}</div> : null}
        <div className="h-1" />
        <AddButton
          text={email ? 'Change Email Address' : 'Set Email Address'}
          onClick={() => {
            setSelectedPanel(PANELS.EMAIL);
          }}
        />
      </div>
      <div>
        <SubsectionHeader header="Weight Count" />
        <div>
          <div>Coming Soon</div>
        </div>
      </div>
    </div>
  );
};

const SettingsPageClient = ({ userData }: { userData: any }) => {
  const [selectedPanel, setSelectedPanel] = useState(PANELS.MAIN);
  const [userDataState, setUserDataState] = useState(userData);

  const handleEmailUpdate = async (formData: FormData) => {
    const email = formData.get('new-email') as string;
    const result = await updateEmail(userData.id, email);
    if (result.success) {
      setUserDataState({ ...userDataState, email });
      setSelectedPanel(PANELS.MAIN);
    } else {
      console.error('Failed to update email:', result.error);
    }
  };

  return (
    <Card className="py-6 px-8 max-w-[880px] bg-white shadow-md rounded-lg">
      {selectedPanel === PANELS.MAIN && (
        <MainPanel
          setSelectedPanel={setSelectedPanel}
          userData={userDataState}
        />
      )}
      {selectedPanel === PANELS.PASSWORD && (
        <PasswordPanel setSelectedPanel={setSelectedPanel} />
      )}
      {selectedPanel === PANELS.EMAIL && (
        <EmailPanel
          setSelectedPanel={setSelectedPanel}
          onSubmit={handleEmailUpdate}
          email={userDataState.email}
        />
      )}
    </Card>
  );
};

export default SettingsPageClient;
