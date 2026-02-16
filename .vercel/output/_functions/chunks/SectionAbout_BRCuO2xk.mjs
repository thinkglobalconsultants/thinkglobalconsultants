import { c as createAstro, a as createComponent, m as maybeRenderHead, f as renderSlot, b as renderTemplate } from './astro/server_CKxZlpWI.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$SectionAbout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionAbout;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="overflow-hidden bg-white py-10 sm:py-10"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"> <div class="lg:pt-4 lg:pr-8"> <div class="lg:max-w-lg"> <h1 class="text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">${title}</h1> <p class="mt-6 text-lg/8 text-gray-700">${description}</p> ${renderSlot($$result, $$slots["details"])} <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none"></dl> </div> </div> ${renderSlot($$result, $$slots["image"])} </div> </div> </div>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/SectionAbout.astro", void 0);

export { $$SectionAbout as $ };
