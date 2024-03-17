/**
 * This file contains the functions to interact with the database for the users table.
 */
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * createUserIfNotExists creates a new user if the user does not exist.
 * 
 * @param user 
 * @returns 
 */
export async function createUserIfNotExists(githubId: string): Promise<User> {
  const existingUser = await prisma.user.findUnique({
    where: { githubId: githubId },
  });

  if (!existingUser) {
    const user = {
      githubId,
      developerId: generateDeveloperId(),
    };
    const createdUser = await prisma.user.create({ data: user });
    return createdUser;
  }

  return existingUser;
}

/**
 * generateDeveloperId generates a new random developerId for a user.
 * 
 */
function generateDeveloperId(): string {
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const base64Id = btoa(String.fromCharCode.apply(null, Array.from(bytes)));
  return base64Id;
} 
