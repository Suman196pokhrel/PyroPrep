import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const isDevelopment = process.env.NODE_ENV === "development";
  const baseConfirmLink = isDevelopment
    ? process.env.VERIFY_EMAIL_TOKEN_CONFIRM_LINK_LOCAL
    : process.env.VERIFY_EMAIL_TOKEN_CONFIRM_LINK_PROD;

  const confirmLink = `${baseConfirmLink}?token=${token}`;

  await resend.emails
    .send({
      from: "onboarding@resend.dev",
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
