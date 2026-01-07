import { PrismaClient } from "@/lib/generated/prisma";
import sampleData from "./sample-data";

async function main() {
  //prisma object instatiation
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  await prisma.product.createMany({ data: sampleData.products });
  console.log("Database seeded successfully");
}
main();
