/*
  Warnings:

  - Added the required column `type` to the `LeaveStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LeaveStatus" ADD COLUMN     "type" TEXT NOT NULL;
