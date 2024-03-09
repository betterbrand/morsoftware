/**
 * This file is a temporary monolith file to store all data fetching logic throughout the application.
 * 
 * We can split this up later once we have a better understanding of the data fetching requirements.
 */

export function fetchLeaderboard() {
  // TODO: Replace with smart contract call/database query.
  const leaderboardData = {
    last24Hours: [
      { developerId: 'shGWpCx94m4QruWFSreh3KHnjdllBusX', developerAvatarUrl: 'https://example.com/avatar1.png', weights: 200, rank: 1 },
      { developerId: 'XYmf6R29LTQtuCY6fbfRx1HnGaZRvSi4', developerAvatarUrl: 'https://example.com/avatar2.png', weights: 190, rank: 2 },
      { developerId: 'lLHFfThXAstkLFtQfiXE8ldupXOO6P80', developerAvatarUrl: 'https://example.com/avatar3.png', weights: 180, rank: 3 },
      { developerId: '3hJ4kTWk4mIq1E2hPYIi6QhZXHgp3cnr', developerAvatarUrl: 'https://example.com/avatar4.png', weights: 170, rank: 4 },
      { developerId: 'kYNoSfPDXoU8kP005zxqXAA3Zn6gaEou', developerAvatarUrl: 'https://example.com/avatar5.png', weights: 160, rank: 5 },
      { developerId: 'AcmP0ZOHcmhTmIAQnUKmBXLgrqRLt63C', developerAvatarUrl: 'https://example.com/avatar6.png', weights: 150, rank: 6 },
      { developerId: 'ONlGIGiGAxBSnQ7lHNXyCs6GkxcdxsAe', developerAvatarUrl: 'https://example.com/avatar7.png', weights: 140, rank: 7 },
      { developerId: '8XyRdx5bmraqr2tSTH1RJReAmv75Kjs8', developerAvatarUrl: 'https://example.com/avatar8.png', weights: 130, rank: 8 },
      { developerId: 'RZtv7AW7lpJfPObIBsdlQBy4HFbxBIGS', developerAvatarUrl: 'https://example.com/avatar9.png', weights: 120, rank: 9 },
      { developerId: 'yejemqMAtKC3OIVieIrYHqzbHk4vnY4m', developerAvatarUrl: 'https://example.com/avatar10.png', weights: 110, rank: 10 },
      { developerId: 'TtjjtDzLTNHeNfz0dJ7nUNEKkOcnHQg6', developerAvatarUrl: 'https://example.com/avatar11.png', weights: 100, rank: 11 },
      { developerId: 'xSFFghvF7hWR3OAKDkzWZDoZSOmj6d1E', developerAvatarUrl: 'https://example.com/avatar12.png', weights: 90, rank: 12 },
      { developerId: '4rqANVS9p4j151I86gijnIcIceXuLFK2', developerAvatarUrl: 'https://example.com/avatar13.png', weights: 80, rank: 13 },
      { developerId: 'Kootth2UGHzlDOxIbHUQp3bzAME82CLn', developerAvatarUrl: 'https://example.com/avatar14.png', weights: 70, rank: 14 },
      { developerId: 'zcwN9H0LxallnTDQTYScEf53qN8NseSU', developerAvatarUrl: 'https://example.com/avatar15.png', weights: 60, rank: 15 },
      { developerId: 'sliPyHIXN3bsQsbQplSKISrmEzRz8vzi', developerAvatarUrl: 'https://example.com/avatar16.png', weights: 50, rank: 16 },
      { developerId: 'YvS3hPDPxeh6BOgdGuvdvdA9ySVcvSjZ', developerAvatarUrl: 'https://example.com/avatar17.png', weights: 40, rank: 17 },
      { developerId: '3AS0ehWHyZP4pkeahnq2ZCOTsoCpPksH', developerAvatarUrl: 'https://example.com/avatar18.png', weights: 30, rank: 18 },
      { developerId: '1yfLYWohS2UpeT09dVFrMy8Hq43FZ8iX', developerAvatarUrl: 'https://example.com/avatar19.png', weights: 20, rank: 19 },
      { developerId: '7s2Jm8ivc6WSE6GOb7Na7k56tFxpZNJT', developerAvatarUrl: 'https://example.com/avatar20.png', weights: 10, rank: 20 },
    ],
    allTime: [
      { developerId: 'shGWpCx94m4QruWFSreh3KHnjdllBusX', developerAvatarUrl: 'https://example.com/avatar1.png', weights: 2000, rank: 1 },
      { developerId: 'XYmf6R29LTQtuCY6fbfRx1HnGaZRvSi4', developerAvatarUrl: 'https://example.com/avatar2.png', weights: 1900, rank: 2 },
      { developerId: 'lLHFfThXAstkLFtQfiXE8ldupXOO6P80', developerAvatarUrl: 'https://example.com/avatar3.png', weights: 1800, rank: 3 },
      { developerId: '3hJ4kTWk4mIq1E2hPYIi6QhZXHgp3cnr', developerAvatarUrl: 'https://example.com/avatar4.png', weights: 1700, rank: 4 },
      { developerId: 'kYNoSfPDXoU8kP005zxqXAA3Zn6gaEou', developerAvatarUrl: 'https://example.com/avatar5.png', weights: 1600, rank: 5 },
      { developerId: 'AcmP0ZOHcmhTmIAQnUKmBXLgrqRLt63C', developerAvatarUrl: 'https://example.com/avatar6.png', weights: 1500, rank: 6 },
      { developerId: 'ONlGIGiGAxBSnQ7lHNXyCs6GkxcdxsAe', developerAvatarUrl: 'https://example.com/avatar7.png', weights: 1400, rank: 7 },
      { developerId: '8XyRdx5bmraqr2tSTH1RJReAmv75Kjs8', developerAvatarUrl: 'https://example.com/avatar8.png', weights: 1300, rank: 8 },
      { developerId: 'RZtv7AW7lpJfPObIBsdlQBy4HFbxBIGS', developerAvatarUrl: 'https://example.com/avatar9.png', weights: 1200, rank: 9 },
      { developerId: 'yejemqMAtKC3OIVieIrYHqzbHk4vnY4m', developerAvatarUrl: 'https://example.com/avatar10.png', weights: 1100, rank: 10 },
      { developerId: 'TtjjtDzLTNHeNfz0dJ7nUNEKkOcnHQg6', developerAvatarUrl: 'https://example.com/avatar11.png', weights: 1000, rank: 11 },
      { developerId: 'xSFFghvF7hWR3OAKDkzWZDoZSOmj6d1E', developerAvatarUrl: 'https://example.com/avatar12.png', weights: 900, rank: 12 },
      { developerId: '4rqANVS9p4j151I86gijnIcIceXuLFK2', developerAvatarUrl: 'https://example.com/avatar13.png', weights: 800, rank: 13 },
      { developerId: 'Kootth2UGHzlDOxIbHUQp3bzAME82CLn', developerAvatarUrl: 'https://example.com/avatar14.png', weights: 700, rank: 14 },
      { developerId: 'zcwN9H0LxallnTDQTYScEf53qN8NseSU', developerAvatarUrl: 'https://example.com/avatar15.png', weights: 600, rank: 15 },
      { developerId: 'sliPyHIXN3bsQsbQplSKISrmEzRz8vzi', developerAvatarUrl: 'https://example.com/avatar16.png', weights: 500, rank: 16 },
      { developerId: 'YvS3hPDPxeh6BOgdGuvdvdA9ySVcvSjZ', developerAvatarUrl: 'https://example.com/avatar17.png', weights: 400, rank: 17 },
      { developerId: '3AS0ehWHyZP4pkeahnq2ZCOTsoCpPksH', developerAvatarUrl: 'https://example.com/avatar18.png', weights: 300, rank: 18 },
      { developerId: '1yfLYWohS2UpeT09dVFrMy8Hq43FZ8iX', developerAvatarUrl: 'https://example.com/avatar19.png', weights: 200, rank: 19 },
      { developerId: '7s2Jm8ivc6WSE6GOb7Na7k56tFxpZNJT', developerAvatarUrl: 'https://example.com/avatar20.png', weights: 100, rank: 20 },
    ]
  }

  return leaderboardData;
}