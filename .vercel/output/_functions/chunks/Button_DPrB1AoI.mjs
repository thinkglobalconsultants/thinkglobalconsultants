import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, f as renderSlot, b as renderTemplate } from './astro/server_CKxZlpWI.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { classColor, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(classColor ? classColor : `rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-offset-2 bg-[#014650]`, "class")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/Button.astro", void 0);

export { $$Button as $ };
