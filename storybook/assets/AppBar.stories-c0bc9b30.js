import{j as e}from"./jsx-runtime-94f6e698.js";import{c as y,e as p,f as S}from"./environment-47b79d9e.js";import{i as t}from"./styled-components.browser.esm-10889fc4.js";import{c as B,a as C,s as w,d}from"./cartItemsState-a1a9cd9c.js";import{u as b}from"./userProfileState-26f81e3d.js";import{B as k}from"./Badge-71cbc1b5.js";import{S as P}from"./Spinner-e4c9f8eb.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const V=""+new URL("home-icon-d5623918.svg",import.meta.url).href,A=y({key:"userCartItemsState",get:({get:r})=>{const n=r(B);return r(C(n))}}),I=t.header`
  width: 100%;
  height: 80px;

  background: #333;
  color: white;
`,N=t.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 24px;

  height: 100%;
  max-width: 1300px;
`,M=t.button`
  display: flex;
  align-items: center;
  gap: 12px;

  color: inherit;
`,R=t.h1`
  font-size: 40px;
  font-weight: 900;
`,z=t.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  padding: 4px 24px;
`,c=t.button`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 6px;

  font-size: 24px;
  font-weight: 500;
`,H=t.select`
  background-color: transparent;
`,L=t.option`
  background-color: #333;
`,O=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,D=t.div`
  font-size: 16px;
`,E=t.div`
  font-size: 12px;

  &::after {
    content: 'P';
    margin-left: 4px;
  }
`,l=r=>{const{onNavigate:n}=r,i=p(A),a=p(b),[g,h]=S(w),f=o=>{const j=o.target.value,v=d.find(_=>_.name===j);h(v)};return e.jsx(I,{children:e.jsxs(N,{children:[e.jsxs(M,{onClick:()=>n("/"),children:[e.jsx("img",{alt:"홈",src:V,width:44}),e.jsx(R,{children:"SHOP"})]}),e.jsxs(z,{children:[e.jsx(H,{onChange:f,value:g.name,children:d.map(o=>e.jsx(L,{value:o.name,children:o.name},o.name))}),e.jsx(c,{onClick:()=>n("/orders"),children:"주문목록"}),e.jsxs(c,{onClick:()=>n("/cart"),children:["장바구니"," ",i.state==="hasValue"&&e.jsx(k,{show:i.getValue().length>0,children:i.getValue().length})]}),a.state==="loading"?e.jsx(P,{color:"currentColor"}):a.state==="hasValue"?e.jsxs(O,{children:[e.jsx(D,{children:a.getValue().username}),e.jsx(E,{children:a.getValue().currentPoints})]}):e.jsx(c,{onClick:()=>n("/login"),children:"로그인"})]})]})})};try{l.displayName="AppBar",l.__docgenInfo={description:"",displayName:"AppBar",props:{onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!0,type:{name:"(to: string) => void"}}}}}catch{}const Y={title:"AppBar",component:l},s={};var m,u,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const Z=["Default"];export{s as Default,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=AppBar.stories-c0bc9b30.js.map
