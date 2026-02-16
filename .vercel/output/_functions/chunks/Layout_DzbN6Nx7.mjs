import { c as createAstro, a as createComponent, e as addAttribute, g as renderScript, b as renderTemplate, m as maybeRenderHead, r as renderComponent, f as renderSlot, h as renderHead } from './astro/server_CKxZlpWI.mjs';
import 'piccolore';
/* empty css                            */
import 'clsx';
import { $ as $$Image } from './_astro_assets_Dm_TAFwi.mjs';

const $$Astro$2 = createAstro("https://thinkglobalconsultants.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/node_modules/astro/components/ClientRouter.astro", void 0);

const logoImagen = new Proxy({"src":"/_astro/TGC-logo.CWJydGD6.png","width":1408,"height":602,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/assets/logos/TGC-logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://thinkglobalconsultants.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const rmTrailingSlash = (path) => path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  const normalize = (p) => p.endsWith("/") && p !== "/" ? p.slice(0, -1) : p;
  const currentPath = normalize(rmTrailingSlash(Astro2.url.pathname));
  const isActive = (url) => normalize(url) === currentPath;
  const isActivePrefix = (url) => {
    const u = normalize(url);
    return currentPath === u || currentPath.startsWith(u + "/");
  };
  const servicesActive = isActivePrefix("/our-services/prism") || isActivePrefix("/our-services/cq-for-organization");
  const customersActive = isActivePrefix("/our-customers/business-global-organization") || isActivePrefix("/our-customers/international-school") || isActivePrefix("/our-customers/ngos-nonprofit");
  return renderTemplate`${maybeRenderHead()}<header x-data="{ open: false }" @keydown.window.escape="open = false"> <div class="fixed inset-x-0 top-0 z-50 h-24 bg-white shadow-sm"> <nav class="flex items-center justify-between" aria-label="Global"> <!-- LOGO --> <a href="/" class="fixed left-5 top-2 z-60 -m-1.5 flex items-center p-1.5 lg:fixed lg:left-45 lg:top-2 lg:z-60 lg:-m-1.5 lg:flex lg:items-center lg:p-1.5  "> ${renderComponent($$result, "Image", $$Image, { "src": logoImagen, "class": "h-20 w-auto", "alt": "Think Global Consultants Logo" })} </a> <!-- Toggle mobile --> <button class="fixed right-6 top-6 z-60 flex size-10 items-center justify-center lg:hidden" @click="open = !open" aria-label="Toggle menu"> <!-- Hamburger --> <svg x-show="!open" x-transition class="absolute size-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> <!-- X --> <svg x-show="open" x-effect="document.body.classList.toggle('overflow-hidden', open)" x-transition class="absolute size-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- MENÚ DESKTOP --> <div class="absolute inset-x-0 top-0 hidden h-24 items-center justify-center gap-x-12 lg:flex"> <!-- Index --> <a href="/"${addAttribute(`transition font-semibold ${isActive("/") ? "menu-item-active text-brand-green" : "text-gray-700 hover:text-brand-green"}`, "class")}>
Home
</a> <!-- About us --> <a href="/about-us"${addAttribute(`transition font-semibold ${isActive("/about-us") ? "menu-item-active text-brand-green" : "text-gray-700 hover:text-brand-green"}`, "class")}>
About us
</a> <!-- Our Services (dropdown) --> <div class="relative" x-data="{ ddOpen: false }"> <button type="button"${addAttribute(`relative inline-flex items-center gap-2 font-semibold transition ${servicesActive ? "text-brand-green" : "text-gray-700 hover:text-brand-green"}`, "class")} aria-haspopup="true" :aria-expanded="ddOpen.toString()" @click="ddOpen = !ddOpen" @keydown.escape.stop="ddOpen = false" @click.outside="ddOpen = false"> <span>Our Services</span> <svg${addAttribute(`h-4 w-4 transition-transform duration-200 ${servicesActive ? "text-brand-green" : ""}`, "class")} :class="ddOpen ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" clip-rule="evenodd"></path> </svg> <span${addAttribute(`pointer-events-none absolute left-0 -bottom-2 h-0.5 w-full origin-left bg-brand-green transition-transform duration-200 ${servicesActive ? "scale-x-100" : "scale-x-0"}`, "class")} :class="ddOpen ? 'scale-x-100' : ''"></span> </button> <ul x-show="ddOpen" x-transition x-cloak class="absolute left-0 mt-3 w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-sm"> <li> <a href="/our-services/prism"${addAttribute(`block rounded-lg px-3 py-2 text-sm hover:bg-gray-50 ${isActivePrefix("/our-services/prism") ? "font-semibold text-brand-green" : "text-gray-700"}`, "class")} @click="ddOpen = false">
PRISM
</a> </li> <li> <a href="/our-services/cq-for-school"${addAttribute(`block rounded-lg px-3 py-2 text-sm hover:bg-gray-50 ${isActivePrefix("/our-services/cq-for-school") ? "font-semibold text-brand-green" : "text-gray-700"}`, "class")} @click="ddOpen = false">
CQ for School
</a> </li> </ul> </div> <!-- Our Customers (dropdown) --> <div class="relative" x-data="{ ddOpen: false }"> <button type="button"${addAttribute(`relative inline-flex items-center gap-2 font-semibold transition ${customersActive ? "text-brand-green" : "text-gray-700 hover:text-brand-green"}`, "class")} aria-haspopup="true" :aria-expanded="ddOpen.toString()" @click="ddOpen = !ddOpen" @keydown.escape.stop="ddOpen = false" @click.outside="ddOpen = false"> <span>Our Customers</span> <svg${addAttribute(`h-4 w-4 transition-transform duration-200 ${customersActive ? "text-brand-green" : ""}`, "class")} :class="ddOpen ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" clip-rule="evenodd"></path> </svg> <span${addAttribute(`pointer-events-none absolute left-0 -bottom-2 h-0.5 w-full origin-left bg-brand-green transition-transform duration-200 ${customersActive ? "scale-x-100" : "scale-x-0"}`, "class")} :class="ddOpen ? 'scale-x-100' : ''"></span> </button> <ul x-show="ddOpen" x-transition x-cloak class="absolute left-0 mt-3 w-80 rounded-xl border border-gray-200 bg-white p-2 shadow-sm"> <li> <a href="/our-customers/business-global-organization"${addAttribute(`block rounded-lg px-3 py-2 text-sm hover:bg-gray-50 ${isActivePrefix("/our-customers/business-global-organization") ? "font-semibold text-brand-green" : "text-gray-700"}`, "class")} @click="ddOpen = false">
Business/ Global Organization
</a> </li> <li> <a href="/our-customers/international-school"${addAttribute(`block rounded-lg px-3 py-2 text-sm hover:bg-gray-50 ${isActivePrefix("/our-customers/international-school") ? "font-semibold text-brand-green" : "text-gray-700"}`, "class")} @click="ddOpen = false">
International School
</a> </li> <li> <a href="/our-customers/ngos-nonprofit"${addAttribute(`block rounded-lg px-3 py-2 text-sm hover:bg-gray-50 ${isActivePrefix("/our-customers/ngos-nonprofit") ? "font-semibold text-brand-green" : "text-gray-700"}`, "class")} @click="ddOpen = false">
NGOs/ NonProfit
</a> </li> </ul> </div> <!-- Insights --> <a href="/insights"${addAttribute(`transition font-semibold ${isActive("/insights") ? "menu-item-active text-brand-green" : "text-gray-700 hover:text-brand-green"}`, "class")}>
Insights
</a> <!-- Contact --> <a href="/contact"${addAttribute(`transition font-semibold ${isActive("/contact") ? "menu-item-active text-brand-green" : "text-gray-700 hover:text-brand-green"}`, "class")}>
Contact
</a> <!-- Request Consultation (button) --> <a href="/contact#schedule-meeting" class="rounded-full bg-[#014650] px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#014650]" rel="noreferrer">
Request Consultation
</a> </div> </nav> <!-- MENÚ MOBILE --> <div x-show="open" x-transition.opacity x-cloak class="fixed inset-0 z-50 bg-white px-8 py-6 lg:hidden"> <div class="mt-20 space-y-3"> <a href="/" @click="open = false"${addAttribute(`block py-3 text-2xl font-semibold transition ${isActive("/") ? "text-brand-green menu-item-active" : "text-gray-700 hover:text-brand-green"}`, "class")}>
Home
</a> <a href="/about-us" @click="open = false"${addAttribute(`block py-3 text-2xl font-semibold transition ${isActive("/about-us") ? "text-brand-green menu-item-active" : "text-gray-700 hover:text-brand-green"}`, "class")}>
About us
</a> <!-- Our Services (mobile dropdown) --> <div class="border-b border-gray-100 py-2" x-data="{ ddOpen: false }"> <button type="button"${addAttribute(`flex w-full items-center justify-between py-3 text-2xl font-semibold transition ${servicesActive ? "text-brand-green" : "text-gray-700 hover:text-brand-green"}`, "class")} @click="ddOpen = !ddOpen" :aria-expanded="ddOpen.toString()"> <span>Our Services</span> <svg class="h-6 w-6 transition-transform duration-200" :class="ddOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path> </svg> </button> <div x-show="ddOpen" x-transition class="mt-2 space-y-2 pb-3"> <a href="/our-services/prism" @click="open = false"${addAttribute(`block rounded-lg px-3 py-2 text-lg font-semibold hover:bg-gray-50 ${isActivePrefix("/our-services/prism-cq-for-school") ? "text-brand-green" : "text-gray-700"}`, "class")}>
PRISM
</a> </div> <div x-show="ddOpen" x-transition class="mt-2 space-y-2 pb-3"> <a href="/our-services/cq-for-school" @click="open = false"${addAttribute(`block rounded-lg px-3 py-2 text-lg font-semibold hover:bg-gray-50 ${isActivePrefix("/our-services/prism-cq-for-school") ? "text-brand-green" : "text-gray-700"}`, "class")}>
CQ for School
</a> </div> </div> <!-- Our Customers (mobile dropdown) --> <div class="border-b border-gray-100 py-2" x-data="{ ddOpen: false }"> <button type="button"${addAttribute(`flex w-full items-center justify-between py-3 text-2xl font-semibold transition ${customersActive ? "text-brand-green" : "text-gray-700 hover:text-brand-green"}`, "class")} @click="ddOpen = !ddOpen" :aria-expanded="ddOpen.toString()"> <span>Our Customers</span> <svg class="h-6 w-6 transition-transform duration-200" :class="ddOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path> </svg> </button> <div x-show="ddOpen" x-transition class="mt-2 space-y-2 pb-3"> <a href="/our-customers/business-global-organization" @click="open = false"${addAttribute(`block rounded-lg px-3 py-2 text-lg font-semibold hover:bg-gray-50 ${isActivePrefix("/our-customers/business-global-organization") ? "text-brand-green" : "text-gray-700"}`, "class")}>
Business/ Global Organization
</a> <a href="/our-customers/international-school" @click="open = false"${addAttribute(`block rounded-lg px-3 py-2 text-lg font-semibold hover:bg-gray-50 ${isActivePrefix("/our-customers/international-school") ? "text-brand-green" : "text-gray-700"}`, "class")}>
International School
</a> <a href="/our-customers/ngos-nonprofit" @click="open = false"${addAttribute(`block rounded-lg px-3 py-2 text-lg font-semibold hover:bg-gray-50 ${isActivePrefix("/our-customers/ngos-nonprofit") ? "text-brand-green" : "text-gray-700"}`, "class")}>
NGOs/ NonProfit
</a> </div> </div> <a href="/insights" @click="open = false"${addAttribute(`block py-3 text-2xl font-semibold transition ${isActive("/insights") ? "text-brand-green menu-item-active" : "text-gray-700 hover:text-brand-green"}`, "class")}>
Insights
</a> <a href="/contact" @click="open = false"${addAttribute(`block py-3 text-2xl font-semibold transition ${isActive("/contact") ? "text-brand-green menu-item-active" : "text-gray-700 hover:text-brand-green"}`, "class")}>
Contact
</a> <a href="/contact#schedule-meeting" @click="open = false" class="mt-4 w-fit rounded-full bg-[#014650] px-6 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#014650]" rel="noreferrer">
Request Consultation
</a> </div> </div> </div> </header>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/Header.astro", void 0);

const siteLang = "en-US";
const siteName = "Think Global Consultants";
const themeColor = "#3C788C";

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white"> <div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"> <div class="flex justify-center gap-x-6 md:order-2"> <a href="#" class="hidden text-gray-600 hover:text-gray-800"> <span class="sr-only">Facebook</span> <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-6"> <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" fill-rule="evenodd"></path> </svg> </a> <a href="https://www.instagram.com/ThinkGlobalConsultants" class="text-gray-600 hover:text-gray-800"> <span class="sr-only">Instagram</span> <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-6"> <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" fill-rule="evenodd"></path> </svg> </a> <a href="https://x.com/ThinkGlobalCo" class="text-gray-600 hover:text-gray-800"> <span class="sr-only">X</span> <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-6"> <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path> </svg> </a> <a href="https://www.linkedin.com/company/think-global-consultants-llc/" class="text-gray-600 hover:text-gray-800"> <span class="sr-only">Linkedln</span> <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="size-6"> <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.48 1s2.5 1.12 2.5 2.5zM0.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V23h-4v-7.78c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.12V23h-4V8z"></path> </svg> </a> </div> <p class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
Copyright &copy ${currentYear} ${siteName}. All rights reserved.
</p> </div> </footer>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle, title, description } = Astro2.props;
  const baseUrl = `${Astro2.url.protocol}//${Astro2.url.host}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color"', '><meta name="description"', '><meta name="robots" content="index,follow"><meta name="googlebot" content="index,follow"><link rel="icon" type="image/x-icon" href="/bulb.png"><meta name="msapplication-TileColor" content="#ffffff"><link rel="canonical"', '><!-- Graph Meta Tags --><meta property="og:url"', '><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:image"', '><meta property="og:image:alt" content="Missionary Tech Support Logo"><meta property="og:description"', '><meta property="og:site_name" content="Missionary Tech Support"><meta property="og:locale"', '><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary"><meta name="twitter:url"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', "><title>", '</title><script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script>', "", "", "</head> ", ' <main class="pt-24"> ', " </main> ", " </html>"])), addAttribute(themeColor, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "href"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(`${baseUrl}/logo/bulb.png`, "content"), addAttribute(description, "content"), addAttribute(siteLang, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`${baseUrl}/images/logoMTS-og.png`, "content"), pageTitle, renderComponent($$result, "ClientRouter", $$ClientRouter, {}), renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
