import{r as c}from"./index-8db94870.js";import{N as O,s as j,i as x,h as L,u as b,j as A,k as S}from"./index-d9c88573.js";/**
 * React Router DOM v6.11.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},m.apply(this,arguments)}function F(e,r){if(e==null)return{};var a={},t=Object.keys(e),n,o;for(o=0;o<t.length;o++)n=t[o],!(r.indexOf(n)>=0)&&(a[n]=e[n]);return a}function K(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _(e,r){return e.button===0&&(!r||r==="_self")&&!K(e)}function g(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((r,a)=>{let t=e[a];return r.concat(Array.isArray(t)?t.map(n=>[a,n]):[[a,t]])},[]))}function B(e,r){let a=g(e);if(r)for(let t of r.keys())a.has(t)||r.getAll(t).forEach(n=>{a.append(t,n)});return a}const N=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],W=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G=c.forwardRef(function(r,a){let{onClick:t,relative:n,reloadDocument:o,replace:i,state:l,target:u,to:s,preventScrollReset:h}=r,d=F(r,N),{basename:k}=c.useContext(O),y,R=!1;if(typeof s=="string"&&z.test(s)&&(y=s,W))try{let f=new URL(window.location.href),p=s.startsWith("//")?new URL(f.protocol+s):new URL(s),v=j(p.pathname,k);p.origin===f.origin&&v!=null?s=v+p.search+p.hash:R=!0}catch{}let U=x(s,{relative:n}),C=D(s,{replace:i,state:l,target:u,preventScrollReset:h,relative:n});function E(f){t&&t(f),f.defaultPrevented||C(f)}return c.createElement("a",m({},d,{href:y||U,onClick:R||o?t:E,ref:a,target:u}))});var w;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(w||(w={}));var P;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(P||(P={}));function D(e,r){let{target:a,replace:t,state:n,preventScrollReset:o,relative:i}=r===void 0?{}:r,l=L(),u=b(),s=A(e,{relative:i});return c.useCallback(h=>{if(_(h,a)){h.preventDefault();let d=t!==void 0?t:S(u)===S(s);l(e,{replace:d,state:n,preventScrollReset:o,relative:i})}},[u,l,s,t,n,a,e,o,i])}function T(e){let r=c.useRef(g(e)),a=c.useRef(!1),t=b(),n=c.useMemo(()=>B(t.search,a.current?null:r.current),[t.search]),o=L(),i=c.useCallback((l,u)=>{const s=g(typeof l=="function"?l(n):l);a.current=!0,o("?"+s,u)},[o,n]);return[n,i]}export{G as L,T as u};
//# sourceMappingURL=index-e38f4b4b.js.map