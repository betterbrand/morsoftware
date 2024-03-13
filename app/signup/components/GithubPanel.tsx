import { PANELS } from '../constants';
import GithubCatLogoWhite from '../../public/images/github-cat-logo-white.svg';
import Image from 'next/image';

type EmailPanelProps = { setSelectedPanel: (panel: string) => void };

const GithubPanel = ({ setSelectedPanel }: EmailPanelProps) => {
  return (
    <div className="flex flex-col  w-full h-full">
      <div className="text-xl font-semibold">Connect your Github account</div>
      <div className="grow flex justify-center items-center">
        <button
          onClick={() => setSelectedPanel(PANELS.MAIN)}
          type="submit"
          className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Image
            src={GithubCatLogoWhite}
            alt="Github logo"
            height={32}
            style={{ marginRight: 8 }}
          />
          Connect your Github account
        </button>
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => setSelectedPanel(PANELS.MAIN)}
          type="button"
          className="mr-2 mb-2 inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default GithubPanel;
