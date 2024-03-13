/*
  Warnings:

  - A unique constraint covering the columns `[developerId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_developerId_key" ON "User"("developerId");
