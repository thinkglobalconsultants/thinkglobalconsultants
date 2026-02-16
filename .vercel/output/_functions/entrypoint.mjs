import { render } from '@react-email/render';
import './chunks/virtual_BidWlM-U.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Html, Head, Body, Container, Img, Text, Section } from '@react-email/components';
import { Resend } from 'resend';
import * as z from 'zod';
import { d as defineAction } from './chunks/server_CyXNqtsd.mjs';

const baseUrl = "http://thinkglobalconsultants.vercel.app";
const GithubAccessTokenEmail = ({
  username,
  organization,
  role,
  email,
  organizationtype,
  message
}) => /* @__PURE__ */ jsxs(Html, { children: [
  /* @__PURE__ */ jsx(Head, {}),
  /* @__PURE__ */ jsx(Body, { style: main, children: /* @__PURE__ */ jsxs(Container, { style: container, children: [
    /* @__PURE__ */ jsx(
      Img,
      {
        src: `${baseUrl}/_image?href=%2F_astro%2FTGC-logo.CWJydGD6.png&w=1408&h=602&f=webp`,
        width: "60",
        height: "32",
        alt: "Think Global Consultants Logo"
      }
    ),
    /* @__PURE__ */ jsxs(Text, { style: title, children: [
      /* @__PURE__ */ jsx("strong", { children: "Think Global Consultants" }),
      /* @__PURE__ */ jsx("p", { children: "This is a message sent from the contact form." })
    ] }),
    /* @__PURE__ */ jsx(Section, { style: section, children: /* @__PURE__ */ jsxs(Text, { style: text, children: [
      /* @__PURE__ */ jsx("strong", { children: "Name: " }),
      " ",
      username,
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("strong", { children: "Organization: " }),
      " ",
      organization,
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("strong", { children: "Role: " }),
      " ",
      role,
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("strong", { children: "Email: " }),
      " ",
      /* @__PURE__ */ jsx("a", { href: `mailto:${email}`, children: email }),
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("strong", { children: "Organization Type: " }),
      " ",
      organizationtype,
      " ",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("strong", { children: "Message: " }),
      " ",
      message
    ] }) }),
    /* @__PURE__ */ jsx(Text, { style: footer, children: /* @__PURE__ */ jsx("a", { href: "http://thinkglobalconsultants.com", children: "Think Global Consultants 2026" }) })
  ] }) })
] });
GithubAccessTokenEmail.PreviewProps = {
  username: "alanturing",
  message: "This is a sample message from the contact form.",
  email: "alanturing@example.com"
};
const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'
};
const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px"
};
const title = {
  fontSize: "24px",
  lineHeight: 1.25
};
const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center"
};
const text = {
  margin: "0 0 10px 0",
  textAlign: "left"
};
const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center",
  marginTop: "60px"
};

const resend = new Resend("re_hCzjKTt5_3q8A3qJaatCH47eVZQCJEYob");
const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      username: z.string(),
      organization: z.string(),
      role: z.string(),
      email: z.string().email(),
      organizationtype: z.string(),
      message: z.string().min(10).max(4e3)
    }),
    handler: async ({ username, organization, role, email, organizationtype, message }) => {
      const contentEmail = GithubAccessTokenEmail({ username, organization, role, email, organizationtype, message });
      const html = await render(contentEmail);
      const text = await render(contentEmail, { plainText: true });
      const { data, error } = await resend.emails.send({
        from: "info@thinkglobalconsultants.com",
        to: ["delivered@resend.dev"],
        subject: "New contact form submission",
        html,
        text
      });
      if (error) {
        throw error;
      }
      return data;
    }
  })
};

export { server };
