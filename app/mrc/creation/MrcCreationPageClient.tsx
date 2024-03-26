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
  >(`**Authors** John Doe <<JohnDoe@gmail.com>>
  
  **Created** 2024-04-04
  
  **Category**  (Design | Implementation | Testing | Others)
  
  ## Problem
  
  ## Solution

### Abstract
### Dev Strategy
### Stack

## End Results

## Value Proposition
## New weights requested
## Existing weights requested
## Time to complete
## Deliverables
  
  `);

  const [title, setTitle] = useState<string>('');

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
    <div className="max-w-[1000px]">
      <div className="text-3xl font-semibold mb-8">
        Create your own MRC proposal
      </div>

      <div className="text-2xl font-semibold mb-2">Title</div>

      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="email"
        required
        className="mt-1 px-3 py-2 border shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm rounded-md text-gray-700 mb-6"
        placeholder="MRC title"
      />

      <div>
        Use the editor to write your MRC proposal. Please use the provided
        template in the editor to structure your proposal.
      </div>
      <div className="mb-2">
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
        commandsFilter={(cmd: any) => {
          // Remove image upload button from toolbar
          if (cmd.name === 'image') {
            return false;
          }
          return cmd;
        }}
      />

      <button
        type="submit"
        className={
          'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700 mt-4 float-right'
        }
      >
        Submit
      </button>
    </div>
  );
};

export default MrcCreationPageClient;
