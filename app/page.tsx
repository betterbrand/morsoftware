import BackgroundVideo from './public/videos/black_background.mp4';
import GithubLoginButton from './components/githubLoginButton';
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
    <main className="p-4 md:p-10 mx-auto max-w-7xl h-[100vh] flex flex-col items-center justify-center">
      <video
        autoPlay
        muted
        loop
        className="absolute z-[-1] w-full h-full object-cover"
      >
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      {/* <Image src={MorLogo} alt="MOR logo" height={200} className="mb-8" /> */}
      <div className="text-5xl font-bold mb-14 uppercase text-white">
        MOR Software
      </div>
      <div className="text-base text-gray-400">
        Become a contributor to the future of open source AI development
      </div>
      <div className="text-base mb-12 text-gray-400 text-center">
        Sign into github to register as a DEVELOPER for the Morpheus AI project
      </div>
      <GithubLoginButton />
    </main>
  );
}
