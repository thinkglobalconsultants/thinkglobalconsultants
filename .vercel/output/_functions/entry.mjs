import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DWoG6dAp.mjs';
import { manifest } from './manifest_DeROxXGu.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/about-us.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/insights.astro.mjs');
const _page6 = () => import('./pages/our-customers/business-global-organization.astro.mjs');
const _page7 = () => import('./pages/our-customers/international-school.astro.mjs');
const _page8 = () => import('./pages/our-customers/ngos-nonprofit.astro.mjs');
const _page9 = () => import('./pages/our-services/cq-for-school.astro.mjs');
const _page10 = () => import('./pages/our-services/prism.astro.mjs');
const _page11 = () => import('./pages/post/_slug_.astro.mjs');
const _page12 = () => import('./pages/thank-you.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/about-us.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/insights.astro", _page5],
    ["src/pages/our-customers/business-global-organization.astro", _page6],
    ["src/pages/our-customers/international-school.astro", _page7],
    ["src/pages/our-customers/ngos-nonprofit.astro", _page8],
    ["src/pages/our-services/cq-for-school.astro", _page9],
    ["src/pages/our-services/prism.astro", _page10],
    ["src/pages/post/[slug].astro", _page11],
    ["src/pages/thank-you.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8473e3f1-cbf6-4a37-a7dd-8f55c37246f8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
