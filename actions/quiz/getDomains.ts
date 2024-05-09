"use server";

import { fetchDomains } from "@/data/domains";
import { db } from "@/lib/db";

export const getDomains = async () => {
  const domains = await fetchDomains();
  if (!domains) {
    return { error: "Error fetching domains!" };
  }

  return { success: "Successfully fetched domains", data: domains };
};
