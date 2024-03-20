import { NextRequest, NextResponse } from 'next/server';
import { auth } from './auth';

export default async function middleware(req: NextRequest) {
  console.log('middleware!!!!!!!!!!');
  // redirect if the token is invalid
  const currentPath = req.nextUrl.pathname;

  const session = await auth();

  // if the user is not logged in, redirect to the login page
  if (!session?.user && currentPath !== '/') {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // FIGURE OUT HOW TO MAKE THIS WORK
  // if (session?.user && currentPath === '/') {
  //   console.log();
  //   return NextResponse.redirect(
  //     new URL('/settings', req.url)
  //   );
  // }
}

// needed to fix error https://stackoverflow.com/questions/73229148/uncaught-syntaxerror-expected-expression-got-while-using-next-js-middlewar
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
