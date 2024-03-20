import SectionHeader from './SectionHeader';
import { PANELS } from '../constants';

type EmailPanelProps = { setSelectedPanel: (panel: string) => void };

const EmailPanel = ({ setSelectedPanel }: EmailPanelProps) => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader
        header="Add Email Address"
        subheader="Add your email address to keep your account secure and up to date"
      />

      <div className="mb-4">
        <label
          htmlFor="new-email"
          className="block text-sm font-medium"
        >
          Email Address
        </label>
        <input
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

export default EmailPanel;
