import { db } from "@/lib/db";

export const fetchDomains = async () => {
  try {
    const domains = await db.domain.findMany();
    return domains;
  } catch (error) {
    console.error(error);
    return null;
  }
};
