import { Resend } from "resend";
import { MailtrapClient } from "mailtrap";

const isDevelopment = process.env.NODE_ENV === "development";

const fromEmail = isDevelopment
  ? process.env.FROM_EMAIL_LOCAL || "onboarding@resend.dev"
  : process.env.FROM_EMAIL_PROD || "onboarding@resend.dev";

const resend = new Resend(process.env.RESEND_API_KEY);
const MAILTRAP_TOKEN = process.env.MAILTRAP_API_TOKEN || " ";
const MAILTRAP_SENDER_EMAIL = process.env.MAILTRAP_SENDER_EMAIL || "";
const MAILTRAP_ENDPOINT = process.env.MAILTRAP_ENDPOINT;
const MAILTRAP_SENDER = {
  name: "Pyroprep",
  email: MAILTRAP_SENDER_EMAIL,
};
const mailtrapClient = new MailtrapClient({ token: MAILTRAP_TOKEN });

export const sendVerificationEmail = async (email: string, token: string) => {
  const baseConfirmLink = isDevelopment
    ? process.env.VERIFY_EMAIL_TOKEN_CONFIRM_LINK_LOCAL
    : process.env.VERIFY_EMAIL_TOKEN_CONFIRM_LINK_PROD;

  const confirmLink = `${baseConfirmLink}?token=${token}`;

  await resend.emails
    .send({
      from: fromEmail,
      to: email,
      subject: "Confirm your email",
      html: `
    <p>
    Click on on the <a href="${confirmLink}">Link</a> to activate your pyroprep account
    </P>
    `,
    })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

  // await mailtrapClient
  //   .send({
  //     from: MAILTRAP_SENDER,
  //     to: [{ email }],
  //     subject: "Confirm your email",
  //     html: `
  //   <p>
  //   Click on on the <a href="${confirmLink}">Link</a> to activate your pyroprep account
  //   </P>
  //   `,
  //   })
  //   .then((value) => console.log(value))
  //   .catch((error) => console.log(error));
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const baseResetLink = isDevelopment
    ? process.env.PASSWORD_RESET_TOKEN_CONFIRM_LINK_LOCAL
    : process.env.PASSWORD_RESET_TOKEN_CONFIRM_LINK_PROD;

  const resetLink = `${baseResetLink}?token=${token}`;

  await resend.emails
    .send({
      from: fromEmail,
      to: email,
      subject: "Reset you account password",
      html: `
    <p>
    Click on on the <a href="${resetLink}">Link</a> to create new password for your pyroprep account
    </P>
    `,
    })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));

  // await mailtrapClient
  //   .send({
  //     from: MAILTRAP_SENDER,
  //     to: [{ email }],
  //     subject: "Reset you account password",
  //     html: `
  //   <p>
  //   Click on on the <a href="${resetLink}">Link</a> to create new password for your pyroprep account
  //   </P>
  //   `,
  //   })
  //   .then((value) => console.log(value))
  //   .catch((error) => console.log(error));
};
