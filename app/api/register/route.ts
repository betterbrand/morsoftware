import { PrismaClient } from '@prisma/client';
import { auth } from '../../auth';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

/**
 * Registers a new user on signup
 * 
 * @param request request json with fields username, email, walletAddress, and githubId
 * @returns 
 */
export async function POST(request: Request) {
  console.log('POST /api/register');
  const session = await auth();
  const data = await request.json();
  console.log('data:', data);

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await prisma.user.upsert({
      where: { email: data.email as string },
      update: { 
        username: data.username as string, 
        walletAddress: data.walletAddress as string,
        githubId: data.githubId as string
      },
      create: { 
        username: data.username as string, 
        email: data.email as string, 
        walletAddress: data.walletAddress as string, 
        developerId: 'test-id', 
        githubId: data.githubId as string
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}