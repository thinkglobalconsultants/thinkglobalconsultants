import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, f as renderSlot, b as renderTemplate } from './astro/server_CKxZlpWI.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, class: className, contain = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(className, "class")}> <div${addAttribute(`${contain ? "container flex justify-items-center mx-auto py-16 lg:py-32" : ""}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/Section.astro", void 0);

export { $$Section as $ };
