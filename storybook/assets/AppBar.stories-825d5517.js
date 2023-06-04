import{j as e}from"./jsx-runtime-94f6e698.js";import{e as d,g as w,h as B}from"./environment-eafc0253.js";import{i as r}from"./styled-components.browser.esm-10889fc4.js";import{a as j,b as C,s as l,d as u,e as h}from"./cartItemsState-5a52d14c.js";import{p as k,A}from"./AwaitRecoilState-14029da1.js";import{B as P}from"./Badge-71cbc1b5.js";import{S as b}from"./Spinner-e4c9f8eb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const z=""+new URL("home-icon-d5623918.svg",import.meta.url).href,I=d({key:"userCartItemsState",get:({get:t})=>{const n=t(j);return t(C(n))}}),N=d({key:"userAuthorizationState",get:({get:t})=>{const n=t(l);return t(u(n))},set:({get:t,set:n},s)=>{const a=t(l);n(u(a),s)}}),R=d({key:"userProfileState",get:({get:t})=>{const n=t(j),s=t(N);return s===null?null:{...t(k({client:n})).acceptOrThrow(200).data,username:s.username}}}),M=r.header`
  width: 100%;
  height: 80px;

  background: #333;
  color: white;
`,H=r.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 24px;

  height: 100%;
  max-width: 1300px;
`,O=r.button`
  display: flex;
  align-items: center;
  gap: 12px;

  color: inherit;
`,V=r.h1`
  font-size: 40px;
  font-weight: 900;
`,E=r.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  padding: 4px 24px;
`,c=r.button`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 6px;

  font-size: 24px;
  font-weight: 500;
`,D=r.select`
  background-color: transparent;
`,L=r.option`
  background-color: #333;
`,T=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,U=r.div`
  font-size: 16px;
`,q=r.div`
  font-size: 12px;

  &::after {
    content: 'P';
    margin-left: 4px;
  }
`,p=t=>{const{onNavigate:n}=t,s=w(I),[a,m]=B(l),v=o=>{const S=o.target.value,y=h.find(_=>_.name===S);m(y)};return e.jsx(M,{children:e.jsxs(H,{children:[e.jsxs(O,{onClick:()=>n("/"),children:[e.jsx("img",{alt:"홈",src:z,width:44}),e.jsx(V,{children:"SHOP"})]}),e.jsxs(E,{children:[e.jsx(D,{onChange:v,value:a.name,children:h.map(o=>e.jsx(L,{value:o.name,children:o.name},o.name))}),e.jsx(c,{onClick:()=>n("/orders"),children:"주문목록"}),e.jsxs(c,{onClick:()=>n("/cart"),children:["장바구니"," ",s.state==="hasValue"&&e.jsx(P,{show:s.getValue().length>0,children:s.getValue().length})]}),e.jsx(A,{state:R,loadingElement:e.jsx(b,{color:"currentColor"}),children:o=>o?e.jsxs(T,{children:[e.jsx(U,{children:o.username}),e.jsx(q,{children:o.currentPoints})]}):e.jsx(c,{onClick:()=>n("/login"),children:"로그인"})})]})]})})};try{p.displayName="AppBar",p.__docgenInfo={description:"",displayName:"AppBar",props:{onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!0,type:{name:"(to: string) => void"}}}}}catch{}const ee={title:"AppBar",component:p},i={};var x,f,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const te=["Default"];export{i as Default,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=AppBar.stories-825d5517.js.map
