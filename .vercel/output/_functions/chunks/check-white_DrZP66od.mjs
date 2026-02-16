import { c as createAstro, a as createComponent, m as maybeRenderHead, f as renderSlot, b as renderTemplate, e as addAttribute, r as renderComponent } from './astro/server_CKxZlpWI.mjs';
import 'piccolore';
import 'clsx';
import { $ as $$Image } from './_astro_assets_Dm_TAFwi.mjs';
import { c as createSvgComponent } from './runtime_BqRG28uq.mjs';

const $$Astro$2 = createAstro("https://thinkglobalconsultants.com");
const $$SectionFeature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SectionFeature;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="overflow-hidden bg-white py-24 sm:py-10"> <div class="mx-auto max-w-7xl md:px-6 lg:px-8"> <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start"> <div class="px-6 lg:px-0 lg:pt-20 lg:pr-4"> <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg"> <h2 class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">${title}</h2> <p class="mt-6 text-lg/8 text-gray-600">${description}</p> <dl class="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none"> ${renderSlot($$result, $$slots["bulletpoint"])} </dl> </div> </div> <div class="sm:px-6 lg:px-0"> ${renderSlot($$result, $$slots["image"])} </div> </div> </div> </section>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/SectionFeature.astro", void 0);

const $$Astro$1 = createAstro("https://thinkglobalconsultants.com");
const $$RoutingsectionsWithFourBoxesDinamic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RoutingsectionsWithFourBoxesDinamic;
  const { title, paragraph } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white py-24 sm:py-10"> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="mx-auto max-w-2xl text-center"> <h2 class="text-4xl font-semibold tracking-tight text-balance text-[#3C788C] sm:text-5xl"> ${title} </h2> <p class="mt-6 text-lg leading-8 text-gray-600"> ${paragraph} </p></div> ${renderSlot($$result, $$slots["boxes"])} </div> </div>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/RoutingsectionsWithFourBoxesDinamic.astro", void 0);

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$BoxesImages = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BoxesImages;
  const { icon, title, description, color } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`bg-[${color ? color : "#3C788C"}] mx-auto flex min-h-65 max-w-sm flex-col items-center justify-center rounded-2xl border border-gray-200 p-6 text-center shadow-sm`, "class")}> <!-- Favicon / icon --> ${renderComponent($$result, "Image", $$Image, { "src": icon, "alt": "School Icon", "class": "mx-auto h-12 w-12" })} <!-- Title --> <h3 class="mt-4 text-xl font-semibold text-white"> ${title} </h3> <!-- Paragraph --> <p class="mt-2 text-sm leading-6 text-white"> ${description} </p> </article>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/BoxesImages.astro", void 0);

const CheckIcon = createSvgComponent({"meta":{"src":"/_astro/check-white.DDtbI0X2.svg","width":800,"height":800,"format":"svg"},"attributes":{"width":"800px","height":"800px","viewBox":"0 0 24 24","fill":"none"},"children":"\n\r<g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\" />\n\r<g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n\r<g id=\"SVGRepo_iconCarrier\"> <circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"#ffffff\" stroke-width=\"1.5\" /> <path d=\"M8.5 12.5L10.5 14.5L15.5 9.5\" stroke=\"#ffffff\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" /> </g>\n\r"});

export { $$SectionFeature as $, CheckIcon as C, $$RoutingsectionsWithFourBoxesDinamic as a, $$BoxesImages as b };
