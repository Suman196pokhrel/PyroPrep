import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const isDevelopment = process.env.NODE_ENV === "development";
  const baseConfirmLink = isDevelopment
    ? process.env.VERIFY_EMAIL_TOKEN_CONFIRM_LINK_LOCAL
    : process.env.VERIFY_EMAIL_TOKEN_CONFIRM_LINK_PROD;

  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

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
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const isDevelopment = process.env.NODE_ENV === "development";
  const baseConfirmLink = isDevelopment
    ? process.env.VERIFY_EMAIL_TOKEN_CONFIRM_LINK_LOCAL
    : process.env.VERIFY_EMAIL_TOKEN_CONFIRM_LINK_PROD;

  const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

  const confirmLink = `${baseConfirmLink}?token=${token}`;

  await resend.emails
    .send({
      from: fromEmail,
      to: email,
      subject: "Reset you account password",
      html: `
    <p>
    Click on on the <a href="${confirmLink}">Link</a> to create new password for your pyroprep account
    </P>
    `,
    })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
};
