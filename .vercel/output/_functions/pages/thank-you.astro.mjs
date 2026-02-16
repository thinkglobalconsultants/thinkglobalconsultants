import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CKxZlpWI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DzbN6Nx7.mjs';
import { $ as $$Section } from '../chunks/Section_DLfXGFNB.mjs';
import { $ as $$Button } from '../chunks/Button_DPrB1AoI.mjs';
export { renderers } from '../renderers.mjs';

const $$ThankYou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Thank you", "pageTitle": "Thank you", "description": "Your message has been sent. We appreciate your feedback and will get back to you soon." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Section", $$Section, { "class:list": "mx-auto justify-center container py-10 lg:py-10", "contain": false }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section class="min-h-full mx-auto w-full max-w-6xl"> <article class="text-center"> <h1 class="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">Thank You
</h1><h3 class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Your message has been sent.</h3> <p class="mt-8 text-lg font-medium text-pretty text-gray-900 lg:text-gray-700 sm:text-2xl/8">We appreciate your feedback and will get back to you soon.</p> <div class="mt-16 mb-20"> ${renderComponent($$result3, "Button", $$Button, { "link": "/contact", "class": "button button-green" }, { "default": ($$result4) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4 inline-block -mt-0.5 mr-1"> <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd"></path> </svg>
Go back
` })} </div> </article> </section> ` })} ` })}`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/thank-you.astro", void 0);

const $$file = "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/thank-you.astro";
const $$url = "/thank-you";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ThankYou,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
