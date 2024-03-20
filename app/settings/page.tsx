import { auth } from '../auth';
import { getUserByGithubID } from '../lib/db/users';
import SettingsPageClient from './settings-page-client';

export async function getServerSideProps(context: any) {
  const session = await auth(context);

  if (!session || !session?.user) {
    console.error('User not found in settings page');
    return {
      notFound: true, // or redirect to an appropriate page
    };
  }

  const user = await getUserByGithubID((session.user as any).githubId);

  if (!user) {
    console.error('User not found in settings page');
    return {
      notFound: true, // or redirect to an appropriate page
    };
  }

  return {
    props: {
      userData: {
        developerId: user.developerId,
        email: user.email,
        // Add other user data fields as needed
      },
    },
  };
}

export default function SettingsPage( {userData} ) {
  return <SettingsPageClient userData={userData} />;
}