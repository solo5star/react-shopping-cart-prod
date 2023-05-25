import{j as e,i as n}from"./styled-components.browser.esm-65bc2296.js";import{b as y,c as j}from"./http-4b3419c1.js";import{s as v,a as m,c as E}from"./cartItemsState-0ef27d27.js";import{B as R}from"./Badge-c3c16766.js";import{R as w,r as S}from"./index-8db94870.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";const N=""+new URL("home-icon-d5623918.svg",import.meta.url).href;class l extends w.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}render(){const{fallback:t,children:o}=this.props,{hasError:s}=this.state;return s?t:o}}try{l.displayName="ErrorBoundary",l.__docgenInfo={description:"",displayName:"ErrorBoundary",props:{fallback:{defaultValue:null,description:"",name:"fallback",required:!1,type:{name:"ReactNode"}}}}}catch{}const b=r=>{const{state:t,children:o}=r,s=y(t);return o(s)},d=r=>{const{errorElement:t,loadingElement:o,state:s,children:c}=r;return e.jsx(l,{fallback:t,children:e.jsx(S.Suspense,{fallback:o,children:e.jsx(b,{state:s,children:c})})})};try{d.displayName="AwaitRecoilState",d.__docgenInfo={description:"",displayName:"AwaitRecoilState",props:{loadingElement:{defaultValue:null,description:"",name:"loadingElement",required:!1,type:{name:"ReactNode"}},errorElement:{defaultValue:null,description:"",name:"errorElement",required:!1,type:{name:"ReactNode"}},state:{defaultValue:null,description:"",name:"state",required:!0,type:{name:"RecoilValueReadOnly<T>"}}}}}catch{}const k=n.header`
  width: 100%;
  height: 80px;

  background: #333;
  color: white;
`,H=n.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 24px;

  height: 100%;
  max-width: 1300px;
`,B=n.button`
  display: flex;
  align-items: center;
  gap: 12px;

  color: inherit;
`,C=n.h1`
  font-size: 40px;
  font-weight: 900;
`,V=n.nav`
  display: flex;
  gap: 24px;

  padding: 4px 24px;
`,q=n.button`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 24px;
  font-weight: 500;
`,A=n.select`
  background-color: transparent;
`,I=n.option`
  background-color: #333;
`,p=r=>{const{onNavigate:t}=r,[o,s]=j(v),c=a=>{const x=a.target.value,f=m.find(_=>_.name===x);s(f)};return e.jsx(k,{children:e.jsxs(H,{children:[e.jsxs(B,{onClick:()=>t("/"),children:[e.jsx("img",{alt:"홈",src:N,width:44}),e.jsx(C,{children:"SHOP"})]}),e.jsxs(V,{children:[e.jsx(A,{onChange:c,value:o.name,children:m.map(a=>e.jsx(I,{value:a.name,children:a.name},a.name))}),e.jsxs(q,{onClick:()=>t("/cart"),children:["장바구니"," ",e.jsx(d,{state:E,children:a=>e.jsx(R,{show:a.length>0,children:a.length})})]})]})]})})};try{p.displayName="Header",p.__docgenInfo={description:"",displayName:"Header",props:{onNavigate:{defaultValue:null,description:"",name:"onNavigate",required:!0,type:{name:"(to: string) => void"}}}}}catch{}const P={title:"Header",component:p},i={};var u,h,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const U=["Default"];export{i as Default,U as __namedExportsOrder,P as default};
//# sourceMappingURL=Header.stories-a8e69d90.js.map
