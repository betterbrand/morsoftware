'use client';

import { useState } from 'react';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { classNames } from '../helpers';
import { fetchLeaderboard } from '../lib/data';

const TABS = {
  TOP_25: 'Top 25',
  ALL_TIME: 'All Time'
};

type LeaderBoardListRowProps = {
  developerId: string;
  weights: number;
  rank: number;
};

const LeaderBoardListRow = ({ developerId, rank, weights: weights }: LeaderBoardListRowProps) => {
  return (
    <div className="flex justify-between items-center mb-4 text-gray-400">
      <div className="flex items-center">
        <div className="text-lg w-6 mr-4">{`${rank}.`}</div>
        <UserCircleIcon className="block h-10 w-10 mr-4" aria-hidden="true" />
        <div className="text-xl">{developerId}</div>
      </div>
      <div className="text-lg">{`${weights} weights`}</div>
    </div>
  );
};

export default function PlaygroundPage() {
  const [selectedTab, setSelectedTab] = useState(TABS.TOP_25);
  const leaderboardData = fetchLeaderboard();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div className="max-w-[600px] mx-auto">
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
        <div className="flex justify-center
         mb-4 text-gray-400">
          ~ Leader Board ~
        </div>
        {selectedTab === TABS.TOP_25 &&
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
  )
};
