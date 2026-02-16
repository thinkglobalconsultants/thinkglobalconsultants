import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_CKxZlpWI.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_CHltFYEk.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_Dt5IGPzV.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/","cacheDir":"file:///C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/node_modules/.astro/","outDir":"file:///C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/dist/","srcDir":"file:///C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/","publicDir":"file:///C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/public/","buildClientDir":"file:///C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/dist/client/","buildServerDir":"file:///C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/about-us","isIndex":false,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us.astro","pathname":"/about-us","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/insights","isIndex":false,"type":"page","pattern":"^\\/insights\\/?$","segments":[[{"content":"insights","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/insights.astro","pathname":"/insights","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/our-customers/business-global-organization","isIndex":false,"type":"page","pattern":"^\\/our-customers\\/business-global-organization\\/?$","segments":[[{"content":"our-customers","dynamic":false,"spread":false}],[{"content":"business-global-organization","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/our-customers/business-global-organization.astro","pathname":"/our-customers/business-global-organization","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/our-customers/international-school","isIndex":false,"type":"page","pattern":"^\\/our-customers\\/international-school\\/?$","segments":[[{"content":"our-customers","dynamic":false,"spread":false}],[{"content":"international-school","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/our-customers/international-school.astro","pathname":"/our-customers/international-school","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/our-customers/ngos-nonprofit","isIndex":false,"type":"page","pattern":"^\\/our-customers\\/ngos-nonprofit\\/?$","segments":[[{"content":"our-customers","dynamic":false,"spread":false}],[{"content":"ngos-nonprofit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/our-customers/ngos-nonprofit.astro","pathname":"/our-customers/ngos-nonprofit","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"},{"type":"inline","content":"[data-astro-cid-3jnudybl][data-vertical-tabs] .vt-tab[data-astro-cid-3jnudybl][data-active=true]{background:#f9fafb;box-shadow:inset 0 0 0 1px #f3f4f6}\n"}],"routeData":{"route":"/our-services/cq-for-school","isIndex":false,"type":"page","pattern":"^\\/our-services\\/cq-for-school\\/?$","segments":[[{"content":"our-services","dynamic":false,"spread":false}],[{"content":"cq-for-school","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/our-services/cq-for-school.astro","pathname":"/our-services/cq-for-school","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/our-services/prism","isIndex":false,"type":"page","pattern":"^\\/our-services\\/prism\\/?$","segments":[[{"content":"our-services","dynamic":false,"spread":false}],[{"content":"prism","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/our-services/prism.astro","pathname":"/our-services/prism","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/post/[slug]","isIndex":false,"type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/thank-you","isIndex":false,"type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.QTE-fjr4.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://thinkglobalconsultants.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/about-us.astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/insights.astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/our-customers/business-global-organization.astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/our-customers/international-school.astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/our-customers/ngos-nonprofit.astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/our-services/cq-for-school.astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/our-services/prism.astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/entrypoint":"entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about-us@_@astro":"pages/about-us.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/insights@_@astro":"pages/insights.astro.mjs","\u0000@astro-page:src/pages/our-customers/business-global-organization@_@astro":"pages/our-customers/business-global-organization.astro.mjs","\u0000@astro-page:src/pages/our-customers/international-school@_@astro":"pages/our-customers/international-school.astro.mjs","\u0000@astro-page:src/pages/our-customers/ngos-nonprofit@_@astro":"pages/our-customers/ngos-nonprofit.astro.mjs","\u0000@astro-page:src/pages/our-services/cq-for-school@_@astro":"pages/our-services/cq-for-school.astro.mjs","\u0000@astro-page:src/pages/our-services/prism@_@astro":"pages/our-services/prism.astro.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"pages/post/_slug_.astro.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"pages/thank-you.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DeROxXGu.mjs","C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BglfLqr1.mjs","@astrojs/react/client.js":"_astro/client.T9fhd2RU.js","C:/Users/allan/OneDrive/Documentos/thinkglobalconsultants/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/kl-cloud.UE7WfL0d.webp","/_astro/check-white.DDtbI0X2.svg","/_astro/how.DpzFu3Rq.webp","/_astro/Schools-Photo.DNAx5NXS.webp","/_astro/how.C-RphWHR.webp","/_astro/NGOs.D2EpQXy5.webp","/_astro/Glass-Photo.CbbtLAoH.webp","/_astro/Business-page-photo.BIZUdDR0.webp","/_astro/pexels-whiteboard-one.D5UmUgma.webp","/_astro/Globe-CQ-for-Schools-Photo.CQZ2xLdS.webp","/_astro/school-white.Zg8_pUDB.svg","/_astro/business-white.CbsNUk2E.svg","/_astro/ngo-white.BsLc_7rp.svg","/_astro/heart-white.1GuPClC8.svg","/_astro/signal-white.CfJUgCQK.svg","/_astro/book-white.D_NPET_x.svg","/_astro/heart.Br0Ic2oO.svg","/_astro/school.PBDnMOpi.svg","/_astro/parent.CBPIG-ZQ.svg","/_astro/teacher.DV6WSxbn.svg","/_astro/Zach.B46XqPkX.jpeg","/_astro/Lindsey.Autiir2U.jpeg","/_astro/Bridge.3uf27vNi.webp","/_astro/Callie.BZxKgEyh.jpeg","/_astro/TGC-logo.CWJydGD6.png","/_astro/Daniel.3AAqy48I.jpg","/_astro/Andrew-FAVE.BoLy1C_2.jpg","/_astro/about-us.QTE-fjr4.css","/bulb.jpg","/bulb.png","/favicon.ico","/favicon.svg","/_astro/client.T9fhd2RU.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CDGfc0hd.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"hYetPATMmvVAW5W6w6CRCbETCNItf51xy2a9Axm6FMA="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
