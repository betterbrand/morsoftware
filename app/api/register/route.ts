import { PrismaClient } from '@prisma/client';
import { auth } from '../../auth';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const session = await auth();
  const data = await request.json();

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const user = await prisma.user.create({
      data: {
        developerId: 'testdeveloperid', // TODO: Generate this with a lib function
        name: data.name,
        email: data.email,
        walletAddress: data.walletAddress,
        githubId: data.githubId,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}