'use client';

import { useState } from 'react';

import MDEditor from '@uiw/react-md-editor';

const MrcIdPageClient = () => {
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

  // const [title, setTitle] = useState<string>('');

  return (
    <div className="max-w-[1000px] w-full overflow-y-scroll">
      <div className="text-3xl font-semibold mb-4">MRC title</div>

      <MDEditor.Markdown
        source={editorValue}
        style={{
          whiteSpace: 'pre-wrap',
          backgroundColor: 'rgb(243, 244, 246)'
        }}
      />
    </div>
  );
};

export default MrcIdPageClient;
