import { auth } from '../auth';
import { getUserByGithubID } from '../lib/db/users';
import SettingsPageClient from './settings-page-client';

async function fetchUserData() {
  const session = await auth();
  if (!session || !session?.user) {
    console.error('User not found in settings page');
    return null;
  }

  const user = await getUserByGithubID((session.user as any).githubId);
  if (!user) {
    console.error('User not found in settings page');
    return null;
  }

  return {
    developerId: user.developerId,
    email: user.email,
    // Add other user data fields as needed
  };
}

export default async function SettingsPage() {
  const userData = await fetchUserData();
  if (!userData) {
    console.error('User data not found in settings page');
    return null;
  }

  return (
    <main className="p-4 md:p-10 flex justify-center">
      <SettingsPageClient userData={userData} />
    </main>
  );
}