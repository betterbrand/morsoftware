'use client';

import { useState } from 'react';

import MDEditor from '@uiw/react-md-editor';
import { classNames } from '../../helpers';
import MrcTable from './components/MrcTable';

type TableEntry = {
  number: number;
  title: string;
  author: string;
};

const tableData: TableEntry[] = [
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  },
  {
    number: 2,
    title: 'Homestead Hard-fork Changes',
    author: 'Vitalik Buterin (@vbuterin)'
  }

  // ... add other rows here
];

const MrcAllPageClient = () => {
  return (
    <div className="max-w-[1000px] w-3/4 overflow-y-scroll">
      <div className="text-3xl font-semibold mb-8">All Proposals</div>

      <div className="container mx-auto">
        <MrcTable tableData={tableData} />
      </div>
    </div>
  );
};

export default MrcAllPageClient;
