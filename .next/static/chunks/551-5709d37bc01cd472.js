(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[551],{9917:function(e){e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},8614:function(e,t,n){"use strict";n.d(t,{M:function(){return x}});var r=n(7437),s=n(2265),i=n(4252),o=n(3576),a=n(5750);class u extends s.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function l(e){let{children:t,isPresent:n}=e,i=(0,s.useId)(),o=(0,s.useRef)(null),l=(0,s.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,s.useContext)(a._);return(0,s.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:s}=l.current;if(n||!o.current||!e||!t)return;o.current.dataset.motionPopId=i;let a=document.createElement("style");return c&&(a.nonce=c),document.head.appendChild(a),a.sheet&&a.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(s,"px !important;\n          }\n        ")),()=>{document.head.removeChild(a)}},[n]),(0,r.jsx)(u,{isPresent:n,childRef:o,sizeRef:l,children:s.cloneElement(t,{ref:o})})}let c=e=>{let{children:t,initial:n,isPresent:a,onExitComplete:u,custom:c,presenceAffectsLayout:d,mode:p}=e,g=(0,o.h)(f),h=(0,s.useId)(),m=(0,s.useCallback)(e=>{for(let t of(g.set(e,!0),g.values()))if(!t)return;u&&u()},[g,u]),x=(0,s.useMemo)(()=>({id:h,initial:n,isPresent:a,custom:c,onExitComplete:m,register:e=>(g.set(e,!1),()=>g.delete(e))}),d?[Math.random(),m]:[a,m]);return(0,s.useMemo)(()=>{g.forEach((e,t)=>g.set(t,!1))},[a]),s.useEffect(()=>{a||g.size||!u||u()},[a]),"popLayout"===p&&(t=(0,r.jsx)(l,{isPresent:a,children:t})),(0,r.jsx)(i.O.Provider,{value:x,children:t})};function f(){return new Map}var d=n(8881),p=n(2035);let g=e=>e.key||"";function h(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}var m=n(1534);let x=e=>{let{children:t,exitBeforeEnter:n,custom:i,initial:a=!0,onExitComplete:u,presenceAffectsLayout:l=!0,mode:f="sync"}=e;(0,p.k)(!n,"Replace exitBeforeEnter with mode='wait'");let x=(0,s.useMemo)(()=>h(t),[t]),E=x.map(g),w=(0,s.useRef)(!0),N=(0,s.useRef)(x),b=(0,o.h)(()=>new Map),[y,C]=(0,s.useState)(x),[v,k]=(0,s.useState)(x);(0,m.L)(()=>{w.current=!1,N.current=x;for(let e=0;e<v.length;e++){let t=g(v[e]);E.includes(t)?b.delete(t):!0!==b.get(t)&&b.set(t,!1)}},[v,E.length,E.join("-")]);let R=[];if(x!==y){let e=[...x];for(let t=0;t<v.length;t++){let n=v[t],r=g(n);E.includes(r)||(e.splice(t,0,n),R.push(n))}"wait"===f&&R.length&&(e=R),k(h(e)),C(x);return}let{forceRender:I}=(0,s.useContext)(d.p);return(0,r.jsx)(r.Fragment,{children:v.map(e=>{let t=g(e),n=x===v||E.includes(t);return(0,r.jsx)(c,{isPresent:n,initial:(!w.current||!!a)&&void 0,custom:n?void 0:i,presenceAffectsLayout:l,mode:f,onExitComplete:n?void 0:()=>{if(!b.has(t))return;b.set(t,!0);let e=!0;b.forEach(t=>{t||(e=!1)}),e&&(null==I||I(),k(N.current),u&&u())},children:e},t)})})}},8881:function(e,t,n){"use strict";n.d(t,{p:function(){return r}});let r=(0,n(2265).createContext)({})},5750:function(e,t,n){"use strict";n.d(t,{_:function(){return r}});let r=(0,n(2265).createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"})},4252:function(e,t,n){"use strict";n.d(t,{O:function(){return r}});let r=(0,n(2265).createContext)(null)},4563:function(e,t,n){"use strict";n.d(t,{j:function(){return r}});let r="undefined"!=typeof window},3576:function(e,t,n){"use strict";n.d(t,{h:function(){return s}});var r=n(2265);function s(e){let t=(0,r.useRef)(null);return null===t.current&&(t.current=e()),t.current}},1534:function(e,t,n){"use strict";n.d(t,{L:function(){return s}});var r=n(2265);let s=n(4563).j?r.useLayoutEffect:r.useEffect},2035:function(e,t,n){"use strict";n.d(t,{K:function(){return s},k:function(){return i}});var r=n(6277);let s=r.Z,i=r.Z},6277:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=e=>e},3949:function(e,t,n){"use strict";let r;n.d(t,{a3:function(){return S},Db:function(){return y},$G:function(){return P}});var s=n(2265);n(9917),Object.create(null);let i=(e,t,n,r)=>{let s=[n,{code:t,...r||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(s,"warn","react-i18next::",!0);d(s[0])&&(s[0]=`react-i18next:: ${s[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...s):console?.warn&&console.warn(...s)},o={},a=(e,t,n,r)=>{d(n)&&o[n]||(d(n)&&(o[n]=new Date),i(e,t,n,r))},u=(e,t)=>()=>{if(e.isInitialized)t();else{let n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},l=(e,t,n)=>{e.loadNamespaces(t,u(e,n))},c=(e,t,n,r)=>{if(d(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return l(e,n,r);n.forEach(t=>{0>e.options.ns.indexOf(t)&&e.options.ns.push(t)}),e.loadLanguages(t,u(e,r))},f=(e,t,n={})=>t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n?.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):(a(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0),d=e=>"string"==typeof e,p=e=>"object"==typeof e&&null!==e,g=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,h={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},m=e=>h[e],x={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(g,m)},E=(e={})=>{x={...x,...e}},w=()=>x,N=e=>{r=e},b=()=>r,y={type:"3rdParty",init(e){E(e.options.react),N(e)}},C=(0,s.createContext)();class v{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}let k=(e,t)=>{let n=(0,s.useRef)();return(0,s.useEffect)(()=>{n.current=t?n.current:e},[e,t]),n.current},R=(e,t,n,r)=>e.getFixedT(t,n,r),I=(e,t,n,r)=>(0,s.useCallback)(R(e,t,n,r),[e,t,n,r]),P=(e,t={})=>{let{i18n:n}=t,{i18n:r,defaultNS:i}=(0,s.useContext)(C)||{},o=n||r||b();if(o&&!o.reportNamespaces&&(o.reportNamespaces=new v),!o){a(o,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");let e=(e,t)=>d(t)?t:p(t)&&d(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e,t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}o.options.react?.wait&&a(o,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");let u={...w(),...o.options.react,...t},{useSuspense:g,keyPrefix:h}=u,m=e||i||o.options?.defaultNS;m=d(m)?[m]:m||["translation"],o.reportNamespaces.addUsedNamespaces?.(m);let x=(o.isInitialized||o.initializedStoreOnce)&&m.every(e=>f(e,o,u)),E=I(o,t.lng||null,"fallback"===u.nsMode?m:m[0],h),N=()=>E,y=()=>R(o,t.lng||null,"fallback"===u.nsMode?m:m[0],h),[P,S]=(0,s.useState)(N),j=m.join();t.lng&&(j=`${t.lng}${j}`);let O=k(j),T=(0,s.useRef)(!0);(0,s.useEffect)(()=>{let{bindI18n:e,bindI18nStore:n}=u;T.current=!0,x||g||(t.lng?c(o,t.lng,m,()=>{T.current&&S(y)}):l(o,m,()=>{T.current&&S(y)})),x&&O&&O!==j&&T.current&&S(y);let r=()=>{T.current&&S(y)};return e&&o?.on(e,r),n&&o?.store.on(n,r),()=>{T.current=!1,o&&e?.split(" ").forEach(e=>o.off(e,r)),n&&o&&n.split(" ").forEach(e=>o.store.off(e,r))}},[o,j]),(0,s.useEffect)(()=>{T.current&&x&&S(N)},[o,h,x]);let L=[P,o,x];if(L.t=P,L.i18n=o,L.ready=x,x||!x&&!g)return L;throw new Promise(e=>{t.lng?c(o,t.lng,m,()=>e()):l(o,m,()=>e())})};function S({i18n:e,defaultNS:t,children:n}){let r=(0,s.useMemo)(()=>({i18n:e,defaultNS:t}),[e,t]);return(0,s.createElement)(C.Provider,{value:r},n)}}}]);