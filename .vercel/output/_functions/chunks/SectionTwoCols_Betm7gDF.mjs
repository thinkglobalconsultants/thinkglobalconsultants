import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot } from './astro/server_CKxZlpWI.mjs';
import 'piccolore';

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$SectionTwoCols = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTwoCols;
  const {
    as = "section",
    leftClass = "",
    rightClass = "",
    containerClass = ""
  } = Astro2.props;
  const Tag = as;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": `w-full ${containerClass}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto grid max-w-6xl gap-4 px-8 sm:px-12 lg:px-5 pb-10 md:grid-cols-2"> <aside${addAttribute(`rounded-2xl bg-white p-6 ${leftClass}`, "class")}> ${renderSlot($$result2, $$slots["left"])} </aside> <main${addAttribute(`rounded-2xl bg-white p-6 ${rightClass}`, "class")}> ${renderSlot($$result2, $$slots["right"])} </main> </div> ` })}`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/SectionTwoCols.astro", void 0);

export { $$SectionTwoCols as $ };
