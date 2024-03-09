'use client';

import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { classNames } from '../helpers';

const MOCK_LIST_TOP_25 = [
  { name: 'Object_1', token_count: 1 },
  { name: 'Object_2', token_count: 2 },
  { name: 'Object_3', token_count: 3 },
  { name: 'Object_4', token_count: 4 },
  { name: 'Object_5', token_count: 5 },
  { name: 'Object_6', token_count: 6 },
  { name: 'Object_7', token_count: 7 },
  { name: 'Object_8', token_count: 8 },
  { name: 'Object_9', token_count: 9 },
  { name: 'Object_10', token_count: 10 },
  { name: 'Object_11', token_count: 11 },
  { name: 'Object_12', token_count: 12 },
  { name: 'Object_13', token_count: 13 },
  { name: 'Object_14', token_count: 14 },
  { name: 'Object_15', token_count: 15 },
  { name: 'Object_16', token_count: 16 },
  { name: 'Object_17', token_count: 17 },
  { name: 'Object_18', token_count: 18 },
  { name: 'Object_19', token_count: 19 },
  { name: 'Object_20', token_count: 20 },
  { name: 'Object_21', token_count: 21 },
  { name: 'Object_22', token_count: 22 },
  { name: 'Object_23', token_count: 23 },
  { name: 'Object_24', token_count: 24 },
  { name: 'Object_25', token_count: 25 }
];

const MOCK_LIST_ALL_TIME = [
  { name: 'A', token_count: 1 },
  { name: 'B', token_count: 2 },
  { name: 'C', token_count: 3 },
  { name: 'D', token_count: 4 },
  { name: 'E', token_count: 5 },
  { name: 'F', token_count: 6 },
  { name: 'G', token_count: 7 },
  { name: 'H', token_count: 8 },
  { name: 'I', token_count: 9 },
  { name: 'J', token_count: 10 },
  { name: 'K', token_count: 11 },
  { name: 'L', token_count: 12 },
  { name: 'M', token_count: 13 },
  { name: 'N', token_count: 14 },
  { name: 'O', token_count: 15 },
  { name: 'P', token_count: 16 },
  { name: 'Q', token_count: 17 },
  { name: 'R', token_count: 18 },
  { name: 'S', token_count: 19 },
  { name: 'T', token_count: 20 },
  { name: 'U', token_count: 21 },
  { name: 'V', token_count: 22 },
  { name: 'W', token_count: 23 },
  { name: 'X', token_count: 24 },
  { name: 'Y', token_count: 25 }
];

const TABS = {
  TOP_25: 'Top 25',
  ALL_TIME: 'All Time'
};

type LeaderBoardListRowProps = {
  item: { name: string; token_count: number };
  index: number;
};

const LeaderBoardListRow = ({ item, index }: LeaderBoardListRowProps) => {
  return (
    <div className="flex justify-between items-center mb-4 text-gray-400">
      <div className="flex items-center">
        <div className="text-lg w-6 mr-4">{`${index + 1}.`}</div>
        <UserCircleIcon className="block h-10 w-10 mr-4" aria-hidden="true" />
        <div className="text-xl">{item.name}</div>
      </div>
      <div className="text-lg">{`${item.token_count} tokens`}</div>
    </div>
  );
};

export default function PlaygroundPage() {
  const [selectedTab, setSelectedTab] = useState(TABS.TOP_25);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="max-w-[1080px] mx-auto">
        <div>Account</div>
        <div>Manage your account information</div>
        <div>Profile</div>
        <div className="border-t border-gray-300 h-px"></div>{' '}

        <div>
          <UserCircleIcon className="block h-10 w-10 mr-4" aria-hidden="true" />
          <div>0xaaee1a9723aadb7afa2810263653a34ba2c21c7a</div>
        </div>

        <div>Email address</div>
        <div className="border-t border-gray-300 h-px"></div>{' '}

        <div>
          <UserCircleIcon className="block h-10 w-10 mr-4" aria-hidden="true" />
          <div>0xaaee1a9723aadb7afa2810263653a34ba2c21c7a</div>
        </div>
        <div className="flex justify-center mb-4" role="group">
          <div
            onClick={() => setSelectedTab(TABS.TOP_25)}
            className={classNames(
              'px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 cursor-pointer',
              selectedTab === TABS.TOP_25
                ? 'z-10 ring-2 ring-blue-500 text-blue-600'
                : ''
            )}
          >
            {TABS.TOP_25}
          </div>

          <div
            onClick={() => setSelectedTab(TABS.ALL_TIME)}
            className={classNames(
              'px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100 cursor-pointer',
              selectedTab === TABS.ALL_TIME
                ? 'z-10 ring-2 ring-blue-500 text-blue-600'
                : ''
            )}
          >
            {TABS.ALL_TIME}
          </div>
        </div>
        <div className="flex justify-center text-xl mb-4 text-gray-400">
          ~ Leader Board ~
        </div>
        {selectedTab === TABS.TOP_25 &&
          MOCK_LIST_TOP_25.map((item, index) => (
            <LeaderBoardListRow
              item={item}
              index={index}
              key={`top-25-${item.name}`}
            />
          ))}
        {selectedTab === TABS.ALL_TIME &&
          MOCK_LIST_ALL_TIME.map((item, index) => (
            <LeaderBoardListRow
              item={item}
              index={index}
              key={`all-time-${item.name}`}
            />
          ))}
      </div>
    </main>
  );
}
