'use server';

import { updateUserEmail } from '../lib/db/users';

export async function updateEmail(userId: number, email: string) {
  try {
    const updatedUser = await updateUserEmail(userId, email);
    return { success: true, user: updatedUser };
  } catch (error) {
    console.error('Failed to update email:', error);
    return { success: false, error: 'Failed to update email' };
  }
}