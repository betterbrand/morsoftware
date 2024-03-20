import SectionHeader from './SectionHeader';
import { PANELS } from '../constants';

type PasswordPanelProps = { setSelectedPanel: (panel: string) => void };

const PasswordPanel = ({ setSelectedPanel }: PasswordPanelProps) => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        header="Set Password"
        subheader="Set your new password to keep your account secure"
      />
      <div>
        <div className="mb-4">
          <label
            htmlFor="new-password"
            className="block text-sm font-medium text-gray-700"
          >
            New password
          </label>
          <input
            id="new-password"
            name="new-password"
            type="password"
            required
            className="mt-1 px-3 py-2 border shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm rounded-md"
            placeholder="Enter new password"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm password
          </label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            required
            className="mt-1 px-3 py-2 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm rounded-md"
            placeholder="Confirm your password"
          />
        </div>
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
          onClick={() => setSelectedPanel(PANELS.MAIN)}
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PasswordPanel;
