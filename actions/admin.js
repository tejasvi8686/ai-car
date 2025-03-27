"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function getAdmin() {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
  
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
    });
  
    // If user not found in our db or not an admin, return not authorized
    if (!user || user.role !== "ADMIN") {
      return { authorized: false, reason: "not-admin" };
    }
  
    return { authorized: true, user };
  }
