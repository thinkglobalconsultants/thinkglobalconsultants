import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, f as renderSlot, b as renderTemplate } from './astro/server_CKxZlpWI.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$SimpleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SimpleSection;
  const { customeColor, id } = Astro2.props;
  const color = "#014650";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`w-full bg-[${customeColor || color}]`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/SimpleSection.astro", void 0);

export { $$SimpleSection as $ };
