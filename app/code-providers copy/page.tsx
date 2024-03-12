'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { classNames } from '../helpers';
import { fetchLeaderboard } from '../lib/data';

const TABS = {
  TOP_20: 'Top 20',
  ALL_TIME: 'All Time'
};

type LeaderBoardListRowProps = {
  developerId: string;
  weights: number;
  rank: number;
};

const LeaderBoardListRow = ({
  developerId,
  rank,
  weights: weights
}: LeaderBoardListRowProps) => {
  return (
    <div className="flex justify-between items-center mb-4 text-gray-500 text-base">
      <div className="flex items-center">
        <div className=" w-6 mr-4">{`${rank}.`}</div>
        <UserCircleIcon className="block h-10 w-10 mr-4" aria-hidden="true" />
        <div>{developerId}</div>
      </div>
      <div>{`${weights} weights`}</div>
    </div>
  );
};

export default function CodeProvidersPage() {
  const [selectedTab, setSelectedTab] = useState(TABS.TOP_20);
  const leaderboardData = fetchLeaderboard();

  return (
    <main className={classNames('p-4 md:p-10 w-full grow overflow-y-scroll')}>
      <div className='max-w-[600px] mx-auto'>
        <div className="flex justify-center mb-4 text-gray-500">
          Code Provider Earnings Estimate Calculator
        </div>
        <Link href="/code-providers/calculator">
          <button
            type="button"
            className="mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Calculator
          </button>
        </Link>
      </div>
      <hr className="my-10" />
      <div className="max-w-[600px] mx-auto">
        <div className="flex justify-center mb-4" role="group">
          <div
            onClick={() => setSelectedTab(TABS.TOP_20)}
            className={classNames(
              'px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 cursor-pointer',
              selectedTab === TABS.TOP_20
                ? 'z-10 ring-2 ring-blue-500 text-blue-600'
                : ''
            )}
          >
            {TABS.TOP_20}
          </div>

          <div
            onClick={() => setSelectedTab(TABS.ALL_TIME)}
            className={classNames(
              'px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-r-lg border border-gray-200 hover:bg-gray-100 cursor-pointer',
              selectedTab === TABS.ALL_TIME
                ? 'z-10 ring-2 ring-blue-500 text-blue-600'
                : ''
            )}
          >
            {TABS.ALL_TIME}
          </div>
        </div>
        <div
          className="flex justify-center
         mb-4 text-gray-500"
        >
          ~ Leader Board ~
        </div>
        {selectedTab === TABS.TOP_20 &&
          leaderboardData.last24Hours.map(({ developerId, weights, rank }) => (
            <LeaderBoardListRow
              developerId={developerId}
              weights={weights}
              rank={rank}
              key={`top-25-${developerId}`}
            />
          ))}
        {selectedTab === TABS.ALL_TIME &&
          leaderboardData.allTime.map(({ developerId, weights, rank }) => (
            <LeaderBoardListRow
              developerId={developerId}
              weights={weights}
              rank={rank}
              key={`all-time-${developerId}`}
            />
          ))}
      </div>
    </main>
  );
}
