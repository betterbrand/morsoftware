'use client';

import { useState } from 'react';
import { UserCircleIcon, PlusIcon } from '@heroicons/react/24/outline';
import { classNames } from '../helpers';
import { Card } from '@tremor/react';
import PasswordPanel from './components/PasswordPanel';
import { PANELS } from './constants';
import EmailPanel from './components/EmailPanel';
import SectionHeader from './components/SectionHeader';
import SubsectionHeader from './components/SubsectionHeader';
import AddButton from './components/AddButton';

type MainPanelProps = { setSelectedPanel: (panel: string) => void };

const MainPanel = ({ setSelectedPanel }: MainPanelProps) => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        header="Account"
        subheader="Manage your account information"
      />

      <div>
        <SubsectionHeader header="Profile" />
        <div className="flex items-center">
          <UserCircleIcon className="block h-10 w-10 mr-4" aria-hidden="true" />
          <div>0xaaee1a9723aadb7afa2810263653a34ba2c21c7a</div>
        </div>
      </div>
      <div>
        <SubsectionHeader header="Email Address" />
        <AddButton
          text="Set Email Address"
          onClick={() => setSelectedPanel(PANELS.EMAIL)}
        />
      </div>

      <div>
        <SubsectionHeader header="Github" />
        <AddButton text="Connect Github" onClick={() => {}} />
      </div>

      <div>
        <SubsectionHeader header="Weight Count" />
        <div>
          <div>1000 Weights</div>
        </div>
      </div>
      <SectionHeader
        header="Security"
        subheader="Manage your security preferences"
      />

      <div>
        <SubsectionHeader header="Password" />
        <AddButton
          text="Set Password"
          onClick={() => setSelectedPanel(PANELS.PASSWORD)}
        />
      </div>
    </div>
  );
};

export default function SettingsPage() {
  const [selectedPanel, setSelectedPanel] = useState(PANELS.MAIN);

  return (
    <main className="p-4 md:p-10 max-w-7xl flex justify-center">
      {/* <div className="max-w-[880px] max-h-[660px] mx-auto"> */}
      <Card className="py-3 px-8 max-w-[880px] h-screen max-h-[600px] overflow-y-scroll">
        {selectedPanel === PANELS.MAIN && (
          <MainPanel setSelectedPanel={setSelectedPanel} />
        )}
        {selectedPanel === PANELS.PASSWORD && (
          <PasswordPanel setSelectedPanel={setSelectedPanel} />
        )}
        {selectedPanel === PANELS.EMAIL && (
          <EmailPanel setSelectedPanel={setSelectedPanel} />
        )}
      </Card>
      {/* </div> */}
    </main>
  );
}
