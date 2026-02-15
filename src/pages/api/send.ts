import type { APIRoute } from "astro";
import { Resend } from "resend";
import GithubAccessTokenEmail from "~/emails/contactEmail";
import {render} from "@react-email/render";

const resend = new Resend(import.meta.env.RESEND_API_KEY_CONTACTFORM);
export const GET: APIRoute = async () => {
    //create the email content here, you can use the contactEmail component or create a new one for this specific email
    const contentEmail = GithubAccessTokenEmail({ username: "Allan" });
    const html = await render(contentEmail);
    const text = await render(contentEmail, { plainText: true });

    //Send email logic here
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['delivered@resend.dev'],
        subject: 'New contact form submission',
        html,
        text,
    });

    if (error) {
    return console.error({ error });
  }


    return new Response(JSON.stringify({ data }));
};