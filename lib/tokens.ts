import { getVerificationTokenByEmail } from "@/data/verification-token";
import { v4 as uuidv4 } from "uuid";
import { db } from "./db";

export const generateVerificationToken = async (email: string) => {
  const token = uuidv4();
  const expires = new Date(new Date().getTime() + 3600 * 1000); // expire token in 1 hr - number of miliseconds

  // CHECK IF THIS TOKEN ALREADY EXISTS
  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    await db.verificationToken.delete({
      //@ts-expect-error
      where: {
        id: existingToken.id,
      },
    });
  }

  //   PUSH NEW TOKEN TO DB
  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
