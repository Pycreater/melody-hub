import { PrismaClient } from "@prisma/client";

class PrismaSington {
  private static instance: PrismaClient;

  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!PrismaSington.instance) {
      PrismaSington.instance = new PrismaClient();
    }
    return PrismaSington.instance;
  }
}
export const prismaClient = PrismaSington.getInstance();
