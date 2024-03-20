/**
 * This file contains the functions to interact with the database for the users table.
 */
import { Pool, neonConfig } from '@neondatabase/serverless'
import { PrismaClient, User } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon'

neonConfig.webSocketConstructor = WebSocket // TODO: import ws from 'ws' was not working
const connectionString = `${process.env.POSTGRES_PRISMA_URL}`

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)
const prisma = new PrismaClient( { adapter, log: ['query', 'info', 'warn', 'error'] })

/**
 * createUserIfNotExists creates a new user if the user does not exist.
 * 
 * @param githubId 
 * @returns 
 */
export async function createUserIfNotExists(githubId: string): Promise<User> {
  const existingUser = await prisma.user.findUnique({
    where: { githubId },
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

export async function getUserByGithubID(githubId: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: { githubId },
  });
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
