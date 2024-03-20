import BackgroundVideo from './public/videos/black_background.mp4';
import GithubLoginButton from './components/GithubLoginButton';
import BackgroundImage from './public/images/black-background.jpg';
import { auth } from './auth';
import { redirect } from 'next/navigation';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  // if user is already logged in, redirect to /settings
  const session = await auth();

  if (session?.user) {
    redirect('/settings');
  }

  return (
    <main
      className="p-4 md:p-10 w-[100vw] h-[100vh] flex flex-col items-center justify-center bg-no-repeat bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="text-5xl font-bold mb-14 uppercase text-white text-center">
        MOR Software
      </div>
      <div className="text-base text-gray-400 text-center">
        Become a contributor to the future of open source AI development.
      </div>
      <div className="text-base mb-12 text-gray-400 text-center">
        Sign in to Github to register as a code contributor for the Morpheus AI project.
      </div>
      <GithubLoginButton />
    </main>
  );
}
