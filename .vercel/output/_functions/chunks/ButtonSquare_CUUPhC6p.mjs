import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_CKxZlpWI.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$ButtonSquare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonSquare;
  const { link, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="mt-4 inline-block rounded-lg bg-[#014650] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#013a42] focus:outline-none focus:ring-2 focus:ring-[#014650] focus:ring-offset-2"> ${label} </a>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/ButtonSquare.astro", void 0);

export { $$ButtonSquare as $ };
