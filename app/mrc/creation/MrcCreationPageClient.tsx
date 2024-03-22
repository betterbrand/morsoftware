'use client';

import { useState } from 'react';

import MDEditor from '@uiw/react-md-editor';

type MainPanelProps = {
  setSelectedPanel: (panel: string) => void;
  userData: {
    id: number;
    developerId: string;
    githubId: string;
    email: string | null;
  };
};

const MrcCreationPageClient = () => {
  const [editorValue, setEditorValue] = useState<
    string | undefined
  >(`# Proposal Title

  **Authors** John Doe <<JohnDoe@gmail.com>>
  
  **Created** 2024-04-04
  
  **Category**  (Design | Implementation | Testing | Others)
  
  ## Problem
  
  ## Problem
  
  `);

  // const handleEmailUpdate = async (formData: FormData) => {
  //   const email = formData.get('new-email') as string;
  //   const result = await updateEmail(userData.id, email);
  //   if (result.success) {
  //     setUserDataState({ ...userDataState, email });
  //     setSelectedPanel(PANELS.MAIN);
  //   } else {
  //     console.error('Failed to update email:', result.error);
  //   }
  // };

  return (
    <div className="max-w-[1000px] overflow-y-scroll">
      <div className="text-3xl font-semibold mb-8">
        Create your own Mrc proposal
      </div>

      <div>
        Use the editor below to write you WCS proposal. Please use the provided
        template in the editor to structure your proposal
      </div>
      <div>
        To view editor syntax rules, click{' '}
        <a
          className="underline text-blue-400"
          href="https://www.markdownguide.org/basic-syntax/"
          target="_blank"
        >
          here
        </a>
        .
      </div>
      <MDEditor
        value={editorValue}
        onChange={(value) => setEditorValue(value)}
        height={500}
      />

      <button
        type="submit"
        className={
          'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700 mt-4'
        }
      >
        Submit
      </button>
    </div>
  );
};

export default MrcCreationPageClient;
