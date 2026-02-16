import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CKxZlpWI.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_DzbN6Nx7.mjs';
import { $ as $$SectionAbout } from '../../chunks/SectionAbout_BRCuO2xk.mjs';
import { $ as $$SectionTwoCols } from '../../chunks/SectionTwoCols_Betm7gDF.mjs';
import { $ as $$FinalCTA } from '../../chunks/FinalCTA_DDbfFn11.mjs';
import { $ as $$SectionFeature, a as $$RoutingsectionsWithFourBoxesDinamic, b as $$BoxesImages, C as CheckIcon } from '../../chunks/check-white_DrZP66od.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_Dm_TAFwi.mjs';
import { $ as $$ButtonSquare } from '../../chunks/ButtonSquare_CUUPhC6p.mjs';
export { renderers } from '../../renderers.mjs';

const business = new Proxy({"src":"/_astro/Business-page-photo.BIZUdDR0.webp","width":5184,"height":3456,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/assets/business/Business-page-photo.webp";
							}
							
							return target[name];
						}
					});

const businessHowtoHelp = new Proxy({"src":"/_astro/how.C-RphWHR.webp","width":3565,"height":5347,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/assets/business/how.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://thinkglobalconsultants.com");
const $$BusinessGlobalOrganization = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BusinessGlobalOrganization;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionAbout", $$SectionAbout, { "title": "Build high-performing teams across cultures, markets, and borders.", "description": "We help global organizations turn cultural complexity into clarity, trust, and measurable performance." }, { "details": ($$result3) => renderTemplate`${maybeRenderHead()}<div class="mt-6"> ${renderComponent($$result3, "ButtonSquare", $$ButtonSquare, { "link": "/contact#schedule-meeting", "label": "Schedule a Discovery Call" })} </div>`, "image": ($$result3) => renderTemplate`<div class="aspect-video w-full overflow-hidden rounded-2xl"> ${renderComponent($$result3, "Image", $$Image, { "slot": "image", "width": "2432", "height": "1000", "src": business, "alt": "Product screenshot", "class": "w-full h-full object-cover object-center rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:ml-0" })} </div>` })} ${renderComponent($$result2, "SectionTwoCols", $$SectionTwoCols, {}, { "left": ($$result3) => renderTemplate`<div> <h3 class="text-2xl font-semibold text-gray-900 mb-4">Their Reality</h3> <ul class="list-decimal pl-6 space-y-2 text-gray-700"> <li>Teams spread across regions, time zones, and cultural norms</li> <li>Misalignment between headquarters and local markets</li> <li>Strong talent — but collaboration breaks down under pressure</li> <li>DEI initiatives that feel symbolic instead of operational</li> </ul> </div>`, "right": ($$result3) => renderTemplate`<div> <h3 class="text-2xl font-semibold text-gray-900 mb-4">What's at Stake</h3> <ol class="list-decimal pl-6 space-y-2 text-gray-700"> <li>Missed growth in new markets</li> <li>Friction inside leadership teams</li> <li>Slower execution and decision-making</li> <li>Costly talent loss and disengagement</li> </ol> </div>` })} ${renderComponent($$result2, "SectionFeature", $$SectionFeature, { "title": "How We Help", "description": "We work with leadership teams using our Prism framework, a practical model for navigating cultural differences in real business decisions." }, { "bulletpoint": ($$result3) => renderTemplate`<div> <div class="relative pl-9"> <dt class="inline font-semibold text-gray-900"> <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-1 left-1 size-5 text-indigo-600"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.25 7.3a.75.75 0 0 1-1.07-.002l-3.1-3.12a.75.75 0 1 1 1.064-1.056l2.568 2.582 6.72-6.76a.75.75 0 0 1 1.062-.004Z"></path> </svg>
Cultural intelligence for leaders
</dt> </div> <div class="relative pl-9"> <dt class="inline font-semibold text-gray-900"> <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-1 left-1 size-5 text-indigo-600"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.25 7.3a.75.75 0 0 1-1.07-.002l-3.1-3.12a.75.75 0 1 1 1.064-1.056l2.568 2.582 6.72-6.76a.75.75 0 0 1 1.062-.004Z"></path> </svg>
Decision-making across value systems
</dt> </div> <div class="relative pl-9"> <dt class="inline font-semibold text-gray-900"> <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-1 left-1 size-5 text-indigo-600"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.25 7.3a.75.75 0 0 1-1.07-.002l-3.1-3.12a.75.75 0 1 1 1.064-1.056l2.568 2.582 6.72-6.76a.75.75 0 0 1 1.062-.004Z"></path> </svg>
Communication under ambiguity
</dt> </div> <div class="relative pl-9"> <dt class="inline font-semibold text-gray-900"> <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="absolute top-1 left-1 size-5 text-indigo-600"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.704 5.29a.75.75 0 0 1 .006 1.06l-7.25 7.3a.75.75 0 0 1-1.07-.002l-3.1-3.12a.75.75 0 1 1 1.064-1.056l2.568 2.582 6.72-6.76a.75.75 0 0 1 1.062-.004Z"></path> </svg>
Building shared norms without forcing uniformity
</dt> </div> </div>`, "image": ($$result3) => renderTemplate`<div> <div class="mx-auto max-w-2xl sm:mx-0 sm:max-w-none"> ${renderComponent($$result3, "Image", $$Image, { "width": "2432", "height": "1442", "src": businessHowtoHelp, "alt": "Product screenshot", "class": "h-130 w-full object-cover overflow-hidden rounded-2xl" })} </div> </div>` })} ${renderComponent($$result2, "RoutingsectionsWithFourBoxesDinamic", $$RoutingsectionsWithFourBoxesDinamic, { "title": "Our Approach", "paragraph": "We help global organizations build cultural intelligence in their leadership teams and across their organizations." }, { "boxes": ($$result3) => renderTemplate`<div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"> ${renderComponent($$result3, "BoxesImages", $$BoxesImages, { "icon": CheckIcon, "title": "Faster alignment across regions." })} ${renderComponent($$result3, "BoxesImages", $$BoxesImages, { "icon": CheckIcon, "title": "Leaders confident navigating cultural tension" })} ${renderComponent($$result3, "BoxesImages", $$BoxesImages, { "icon": CheckIcon, "title": "Fewer misunderstandings, clearer accountability" })} ${renderComponent($$result3, "BoxesImages", $$BoxesImages, { "icon": CheckIcon, "title": "Culture as a performance advantage \u2014 not a risk" })} </div>` })} ${renderComponent($$result2, "FinalCTA", $$FinalCTA, {})} ` })}`;
}, "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/our-customers/business-global-organization.astro", void 0);

const $$file = "C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/our-customers/business-global-organization.astro";
const $$url = "/our-customers/business-global-organization";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BusinessGlobalOrganization,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
