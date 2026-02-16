import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, f as renderSlot, r as renderComponent, e as addAttribute, u as unescapeHTML } from '../chunks/astro/server_CKxZlpWI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DzbN6Nx7.mjs';
import 'clsx';
import { $ as $$SectionTwoCols } from '../chunks/SectionTwoCols_Betm7gDF.mjs';
import { $ as $$SectionCallAction } from '../chunks/SectionCallAction_Cew59HWG.mjs';
import { g as getLastestPost } from '../chunks/wp_PCWDKFFu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://thinkglobalconsultants.com");
const $$HeaderSectionSimple = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderSectionSimple;
  const { title, paragraph, paragraph1 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-24 sm:py-10"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl lg:mx-0"> <h1 class="text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">${title}</h1> <p class="mt-6 text-lg/8 text-gray-700">${paragraph}</p> <p class="mt-6 text-lg/8 text-gray-700">${paragraph1}</p> </div> </div> </section>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/HeaderSectionSimple.astro", void 0);

const $$BlogSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white py-24 sm:py-10"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl text-center"> <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
Featured Insights
</h2> </div> <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"> <!-- insert blog article --> ${renderSlot($$result, $$slots["article"])} </div> </div> </div>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/BlogSection.astro", void 0);

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$Insights = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Insights;
  const posts = await getLastestPost({ perPage: 20 });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderSectionSimple", $$HeaderSectionSimple, { "title": "Insights on Cultural Intelligence & Global Leadership", "paragraph": "The Prism Insights hub brings together expert articles and real-world case studies on cultural intelligence, cross-cultural leadership, and working effectively across cultures.", "paragraph1": "Our insights are grounded in practical consulting experience with global organizations, international schools, and mission-driven institutions." })} ${renderComponent($$result2, "BlogSection", $$BlogSection, {}, { "article": async ($$result3) => renderTemplate`${posts.map((info) => renderTemplate`${maybeRenderHead()}<article class="flex flex-col items-start justify-between"> <div class="relative w-full"> <img${addAttribute(info.featuredImage, "src")}${addAttribute(info.title, "alt")} class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2"> <div class="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10"></div> </div> <div class="flex max-w-xl grow flex-col justify-between"> <div class="group relative grow"> <h3 class="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600"> <a${addAttribute(`/post/${info.slug}`, "href")}> <span class="absolute inset-0"></span> ${info.title} </a> </h3> <p class="mt-5 line-clamp-3 text-sm/6 text-gray-600"></p><div class="text-gray-700">${unescapeHTML(info.excerpt)}</div>  </div> <div class="group relative grow"></div> </div> </article>`)}` })} ${renderComponent($$result2, "SectionTwoCols", $$SectionTwoCols, {}, { "left": async ($$result3) => renderTemplate`<div> <h3 class="text-2xl font-semibold text-gray-900 mb-4">
Topics We Explore
</h3> <ul class="list-decimal pl-6 space-y-2 text-gray-700"> <li>Cultural intelligence (CQ)</li> <li>Cross-cultural leadership</li> <li>Global team performance</li> <li>Organizational culture</li> <li>International education leadership</li> <li>NGOs and cross-border collaboration</li> </ul> </div>`, "right": async ($$result3) => renderTemplate`<div> <h3 class="text-2xl font-semibold text-gray-900 mb-4">
Who These Insights Are For
</h3> <ol class="list-decimal pl-6 space-y-2 text-gray-700"> <li>Global business leaders</li> <li>International school leadership teams</li> <li>NGOs and nonprofit executives</li> <li>HR, L&D, and people leaders</li> </ol> </div>` })} ${renderComponent($$result2, "SectionCallAction", $$SectionCallAction, { "title": "Looking for insights tailored to your organization?", "button1": "Explore Prism Consulting", "button2": "Explore CQ for Schools" })} ` })}`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/insights.astro", void 0);

const $$file = "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/insights.astro";
const $$url = "/insights";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Insights,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
