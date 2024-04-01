"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // SERVER SIDE VALIDATION
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;

  // HASH PASSWD
  const hashedPassword = await bcrypt.hash(password, 10);

  // FIRST CHECK IF THE EMAIL IS ALREADY TAKEN
  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  // CREATE NEW USER
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: SEND EMAILVERIFICATION TOKEN
  return { success: "New user registeresd!" };
};
