import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/new-verification?token=${token}`;

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
