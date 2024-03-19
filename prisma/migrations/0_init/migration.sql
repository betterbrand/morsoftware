-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "developerId" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT,
    "walletAddress" TEXT,
    "githubId" TEXT NOT NULL,
    "avatarImgUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_developerId_key" ON "User"("developerId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_githubId_key" ON "User"("githubId");

