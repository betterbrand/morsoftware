import SectionHeader from './SectionHeader';
import { PANELS } from '../constants';

type EmailPanelProps = { setSelectedPanel: (panel: string) => void };

const GithubPanel = ({ setSelectedPanel }: EmailPanelProps) => {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeader header="Connect your Github account" subheader="" />

      <div className="mb-4">
        <button
          onClick={() => setSelectedPanel(PANELS.MAIN)}
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Connect your Github account
        </button>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setSelectedPanel(PANELS.MAIN)}
          type="button"
          className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Go Back
        </button>
        {/* <button
          onClick={() => setSelectedPanel(PANELS.MAIN)}
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Continue
        </button> */}
      </div>
    </div>
  );
};

export default GithubPanel;
