import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { NextRequest, NextResponse } from 'next/server';
import { Session } from 'next-auth';
import { createUserIfNotExists } from './lib/db/users';

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      if (account?.provider === 'github' && profile?.login) {
        await createUserIfNotExists(profile?.login?.toString());
      }
      return true;
    },
  }
});

export function withAuth(handler: (req: NextRequest, session: Session) => Promise<NextResponse>) {
  return async function (request: NextRequest) {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return handler(request, session);
  };
}