import{s as e,n as t,S as s,i as r,e as n,t as a,a as o,c as l,b as c,d as i,f as u,g as f,h as p,j as g,k as m,m as h,l as d,o as v,p as $,q as b,r as E,u as y,v as S,w as _,x as w,y as L,z as P,A}from"./chunk.436312e0.js";function R(s,r=t){let n;const a=[];function o(t){if(e(s,t)){if(s=t,!n)return;a.forEach(e=>e[1]()),a.forEach(e=>e[0](s))}}return{set:o,update:function(e){o(e(s))},subscribe:function(e,l=t){const c=[e,l];return a.push(c),1===a.length&&(n=r(o)||t),e(s),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&(n(),n=null)}}}}const x={},C=()=>({});function j(e){var s,r,m,h,d,v,$,b,E,y,S,_,w,L,P,A,R,x,C,j,q,O,U,N,I,k,D,H,J,V;return{c(){s=n("nav"),r=n("ul"),m=n("li"),h=n("a"),d=a("home"),$=o(),b=n("li"),E=n("a"),y=a("about"),_=o(),w=n("li"),L=n("a"),P=a("login"),R=o(),x=n("li"),C=n("a"),j=a("register"),O=o(),U=n("li"),N=n("a"),I=a("secret"),D=o(),H=n("li"),J=n("a"),V=a("logout"),this.h()},l(e){s=l(e,"NAV",{class:!0},!1);var t=c(s);r=l(t,"UL",{class:!0},!1);var n=c(r);m=l(n,"LI",{class:!0},!1);var a=c(m);h=l(a,"A",{class:!0,href:!0},!1);var o=c(h);d=i(o,"home"),o.forEach(u),a.forEach(u),$=i(n,"\n    "),b=l(n,"LI",{class:!0},!1);var f=c(b);E=l(f,"A",{class:!0,href:!0},!1);var p=c(E);y=i(p,"about"),p.forEach(u),f.forEach(u),_=i(n,"\n    "),w=l(n,"LI",{class:!0},!1);var g=c(w);L=l(g,"A",{class:!0,href:!0},!1);var v=c(L);P=i(v,"login"),v.forEach(u),g.forEach(u),R=i(n,"\n    "),x=l(n,"LI",{class:!0},!1);var S=c(x);C=l(S,"A",{class:!0,href:!0},!1);var A=c(C);j=i(A,"register"),A.forEach(u),S.forEach(u),O=i(n,"\n    "),U=l(n,"LI",{class:!0},!1);var q=c(U);N=l(q,"A",{class:!0,href:!0},!1);var k=c(N);I=i(k,"secret"),k.forEach(u),q.forEach(u),D=i(n,"\n    "),H=l(n,"LI",{class:!0},!1);var B=c(H);J=l(B,"A",{href:!0,class:!0},!1);var K=c(J);V=i(K,"logout"),K.forEach(u),B.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){f(h,"class",v=(void 0===e.segment?"selected":"")+" svelte-1g78bui"),f(h,"href","."),f(m,"class","svelte-1g78bui"),f(E,"class",S=("about"===e.segment?"selected":"")+" svelte-1g78bui"),f(E,"href","about"),f(b,"class","svelte-1g78bui"),f(L,"class",A=("login"===e.segment?"selected":"")+" svelte-1g78bui"),f(L,"href","login"),f(w,"class","svelte-1g78bui"),f(C,"class",q=("register"===e.segment?"selected":"")+" svelte-1g78bui"),f(C,"href","register"),f(x,"class","svelte-1g78bui"),f(N,"class",k=("secret"===e.segment?"selected":"")+" svelte-1g78bui"),f(N,"href","secret"),f(U,"class","svelte-1g78bui"),f(J,"href","/api/logout"),f(J,"class","svelte-1g78bui"),f(H,"class","svelte-1g78bui"),f(r,"class","svelte-1g78bui"),f(s,"class","svelte-1g78bui")},m(e,t){p(e,s,t),g(s,r),g(r,m),g(m,h),g(h,d),g(r,$),g(r,b),g(b,E),g(E,y),g(r,_),g(r,w),g(w,L),g(L,P),g(r,R),g(r,x),g(x,C),g(C,j),g(r,O),g(r,U),g(U,N),g(N,I),g(r,D),g(r,H),g(H,J),g(J,V)},p(e,t){e.segment&&v!==(v=(void 0===t.segment?"selected":"")+" svelte-1g78bui")&&f(h,"class",v),e.segment&&S!==(S=("about"===t.segment?"selected":"")+" svelte-1g78bui")&&f(E,"class",S),e.segment&&A!==(A=("login"===t.segment?"selected":"")+" svelte-1g78bui")&&f(L,"class",A),e.segment&&q!==(q=("register"===t.segment?"selected":"")+" svelte-1g78bui")&&f(C,"class",q),e.segment&&k!==(k=("secret"===t.segment?"selected":"")+" svelte-1g78bui")&&f(N,"class",k)},i:t,o:t,d(e){e&&u(s)}}}function q(e,t,s){let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment)}),{segment:r}}class O extends s{constructor(t){super(),r(this,t,q,j,e,["segment"])}}function U(e){var t,s,r,a=new O({props:{segment:e.segment}});const g=e.$$slots.default,y=m(g,e,null);return{c(){a.$$.fragment.c(),t=o(),s=n("main"),y&&y.c(),this.h()},l(e){a.$$.fragment.l(e),t=i(e,"\n\n"),s=l(e,"MAIN",{class:!0},!1);var r=c(s);y&&y.l(r),r.forEach(u),this.h()},h(){f(s,"class","svelte-1uhnsl8")},m(e,n){h(a,e,n),p(e,t,n),p(e,s,n),y&&y.m(s,null),r=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),a.$set(s),y&&y.p&&e.$$scope&&y.p(d(g,t,e,null),v(g,t,null))},i(e){r||($(a.$$.fragment,e),$(y,e),r=!0)},o(e){b(a.$$.fragment,e),b(y,e),r=!1},d(e){E(a,e),e&&(u(t),u(s)),y&&y.d(e)}}}function N(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",a=e.$$scope)}),{segment:r,$$slots:n,$$scope:a}}class I extends s{constructor(t){super(),r(this,t,N,U,e,["segment"])}}function k(e){var t,s,r=e.error.stack;return{c(){t=n("pre"),s=a(r)},l(e){t=l(e,"PRE",{},!1);var n=c(t);s=i(n,r),n.forEach(u)},m(e,r){p(e,t,r),g(t,s)},p(e,t){e.error&&r!==(r=t.error.stack)&&y(s,r)},d(e){e&&u(t)}}}function D(e){var s,r,m,h,d,v,$,b,E,_=e.error.message;document.title=s=e.status;var w=e.dev&&e.error.stack&&k(e);return{c(){r=o(),m=n("h1"),h=a(e.status),d=o(),v=n("p"),$=a(_),b=o(),w&&w.c(),E=S(),this.h()},l(t){r=i(t,"\n\n"),m=l(t,"H1",{class:!0},!1);var s=c(m);h=i(s,e.status),s.forEach(u),d=i(t,"\n\n"),v=l(t,"P",{class:!0},!1);var n=c(v);$=i(n,_),n.forEach(u),b=i(t,"\n\n"),w&&w.l(t),E=S(),this.h()},h(){f(m,"class","svelte-8od9u6"),f(v,"class","svelte-8od9u6")},m(e,t){p(e,r,t),p(e,m,t),g(m,h),p(e,d,t),p(e,v,t),g(v,$),p(e,b,t),w&&w.m(e,t),p(e,E,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&y(h,t.status),e.error&&_!==(_=t.error.message)&&y($,_),t.dev&&t.error.stack?w?w.p(e,t):((w=k(t)).c(),w.m(E.parentNode,E)):w&&(w.d(1),w=null)},i:t,o:t,d(e){e&&(u(r),u(m),u(d),u(v),u(b)),w&&w.d(e),e&&u(E)}}}function H(e,t,s){let{status:r,error:n}=t;return e.$set=(e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)}),{status:r,error:n,dev:!1}}class J extends s{constructor(t){super(),r(this,t,H,D,e,["status","error"])}}function V(e){var t,s,r=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var s=0;s<r.length;s+=1)t=_(t,r[s]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=S()},l(e){o&&o.$$.fragment.l(e),t=S()},m(e,r){o&&h(o,e,r),p(e,t,r),s=!0},p(e,s){var l=e.level1?w(r,[s.level1.props]):{};if(n!==(n=s.level1.component)){if(o){P();const e=o;b(e.$$.fragment,1,()=>{E(e)}),A()}n?((o=new n(a())).$$.fragment.c(),$(o.$$.fragment,1),h(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){s||(o&&$(o.$$.fragment,e),s=!0)},o(e){o&&b(o.$$.fragment,e),s=!1},d(e){e&&u(t),o&&E(o,e)}}}function B(e){var t,s=new J({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){h(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||($(s.$$.fragment,e),t=!0)},o(e){b(s.$$.fragment,e),t=!1},d(e){E(s,e)}}}function K(e){var t,s,r,n,a=[B,V],o=[];function l(e){return e.error?0:1}return t=l(e),s=o[t]=a[t](e),{c(){s.c(),r=S()},l(e){s.l(e),r=S()},m(e,s){o[t].m(e,s),p(e,r,s),n=!0},p(e,n){var c=t;(t=l(n))===c?o[t].p(e,n):(P(),b(o[c],1,()=>{o[c]=null}),A(),(s=o[t])||(s=o[t]=a[t](n)).c(),$(s,1),s.m(r.parentNode,r))},i(e){n||($(s),n=!0)},o(e){b(s),n=!1},d(e){o[t].d(e),e&&u(r)}}}function T(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[K]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=_(r,s[n]);var a=new I({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){h(a,e,s),t=!0},p(e,t){var r=e.segments||e.level0?w(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||($(a.$$.fragment,e),t=!0)},o(e){b(a.$$.fragment,e),t=!1},d(e){E(a,e)}}}function z(e,t,s){let{stores:r,error:n,status:a,segments:o,level0:l,level1:c=null}=t;return L(x,r),e.$set=(e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)}),{stores:r,error:n,status:a,segments:o,level0:l,level1:c}}class G extends s{constructor(t){super(),r(this,t,z,T,e,["stores","error","status","segments","level0","level1"])}}const M=[],W=[{js:()=>import("./index.bbf64464.js"),css:["index.bbf64464.css"]},{js:()=>import("./register.f13637c2.js"),css:[]},{js:()=>import("./secret.38b8345e.js"),css:[]},{js:()=>import("./about.d9748166.js"),css:[]},{js:()=>import("./login.22dbdf88.js"),css:[]}],X=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/register\/?$/,parts:[{i:1}]},{pattern:/^\/secret\/?$/,parts:[{i:2}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/login\/?$/,parts:[{i:4}]}];const Y="undefined"!=typeof __SAPPER__&&__SAPPER__;let F,Q,Z,ee=!1,te=[],se="{}";const re={page:R({}),preloading:R(null),session:R(Y&&Y.session)};let ne,ae;re.session.subscribe(async e=>{if(ne=e,!ee)return;ae=!0;const t=ge(new URL(location.href)),s=Q={},{redirect:r,props:n,branch:a}=await ve(t);s===Q&&await de(r,a,n,t.page)});let oe,le=null;let ce,ie=1;const ue="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},fe={};function pe(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function ge(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Y.baseUrl))return null;let t=e.pathname.slice(Y.baseUrl.length);if(""===t&&(t="/"),!M.some(e=>e.test(t)))for(let s=0;s<X.length;s+=1){const r=X[s],n=r.pattern.exec(t);if(n){const s=pe(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},l={path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:l}}}}function me(){return{x:pageXOffset,y:pageYOffset}}async function he(e,t,s,r){if(t)ce=t;else{const e=me();fe[ce]=e,t=ce=++ie,fe[ce]=s?e:{x:0,y:0}}ce=t,F&&re.preloading.set(!0);const n=le&&le.href===e.href?le.promise:ve(e);le=null;const a=Q={},{redirect:o,props:l,branch:c}=await n;if(a===Q&&(await de(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=fe[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}fe[ce]=e,e&&scrollTo(e.x,e.y)}}async function de(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=ge(new URL(e,document.baseURI));return s?(ue[t.replaceState?"replaceState":"pushState"]({id:ce},"",e),he(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(re.page.set(r),re.preloading.set(!1),F)F.$set(s);else{s.stores={page:{subscribe:re.page.subscribe},preloading:{subscribe:re.preloading.subscribe},session:re.session},s.level0={props:await Z};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)be(e.nextSibling);be(e),be(t)}F=new G({target:oe,props:s,hydrate:!0})}te=t,se=JSON.stringify(r.query),ee=!0,ae=!1}async function ve(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;Z||(Z=Y.preloaded[0]||C.call(o,{path:s.path,query:s.query,params:{}},ne));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const f=r[l];if(function(e,t,s,r){if(r!==se)return!0;const n=te[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,f,i,n)&&(u=!0),a.segments[c]=r[l+1],!t)return{segment:f};const p=c++;if(!ae&&!u&&te[l]&&te[l].part===t.i)return te[l];u=!1;const{default:g,preload:m}=await function(e){const t="string"==typeof e.css?[]:e.css.map($e);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(W[t.i]);let h;return h=ee||!Y.preloaded[l+1]?m?await m.call(o,{path:s.path,query:s.query,params:t.params?t.params(e.match):{}},ne):{}:Y.preloaded[l+1],a[`level${p}`]={component:g,props:h,segment:f,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function $e(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function be(e){e.parentNode.removeChild(e)}function Ee(e){const t=ge(new URL(e,document.baseURI));if(t)return le&&e===le.href||function(e,t){le={href:e,promise:t}}(e,ve(t)),le.promise}let ye;function Se(e){clearTimeout(ye),ye=setTimeout(()=>{_e(e)},20)}function _e(e){const t=Le(e.target);t&&"prefetch"===t.rel&&Ee(t.href)}function we(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Le(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=ge(n);if(a){he(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ue.pushState({id:ce},"",n.href)}}function Le(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Pe(e){if(fe[ce]=me(),e.state){const t=ge(new URL(location.href));t?he(t,e.state.id):location.href=location.href}else(function(e){ce=e})(ie=ie+1),ue.replaceState({id:ce},"",location.href)}!function(e){var t;"scrollRestoration"in ue&&(ue.scrollRestoration="manual"),t=e.target,oe=t,addEventListener("click",we),addEventListener("popstate",Pe),addEventListener("touchstart",_e),addEventListener("mousemove",Se),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ue.replaceState({id:ie},"",t);const s=new URL(location.href);if(Y.error)return function(e){const{pathname:t,search:s}=location,{session:r,preloaded:n,status:a,error:o}=Y;Z||(Z=n&&n[0]),de(null,[],{error:o,status:a,session:r,level0:{props:Z},level1:{props:{status:a,error:o},component:J},segments:n},{path:t,query:pe(s),params:{}})}();const r=ge(s);return r?he(r,ie,!0,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.a870b8c3.js.map