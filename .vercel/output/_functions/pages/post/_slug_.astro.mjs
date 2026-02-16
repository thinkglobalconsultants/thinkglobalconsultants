import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_CKxZlpWI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DzbN6Nx7.mjs';
import { a as getPostInfo } from '../../chunks/wp_PCWDKFFu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug;
  console.log("el slug es: " + slug);
  if (!slug) {
    return Astro2.redirect("/404");
  }
  const { title, content } = await getPostInfo(slug);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white px-6 py-10 lg:px-8"> <div class="mx-auto max-w-3xl text-base/7 text-gray-700"> <h1 class="mt-2 text-4xl mx-auto justify-center align-items-c py-5 font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl"> ${title} </h1> <div class="text-gray-700 [&_h2]:text-3xl [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">${unescapeHTML(content)}</div> </div> </div> ` })}`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/post/[slug].astro", void 0);

const $$file = "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
