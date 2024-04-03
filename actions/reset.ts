"use server";

import { ResetSchema } from "@/schemas";
import { getUserByEmail } from "@/data/users";
import * as z from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid email" };
  }

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "User does not exist!" };
  }

  // TODO : Generate token and send reset email

  return { success: "Reset email sent!" };
};
