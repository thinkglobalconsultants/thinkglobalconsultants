import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate } from './astro/server_CKxZlpWI.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$SectionCallAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionCallAction;
  const { title, paragraph, button1, button2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden bg-gray-50"> <!-- Overlay: no debe capturar clicks --> <div aria-hidden="true" class="hidden sm:absolute sm:inset-0 sm:block sm:size-full pointer-events-none -z-10"></div> <main class="relative z-10 mx-auto mt-16 max-w-7xl px-4 sm:mt-24"> <div class="text-center"> <h2 class="text-4xl font-semibold tracking-tight text-balance text-[#3C788C] sm:text-5xl"> ${title} </h2> <p class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"> ${paragraph} </p> <div class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"> <div class="rounded-md shadow-sm"> <a href="/our-services/prism" class="flex w-full items-center justify-center rounded-md border border-transparent bg-[#014650] px-8 py-3 text-base font-medium text-white hover:opacity-90 md:px-10 md:py-4 md:text-lg"> ${button1} </a> </div> <div class="mt-3 rounded-md shadow-sm sm:ml-3 sm:mt-0"> <a href="/contact#schedule-meeting" class="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 md:px-10 md:py-4 md:text-lg"> ${button2} </a> </div> </div> </div> </main> </div>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/SectionCallAction.astro", void 0);

export { $$SectionCallAction as $ };
