(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9749:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}e.default=function(t){var e=t.src,n=t.sizes,r=t.unoptimized,c=void 0!==r&&r,l=t.priority,u=void 0!==l&&l,y=t.loading,h=t.lazyRoot,A=void 0===h?null:h,k=t.lazyBoundary,E=void 0===k?"200px":k,R=t.className,P=t.quality,_=t.width,q=t.height,L=t.style,M=t.objectFit,C=t.objectPosition,N=t.onLoadingComplete,D=t.loader,W=void 0===D?I:D,U=t.placeholder,B=void 0===U?"empty":U,F=t.blurDataURL,H=b(t,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),T=s.useContext(m.ImageConfigContext),G=s.useMemo((function(){var t=v||T||f.imageConfigDefault,e=a(t.deviceSizes).concat(a(t.imageSizes)).sort((function(t,e){return t-e})),n=t.deviceSizes.sort((function(t,e){return t-e}));return p({},t,{allSizes:e,deviceSizes:n})}),[T]),J=H,V=n?"responsive":"intrinsic";"layout"in J&&(J.layout&&(V=J.layout),delete J.layout);var $="";if(function(t){return"object"===typeof t&&(z(t)||function(t){return void 0!==t.src}(t))}(e)){var Q=z(e)?e.default:e;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(F=F||Q.blurDataURL,$=Q.src,(!V||"fill"!==V)&&(q=q||Q.height,_=_||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}e="string"===typeof e?e:$;var K=O(_),X=O(q),Y=O(P),Z=!u&&("lazy"===y||"undefined"===typeof y);(e.startsWith("data:")||e.startsWith("blob:"))&&(c=!0,Z=!1);w.has(e)&&(Z=!1);var tt,et=o(g.useIntersection({rootRef:A,rootMargin:E,disabled:!Z}),2),nt=et[0],rt=et[1],it=!Z||rt,ot={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},at={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ct=!1,lt={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:C};0;0;var ut=Object.assign({},L,"raw"===V?{aspectRatio:"".concat(K," / ").concat(X)}:lt),st="blur"===B?{filter:"blur(20px)",backgroundSize:M||"cover",backgroundImage:'url("'.concat(F,'")'),backgroundPosition:C||"0% 0%"}:{};if("fill"===V)ot.display="block",ot.position="absolute",ot.top=0,ot.left=0,ot.bottom=0,ot.right=0;else if("undefined"!==typeof K&&"undefined"!==typeof X){var dt=X/K,ft=isNaN(dt)?"100%":"".concat(100*dt,"%");"responsive"===V?(ot.display="block",ot.position="relative",ct=!0,at.paddingTop=ft):"intrinsic"===V?(ot.display="inline-block",ot.position="relative",ot.maxWidth="100%",ct=!0,at.maxWidth="100%",tt="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(K,"%27%20height=%27").concat(X,"%27/%3e")):"fixed"===V&&(ot.display="inline-block",ot.position="relative",ot.width=K,ot.height=X)}else 0;var gt={src:S,srcSet:void 0,sizes:void 0};it&&(gt=j({config:G,src:e,unoptimized:c,layout:V,width:K,quality:Y,sizes:n,loader:W}));var mt=e;0;var yt;0;var ht=(i(yt={},"imagesrcset",gt.srcSet),i(yt,"imagesizes",gt.sizes),yt),pt=s.default.useLayoutEffect,bt=s.useRef(N),vt=s.useRef(null);s.useEffect((function(){bt.current=N}),[N]),pt((function(){nt(vt.current)}),[nt]),s.useEffect((function(){!function(t,e,n,r,i){var o=function(){var n=t.current;n&&(n.src!==S&&("decode"in n?n.decode():Promise.resolve()).catch((function(){})).then((function(){if(t.current&&(w.add(e),"blur"===r&&(n.style.filter="",n.style.backgroundSize="",n.style.backgroundImage="",n.style.backgroundPosition=""),i.current)){var o=n.naturalWidth,a=n.naturalHeight;i.current({naturalWidth:o,naturalHeight:a})}})))};t.current&&(t.current.complete?o():t.current.onload=o)}(vt,mt,0,B,bt)}),[mt,V,B,it]);var wt=p({isLazy:Z,imgAttributes:gt,heightInt:X,widthInt:K,qualityInt:Y,layout:V,className:R,imgStyle:ut,blurStyle:st,imgRef:vt,loading:y,config:G,unoptimized:c,placeholder:B,loader:W,srcString:mt},J);return s.default.createElement(s.default.Fragment,null,"raw"===V?s.default.createElement(x,Object.assign({},wt)):s.default.createElement("span",{style:ot},ct?s.default.createElement("span",{style:at},tt?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:tt}):null):null,s.default.createElement(x,Object.assign({},wt))),u?s.default.createElement(d.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+gt.src+gt.srcSet+gt.sizes,rel:"preload",as:"image",href:gt.srcSet?void 0:gt.src},ht))):null)};var l,u,s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,n):{};r.get||r.set?Object.defineProperty(e,n,r):e[n]=t[n]}return e.default=t,e}(n(7294)),d=(l=n(3121))&&l.__esModule?l:{default:l},f=n(139),g=n(9246),m=n(8730),y=(n(670),n(2700));function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(e){h(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}function b(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1},w=new Set,S=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var A=new Map([["default",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality;0;if(n.endsWith(".svg")&&!e.dangerouslyAllowSVG)return n;return"".concat(y.normalizePathTrailingSlash(e.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=new URL("".concat(e.path).concat(k(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var e=t.config,n=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(e.path).concat(o).concat(k(n))}],["akamai",function(t){var e=t.config,n=t.src,r=t.width;return"".concat(e.path).concat(k(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(t){return void 0!==t.default}function j(t){var e=t.config,n=t.src,r=t.unoptimized,i=t.layout,o=t.width,c=t.quality,l=t.sizes,u=t.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(t,e,n,r){var i=t.deviceSizes,o=t.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var c,l=/(^|\s)(1?\d?\d)vw/g,u=[];c=l.exec(r);c)u.push(parseInt(c[2]));if(u.length){var s,d=.01*(s=Math).min.apply(s,a(u));return{widths:o.filter((function(t){return t>=i[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof e||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:a(new Set([e,2*e].map((function(t){return o.find((function(e){return e>=t}))||o[o.length-1]})))),kind:"x"}}(e,o,i,l),d=s.widths,f=s.kind,g=d.length-1;return{sizes:l||"w"!==f?l:"100vw",srcSet:d.map((function(t,r){return"".concat(u({config:e,src:n,quality:c,width:t})," ").concat("w"===f?t:r+1).concat(f)})).join(", "),src:u({config:e,src:n,quality:c,width:d[g]})}}function O(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function I(t){var e,n=(null===(e=t.config)||void 0===e?void 0:e.loader)||"default",r=A.get(n);if(r)return r(t);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}var x=function(t){var e=t.imgAttributes,n=t.heightInt,r=t.widthInt,i=t.qualityInt,o=t.layout,a=t.className,c=t.imgStyle,l=t.blurStyle,u=t.isLazy,d=t.imgRef,f=t.placeholder,g=t.loading,m=t.sizes,y=t.srcString,h=t.config,v=t.unoptimized,w=t.loader,S=b(t,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","imgRef","placeholder","loading","sizes","srcString","config","unoptimized","loader"]);return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,e,"raw"!==o||m?{}:{height:n,width:r},{decoding:"async","data-nimg":o,className:a,ref:d,style:p({},c,l)})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},S,j({config:h,src:y,unoptimized:v,layout:o,width:r,quality:i,sizes:m,loader:w}),"raw"!==o||m?{}:{height:n,width:r},{decoding:"async","data-nimg":o,style:c,className:a,loading:g||"lazy"}))))};function k(t){return"/"===t[0]?t.slice(1):t}},9246:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,r=t.disabled||!c,s=o.useRef(),d=i(o.useState(!1),2),f=d[0],g=d[1],m=i(o.useState(e?e.current:null),2),y=m[0],h=m[1],p=o.useCallback((function(t){s.current&&(s.current(),s.current=void 0),r||f||t&&t.tagName&&(s.current=function(t,e,n){var r=function(t){var e,n={root:t.root||null,margin:t.rootMargin||""},r=u.find((function(t){return t.root===n.root&&t.margin===n.margin}));r?e=l.get(r):(e=l.get(n),u.push(n));if(e)return e;var i=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var e=i.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return l.set(n,e={id:n,observer:o,elements:i}),e}(n),i=r.id,o=r.observer,a=r.elements;return a.set(t,e),o.observe(t),function(){if(a.delete(t),o.unobserve(t),0===a.size){o.disconnect(),l.delete(i);var e=u.findIndex((function(t){return t.root===i.root&&t.margin===i.margin}));e>-1&&u.splice(e,1)}}}(t,(function(t){return t&&g(t)}),{root:y,rootMargin:n}))}),[r,y,n,f]);return o.useEffect((function(){if(!c&&!f){var t=a.requestIdleCallback((function(){return g(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[f]),o.useEffect((function(){e&&h(e.current)}),[e]),[p,f]};var o=n(7294),a=n(4686),c="undefined"!==typeof IntersectionObserver;var l=new Map,u=[]},5675:function(t,e,n){t.exports=n(9749)}}]);