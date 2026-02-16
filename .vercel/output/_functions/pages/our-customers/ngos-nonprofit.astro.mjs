import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_CKxZlpWI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DzbN6Nx7.mjs';
import { $ as $$SectionAbout } from '../../chunks/SectionAbout_BRCuO2xk.mjs';
import { $ as $$SectionTwoCols } from '../../chunks/SectionTwoCols_Betm7gDF.mjs';
import { $ as $$SectionFeature, a as $$RoutingsectionsWithFourBoxesDinamic, b as $$BoxesImages, C as CheckIcon } from '../../chunks/check-white_DrZP66od.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Dm_TAFwi.mjs';
import { $ as $$ButtonSquare } from '../../chunks/ButtonSquare_CUUPhC6p.mjs';
import { $ as $$Button } from '../../chunks/Button_DPrB1AoI.mjs';
export { renderers } from '../../renderers.mjs';

const Ngo = new Proxy({"src":"/_astro/NGOs.D2EpQXy5.webp","width":5472,"height":3648,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/assets/ngo/NGOs.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://thinkglobalconsultants.com");
const $$FinalCTADinamic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FinalCTADinamic;
  const { title, paragraph, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden bg-gray-50"> <div aria-hidden="true" class="hidden sm:absolute sm:inset-0 sm:block sm:size-full pointer-events-none -z-10"></div> <div class="relative z-10 mx-auto mt-16 max-w-7xl px-4 sm:mt-24"> <div class="text-center"> <h2 class="text-4xl font-semibold tracking-tight text-balance text-[#3C788C] sm:text-5xl"> ${title} </h2> <p class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"> ${paragraph} </p> <div class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8"> <div class="rounded-md shadow-sm"> ${renderComponent($$result, "Button", $$Button, { "link": "/contact#schedule-meeting", "classColor": "flex w-full items-center justify-center rounded-md border border-transparent bg-[#014650] px-8 py-3 text-base font-medium text-white hover:opacity-90 md:px-10 md:py-4 md:text-lg" }, { "default": ($$result2) => renderTemplate`${label}` })} </div> </div> </div> </div> </div>`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/components/FinalCTADinamic.astro", void 0);

const ngoHowtoHelp = new Proxy({"src":"/_astro/how.DpzFu3Rq.webp","width":3840,"height":2160,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/assets/ngo/how.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$NgosNonprofit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NgosNonprofit;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionAbout", $$SectionAbout, { "title": "Cultural intelligence for mission-driven organizations working across borders.", "description": "We help NGOs and nonprofits collaborate effectively across cultures while staying true to their mission." }, { "details": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="mt-6"> ${renderComponent($$result3, "ButtonSquare", $$ButtonSquare, { "link": "/contact#schedule-meeting", "label": "Talk to an Advisor" })} </div>`, "image": ($$result3) => renderTemplate`<div class="aspect-video w-full overflow-hidden rounded-2xl"> ${renderComponent($$result3, "Image", $$Image, { "slot": "image", "width": "2432", "height": "1000", "src": Ngo, "alt": "NGOs in action", "class": "w-full h-full object-cover object-top rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0" })} </div>` })} ${renderComponent($$result2, "SectionTwoCols", $$SectionTwoCols, {}, { "left": ($$result3) => renderTemplate`<div> <h3 class="text-2xl font-semibold text-gray-900 mb-4">Their Reality</h3> <ul class="list-decimal pl-6 space-y-2 text-gray-700"> <li>Working across cultures, languages, and power dynamics</li> <li>Tension between global strategy and local realities</li> <li>Well-meaning initiatives that don't always land as intended</li> <li>Limited resources, high expectations</li> </ul> </div>`, "right": ($$result3) => renderTemplate`<div> <h3 class="text-2xl font-semibold text-gray-900 mb-4">What's at Stake</h3> <ol class="list-decimal pl-6 space-y-2 text-gray-700"> <li>Community trust and legitimacy</li> <li>Program effectiveness</li> <li>Staff burnout and turnover</li> <li>Long-term impact and sustainability</li> </ol> </div>` })} ${renderComponent($$result2, "SectionFeature", $$SectionFeature, { "title": "How We Help", "description": "Through our Prism consulting approach, we support NGOs in navigating cultural complexity with humility and effectiveness." }, { "bulletpoint": ($$result3) => renderTemplate`<div> <div class="relative pl-9"> <dt class="inline font-semibold text-gray-900"> <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-1 left-1 size-5 text-indigo-600"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.25 7.3a.75.75 0 0 1-1.07-.002l-3.1-3.12a.75.75 0 1 1 1.064-1.056l2.568 2.582 6.72-6.76a.75.75 0 0 1 1.062-.004Z"></path> </svg>
Partner and community relationships
</dt> </div> <div class="relative pl-9"> <dt class="inline font-semibold text-gray-900"> <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-1 left-1 size-5 text-indigo-600"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.25 7.3a.75.75 0 0 1-1.07-.002l-3.1-3.12a.75.75 0 1 1 1.064-1.056l2.568 2.582 6.72-6.76a.75.75 0 0 1 1.062-.004Z"></path> </svg>
Cross-cultural leadership
</dt> </div> <div class="relative pl-9"> <dt class="inline font-semibold text-gray-900"> <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-1 left-1 size-5 text-indigo-600"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.25 7.3a.75.75 0 0 1-1.07-.002l-3.1-3.12a.75.75 0 1 1 1.064-1.056l2.568 2.582 6.72-6.76a.75.75 0 0 1 1.062-.004Z"></path> </svg>
Ethical decision-making
</dt> </div> <div class="relative pl-9"> <dt class="inline font-semibold text-gray-900"> <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-1 left-1 size-5 text-indigo-600"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.25 7.3a.75.75 0 0 1-1.07-.002l-3.1-3.12a.75.75 0 1 1 1.064-1.056l2.568 2.582 6.72-6.76a.75.75 0 0 1 1.062-.004Z"></path> </svg>
Sustainable collaboration models
</dt> </div> ${renderComponent($$result3, "ButtonSquare", $$ButtonSquare, { "link": "/our-services/prism", "label": "Learn more about the Prism Service", "class": "mt-10" })} </div>`, "image": ($$result3) => renderTemplate`<div> <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none"> ${renderComponent($$result3, "Image", $$Image, { "width": "2432", "height": "1442", "src": ngoHowtoHelp, "alt": "Product screenshot", "class": "h-130 w-full object-cover overflow-hidden rounded-2xl" })} </div> </div>` })} ${renderComponent($$result2, "RoutingsectionsWithFourBoxesDinamic", $$RoutingsectionsWithFourBoxesDinamic, { "title": "Outcomes You Can Expect" }, { "boxes": ($$result3) => renderTemplate`<div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"> ${renderComponent($$result3, "BoxesImages", $$BoxesImages, { "icon": CheckIcon, "title": "Stronger local partnerships" })} ${renderComponent($$result3, "BoxesImages", $$BoxesImages, { "icon": CheckIcon, "title": "Fewer cultural missteps" })} ${renderComponent($$result3, "BoxesImages", $$BoxesImages, { "icon": CheckIcon, "title": "Clearer internal alignment" })} ${renderComponent($$result3, "BoxesImages", $$BoxesImages, { "icon": CheckIcon, "title": "Greater mission impact with less friction" })} </div>` })} ${renderComponent($$result2, "FinalCTADinamic", $$FinalCTADinamic, { "title": "Let's strengthen your impact \u2014 without losing your values.", "paragraph": "Start a conversation.", "label": "Talk to an Advisor" })} ` })}`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/our-customers/ngos-nonprofit.astro", void 0);

const $$file = "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/our-customers/ngos-nonprofit.astro";
const $$url = "/our-customers/ngos-nonprofit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$NgosNonprofit,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
