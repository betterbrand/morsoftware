import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { PANELS } from '../constants';
import { classNames } from '../../helpers';

type EmailPanelProps = {
  setSelectedPanel: (panel: string) => void;
  onSubmit: (formData: FormData) => void;
  email: string | null;
};

const EmailPanel = ({ setSelectedPanel, onSubmit, email }: EmailPanelProps) => {
  const [emailInputVal, setEmailInputVal] = useState(email || '');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        header={email ? 'Change Email Address' : 'Add Email Address'}
        subheader={
          email
            ? 'Change your email address to keep your account secure and up to date'
            : 'Add your email address to keep your account secure and up to date'
        }
      />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="new-email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            value={emailInputVal}
            onChange={(e) => setEmailInputVal(e.target.value)}
            id="new-email"
            name="new-email"
            type="email"
            required
            className="mt-1 px-3 py-2 border shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm rounded-md text-gray-700"
            placeholder="Enter new email"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setSelectedPanel(PANELS.MAIN)}
            type="button"
            className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            disabled={emailInputVal === email || emailInputVal === ''}
            type="submit"
            className={classNames(
              'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
              emailInputVal === email || emailInputVal === ''
                ? 'cursor-not-allowed bg-gray-300'
                : 'bg-indigo-600 hover:bg-indigo-700'
            )}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailPanel;
