import { PrismaClient } from '@prisma/client';
import { withAuth } from '../../auth';
import { NextRequest, NextResponse } from 'next/server';
import { Session } from 'next-auth';

const prisma = new PrismaClient();

/**
 * Registers a new user with a new developer id or signs them in if they already exist
 * 
 * @param request request json with fields username, email, walletAddress, and githubId
 * @returns 
 */
export const PUT = withAuth(async (request: NextRequest, session: Session) => {
  const data = await request.json();

  try {
    const user = await prisma.user.create({
      data: {
        developerId: 'testdeveloperid', // TODO: Generate this with a lib function
        username: data.username,
        email: data.email,
        walletAddress: data.walletAddress,
        githubId: data.githubId,
      }});

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
});
